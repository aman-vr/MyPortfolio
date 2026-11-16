If AI is coming for my job, it can start with the parts I hate: updating work items, chasing build warnings, keeping docs current.

First up was my DevOps board. In classic engineer fashion, that one chore turned into ten AI skills, a set of guardrails and 100+ tests within two weeks, built alongside my actual work and all running on my own machine.

![Expanding brain meme. Updating the board by hand. Asking Copilot to write the updates. Building a skill that writes them. Building 10 skills and 100+ tests to avoid a 10-minute chore.](/images/blog/governed-ai-agent-ecosystem/meme-expanding-brain.jpg)

In my defence, I'm a slightly paranoid developer. I wasn't letting AI near real work until it had earned my trust, and I wanted that trust to come from guardrails I could test, not from hoping the model follows instructions.

This also isn't a post about letting agents run free. Plenty of companies aren't ready for that, often for good reasons: risk, audit, regulation, or a culture that wants a person accountable for every change. In those places, the realistic model isn't "automate it all". It's **developers in the loop**: AI does the work, and the developer orchestrates it and signs off.

> **The short version**
>
> - Rules in a prompt get bent; rules in a script don't.
> - Approval covers the exact change, so "yes, but tweak this" means a new preview.
> - Every guard has tests that try to break it.
> - One skill's whole job is checking the other nine.
> - No skill is right the first time: each one gets updated after real use.

## The copy-paste loop

Nobody enjoys updating work items, the stories, tasks and bugs on the board. But I rely on the visibility they give, for my team and for myself: everyone should be able to see what's actually happening, not what we optimistically planned three sprints ago.

So my routine was: explain the feature and the format I wanted, copy Copilot's draft into Azure DevOps, fix the formatting, then explain it all again for the next item to an assistant with the memory of a goldfish. The AI did the writing; I did the copying, pasting and fixing.

## Explain it once, in a file

The fix was to stop using Copilot as a chat window and use it as an agent: the same model, running in a loop with tools it can call, like reading my branch or creating a work item. The tools come through MCP (Model Context Protocol), a standard way to plug a service like Azure DevOps into an agent without custom glue.

What was still missing was the context I kept retyping. That became a skill: a markdown file that says when to use it, how I want stories, tasks and bugs written, and the steps to follow. The agent loads it when a request matches. I explained what I wanted once, and it stayed explained.

## Then everything became a skill

After that I started noticing every instruction I'd given twice. Within those same two weeks, ten skills took over most of the repetitive parts of my day. A few of them:

| Skill | What it does for me |
| --- | --- |
| Board read | Handles the board reading I'd otherwise click through: items, details and links, pulled read-only and summarised the way I need them |
| Board write | Creates and updates stories, tasks and bugs in my preferred structure and style |
| Build health | Lists warnings on my branch, separates mine from what a merge brought in, and fixes causes instead of suppressing them |
| Tests | Runs unit tests, adds missing ones, and checks whether a failure also happens on the base branch |
| Docs | Adds XML docs and keeps comments and READMEs in step with the code, consistent with the documentation standards |
| Security scan | Runs CodeQL with the pipeline's settings and triages each alert before I raise a PR |
| PR review | Drafts a review against the repo's own guidelines and the shared engineering standards, flagging breaking changes and violations. I read it before anything is posted |
| Skills health | Checks the setup itself: integrity, stale logs, broken references |

## Skill by skill, never right the first time

I didn't design ten skills up front. I built one, used it until something annoyed me, and fixed what annoyed me. Every major run ends the same way: what worked, what didn't, and what the skill should do differently next time. That goes into the skill or the shared standards straight away, while it's fresh.

I also document what works and what doesn't, so the lessons don't live only in my head. It's why the tenth skill took a fraction of the effort of the first: each new one starts from the same rules, standards and test patterns, plus everything the earlier ones got wrong.

The next skill gets picked by counting, not by ideas. I look at what I actually keep asking the agent for, and the repeats win. Several brilliant-sounding ideas never made the cut.

## The problem with polite rules

It was all genuinely useful, and that was the part that worried me. I'd given a confident, fast model write access to things other people read.

My first guardrails were sentences in the skill files. "Always show me a preview." "Never touch protected files." They worked most of the time, which is a lovely quality in a coworker and a terrible one in a guardrail.

The case I worried about most was **approval drift**. I approve a preview, then say "yes, but change this one line", and what lands is no longer what I approved. A rule written in the skill file can't reliably stop that, because a quick "yes, but…" from me is enough to talk the agent past it.

So I settled on one principle: **analysis is free, change is earned**. The agent can read, search, build and test as much as it likes. Anything that changes something goes through a script that enforces the rules, and the script doesn't care how persuasive the model is.

## Following one request through the loop

Here's what happens now when I ask: "Create a user story for this requirement, with tasks under it for me."

![The agent proposes, the script decides: you ask, the agent reads and plans, a preview is shown, you approve the exact version, a guarded script applies it only if the approval code matches, then it verifies and logs. Any edit to the preview produces a new preview.](/images/blog/governed-ai-agent-ecosystem/agent-loop.svg)

1. **It reads first, without asking.** The board skill loads my templates for stories and tasks, how I tag them and my preferred writing style, then reads the requirement.
2. **It shows a preview, and nothing is applied.** The story and every task appear exactly as they would on the board, in one preview. The script attaches an **approval code**: a fingerprint of that exact content (and, when updating existing items, of each item's current version). If anything looks like a secret, it stops before the preview is even shown.
3. **I ask for a tweak.** "Split the API task into two." That isn't approval. It produces a new preview and a new code.
4. **I approve the final version.** The script applies only if the code still matches. If a word changed, or someone edited an existing item in the meantime, it refuses and writes nothing. If one item in the batch is blocked, the whole batch is.
5. **It verifies and logs.** It confirms what landed and records metadata only: what changed and when, never the content.

The agent can't talk its way around a hash. That's the whole trick.

There's also no delete script at all. You can't misuse a capability that doesn't exist.

## Who checks the checkers?

A guard nobody has tried to break is just another polite rule. So the guards have their own test suite, run against fake folders and stubbed external calls, so a test can never touch anything real. Each test tries to trick a guard: a stale approval code, a file outside the approved plan, a secret hidden in a description.

Three rules came out of this: tests before guards, guards before skills, and never weaken a guard to make a test pass.

Skills drift too: a quick edit here, a stale reference there. So one skill's whole job is checking the other nine. It fingerprints the guards, standards and skills, flags anything that changed since I last reviewed it, and catches broken references and stale logs. It's the closest thing the setup has to a code review for itself.

## Zooming out: the ecosystem

The board flow is one path through a bigger stack. Rules flow down, and the stricter rule always wins: a skill can be stricter than the guardrails, never looser.

![Rules flow down, and the stricter rule always wins: personal rules file, guardrails, standards, skills, scripts and guards, and config, with docs, a health check and tests alongside.](/images/blog/governed-ai-agent-ecosystem/ecosystem-layers.svg)

| Tier | What it means | Examples |
| --- | --- | --- |
| 0 | Runs without asking | Build, unit tests, scans, reading the board |
| 1 | Numbered list, I pick, I approve the final version | Warning fixes, doc updates, new tests |
| 2 | Only when my current message names it | Protected files, deleting files, adding packages, big batch changes |
| 3 | Never | Git commits, posting outside the approved flow, printing secrets, editing a guard to get past it |

### What standardising bought me

Shared standards for code quality, documentation, testing, security and logging sit under every skill, and a repo's own standard always wins over mine.

Every skill follows the same contract: load the guardrails first, and for anything that writes, preview before applying, apply only the final version I approve, log metadata only, and have tests for its guards. That one decision is where most of the value came from.

Stories, bugs, reviews and doc updates come out in the same structure every time, and a request is one sentence rather than a briefing, because the context and conventions live in files.

Every change arrives the same way, as a numbered list or a preview, so checking it is quick. Code work is scoped to my branch, and anything out of scope gets counted, not fixed.

It also made the setup cheap to extend and easy to rebuild. A new skill inherits the guardrails, standards and test patterns instead of reinventing them, and with a rebuild guide, the whole thing can be rebuilt from three files: the philosophy, my working style and my personal rules.

## If I started again

- **Write the rules before the code.** A short rules file and the tiers in plain prose. It forces the decisions the scripts later enforce.
- **Start read-only.** Reading is where agents are most useful and least dangerous, and it builds the trust you need before letting them write.
- **Add one guarded write.** Preview, approve the exact version, apply only through a script that checks it. One is enough to learn the pattern.
- **Write the tests before the guards.** Fake folders, stubbed network calls and a test for every refusal.
- **Expect to pay up front.** Building this took thousands of credits. Running it is cheap, because scripts do the deterministic work, the model only orchestrates, and skills stop me paying to re-explain context.

Two honest caveats. This is a personal setup, not a replacement for security reviews, access policies or anyone whose job is to say no. And guardrails lower risk without removing it: the script makes sure only what I approved lands, but it can't make me approve the right thing.

## Closing

If there's one thing to take away: a rule in a prompt is a request. A rule in a script is a fact.

This isn't the most advanced agent setup out there, and it doesn't need to be. The ambitious stuff can come later; the trust has to come first.

![It ain't much, but it's honest work.](/images/blog/governed-ai-agent-ecosystem/meme-honest-work.jpg)

Classic engineer move: to keep my DevOps board up to date, I built a whole custom skills ecosystem with 100+ tests, on my own machine, over two weeks alongside my actual work.

![Expanding brain meme. Updating the board by hand. Asking Copilot to write the updates. Building a skill that writes them. Building 10 skills and 100+ tests to avoid a 10-minute chore.](/images/blog/governed-ai-agent-ecosystem/meme-expanding-brain.jpg)

In my defence, I'm a slightly paranoid developer. I wasn't going to let an agent loose on real work until it had earned that trust, and I wanted the trust to come from guardrails, not good behaviour.

## The copy-paste loop

Nobody enjoys updating work items. But I do want visibility: my lead, my team and future me should see what's actually happening, not what we optimistically planned three sprints ago.

So my routine was: explain the feature and our team's template to Copilot, copy the draft into Azure DevOps, fix the formatting, then explain it all again for the next item to an assistant with the memory of a goldfish. The AI did the writing; I did the copying, pasting and fixing.

## Explain it once, in a file

The fix was to stop using Copilot as a chat window and use it as an agent: the same model, running in a loop with tools it can call, like reading my branch or creating a work item. The tools come through MCP (Model Context Protocol), a standard way to plug a service like Azure DevOps into an agent without custom glue.

What was still missing was the context I kept retyping. That became a skill: a markdown file that says when to use it, how our team writes stories and tasks, and the steps to follow. The agent loads it when a request matches. I explained our conventions once, and they stayed explained.

## Then everything became a skill

After that I started noticing every instruction I'd given twice. Over the next two weeks, ten skills took over most of the repetitive parts of my day. A few of them:

| Skill | What it does for me |
| --- | --- |
| Board read | Reviews a feature or story tree for gaps, duplicates and stale items |
| Board write | Creates and updates stories and tasks in the team's templates and style |
| Build health | Lists warnings on my branch, separates mine from what a merge brought in, and fixes causes instead of suppressing them |
| Tests | Runs unit tests and checks whether a failure also happens on the base branch |
| Docs | Keeps code comments and READMEs in step with the current code |
| Security scan | Runs CodeQL with the pipeline's settings and triages each alert before I raise a PR |
| PR review | Drafts a review I read before anything is posted: thorough for my own PRs, short and friendly for others' |
| Skills health | Checks the setup itself: integrity, stale logs, broken references |

It was genuinely useful, and that was the part that worried me. I'd given a confident, fast model write access to things other people read.

## The problem with polite rules

My first guardrails were sentences in the skill files. "Always show me a preview." "Never touch protected files." They worked most of the time, which is a lovely quality in a coworker and a terrible one in a guardrail.

The case I worried about most was approval drift. I approve a preview, then say "yes, but change this one line", and what lands is no longer what I approved. No prompt reliably prevents that, because the prompt is exactly what's being bent.

So I settled on one principle: analysis is free, change is earned. The agent can read, search, build and test as much as it likes. Anything that changes something goes through a script that enforces the rules, and the script doesn't care how persuasive the model is.

## Following one request through the loop

Here's what happens now when I ask: "Create a user story for this requirement, with tasks under it for me."

![The agent proposes, the script decides: you ask, the agent reads and plans, a preview is shown, you approve the exact version, a guarded script applies it only if the approval code matches, then it verifies and logs. Any edit to the preview produces a new preview.](/images/blog/governed-ai-agent-ecosystem/agent-loop.svg)

1. **It reads first, without asking.** The board skill loads our templates for stories and tasks, the tag guide and the team's writing style, then reads the requirement.
2. **It shows a preview, and nothing is applied.** The story and every task appear exactly as they would on the board, in one preview. The script attaches an approval code: a fingerprint of that exact content plus each item's current version. If anything looks like a secret, it stops before the preview is even shown.
3. **I ask for a tweak.** "Split the API task into two." That isn't approval. It produces a new preview and a new code.
4. **I approve the final version.** The script applies only if the code still matches. If a word changed, or a teammate edited an item in the meantime, it refuses and writes nothing. If one item in the batch is blocked, the whole batch is.
5. **It verifies and logs.** It confirms what landed and records metadata only: what changed and when, never the content.

The agent can't talk its way around a hash. That's the whole trick. And there's no delete script at all, because you can't misuse a capability that doesn't exist.

## Who tests the guards?

A guard nobody has tried to break is just another polite rule. So the guards have their own test suite, run against fake folders with every external call stubbed, so a test can never touch anything real. Each test tries to trick a guard: a stale approval code, a file outside the approved plan, a secret hidden in a description.

Two rules came out of this: tests before guards, guards before skills. And never weaken a guard to make a test pass. A health check also fingerprints the guards and skills, and flags anything that changed since I last reviewed it.

## Zooming out: the ecosystem

The board flow is one path through a bigger stack. Rules flow down, and the stricter rule always wins: a skill can be stricter than the guardrails, never looser.

![Rules flow down, and the stricter rule always wins: personal rules file, guardrails, standards, skills, scripts and guards, and config, with docs, a health check and tests alongside.](/images/blog/governed-ai-agent-ecosystem/ecosystem-layers.svg)

| Tier | What it means | Examples |
| --- | --- | --- |
| 0 | Runs without asking | Build, unit tests, scans, reading the board |
| 1 | Numbered list, I pick, I approve the final version | Warning fixes, doc updates, new tests |
| 2 | Only when my current message names it | Protected files, deleting files, adding packages, big batch changes |
| 3 | Never | Git commits, posting outside the approved flow, printing secrets, editing a guard to get past it |

Shared standards for code quality, documentation, testing, security and logging sit under every skill, and a repo's own standard always wins over mine.

### What standardising bought me

Every skill follows the same contract: load the guardrails, preview before applying, apply only the final version I approve, log metadata only, and have tests for its guards. That one decision is where most of the value came from.

- **Consistency.** Stories, tasks, reviews and doc updates come out in the same structure and style every time.
- **Speed without re-explaining.** Context and conventions live in files, so a request is one sentence, not a briefing.
- **Predictable reviews.** Every change arrives the same way, as a numbered list or a preview, so checking it is quick.
- **Focus.** Code work is scoped to my branch by default. Out-of-scope findings are counted, not fixed.
- **Cheap to extend.** A new skill inherits the guardrails, standards and test patterns instead of reinventing them.
- **Rebuildable.** A philosophy, a working-style spec and a rebuild guide mean the whole setup can be rebuilt from three files.

## If I started again

- **Write the rules before the code.** A short rules file and the tiers in plain prose. It forces the decisions the scripts later enforce.
- **Start read-only.** Reading is where agents are most useful and least dangerous, and it builds the trust you need before letting them write.
- **Add one guarded write.** Preview, approve the exact version, apply only through a script that checks it. One is enough to learn the pattern.
- **Write the tests before the guards.** Fake folders, stubbed network calls and a test for every refusal.
- **Count before you build.** Look at what you actually ask the agent for; the repeats are your next skill. Several of my brilliant-sounding ideas never made the cut.
- **Expect to pay up front.** Building this took thousands of credits. Running it is cheap, because scripts do the deterministic work, the model only orchestrates, and skills stop me paying to re-explain context.

Two honest caveats. This is a personal setup, not a replacement for security reviews, access policies or anyone whose job is to say no. And guardrails lower risk without removing it: the script makes sure only what I approved lands, but it can't make me approve the right thing.

## Closing

This isn't the most advanced agent setup out there, and it doesn't need to be. It's what let me hand an agent real work and trust the result, one guarded step at a time. The ambitious stuff can come later; the trust has to come first.

![It ain't much, but it's honest work.](/images/blog/governed-ai-agent-ecosystem/meme-honest-work.jpg)

A rule in a prompt is a request. A rule in a script is a fact.

And the board is finally up to date. It only took 100+ tests.

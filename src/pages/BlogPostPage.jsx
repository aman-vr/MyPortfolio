// BlogPostPage.jsx — Renders one post at /blog/:slug from its Markdown body.
// Reads: posts metadata (src/data/posts.js), body (src/content/posts/<slug>.md), profile.social

import { useEffect } from "react";
import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { findPost, formatPostDate } from "../data/posts";
import { getPostBody } from "../content/posts";
import useDocumentMeta from "../hooks/useDocumentMeta";
import profile from "../data/profile";
import NotFoundPage from "./NotFoundPage";

// Element overrides for the rendered Markdown. react-markdown also passes its syntax-tree
// `node`, which must not reach the DOM, so each override strips it before spreading props.
const markdownComponents = {
  a: (props) => {
    const { node: _node, href, ...rest } = props;
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        {...rest}
      />
    );
  },
  // Diagrams open full size in a new tab, since their labels get small on phones.
  img: (props) => {
    const { node: _node, alt, src, ...rest } = props;
    // Memes (files named meme-*) are shown smaller and centred, without the full-size link.
    if (src?.includes("/meme-")) {
      return (
        <img src={src} alt={alt} loading="lazy" className="mx-auto w-full max-w-md rounded-xl" {...rest} />
      );
    }
    return (
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`${alt} (opens full size)`}>
        <img src={src} alt={alt} loading="lazy" className="w-full rounded-xl" {...rest} />
      </a>
    );
  },
  table: (props) => {
    const { node: _node, ...rest } = props;
    return (
      <div className="overflow-x-auto">
        <table {...rest} />
      </div>
    );
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = findPost(slug);
  const body = post ? getPostBody(post.slug) : null;

  useDocumentMeta(
    post ? `${post.title} | ${profile.name}` : `Not found | ${profile.name}`,
    post?.description ?? profile.metaDescription
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post || !body) return <NotFoundPage />;

  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/#blog"
          className="text-stone-500 hover:text-white text-sm transition-colors duration-200"
        >
          &larr; All writing
        </Link>

        <header className="mt-8 mb-12 pb-10 border-b border-stone-800">
          <p className="text-amber-400 text-sm font-mono mb-4 tracking-wider">
            {profile.name} · {formatPostDate(post.date)}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-stone-400 text-lg md:text-xl">{post.subtitle}</p>
        </header>

        <div
          className="prose prose-invert prose-stone md:prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-th:text-white
            prose-li:marker:text-amber-400
            prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-stone-300
            prose-blockquote:border-amber-400 prose-blockquote:bg-stone-900/60 prose-blockquote:rounded-r-lg
            prose-blockquote:px-6 prose-blockquote:py-1
            [&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {body}
          </ReactMarkdown>
        </div>

        <footer className="mt-16 pt-10 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/#blog"
            className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
          >
            &larr; Back to all writing
          </Link>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-950 rounded transition-all duration-200"
          >
            Discuss on LinkedIn
          </a>
        </footer>
      </div>
    </article>
  );
}

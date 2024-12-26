import { getAllArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import Markdown from 'react-markdown'


const md = new MarkdownIt();

async function fetchArticles(slug) {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug);
}

export default async function Article({ params }) {
  const article = await fetchArticles((await params).slug);
  if (!article) notFound();
  const htmlConverter = md.render(article.content);

  return (
    <div>
      <h1>{article.data.title}</h1>
      <p>{article.data.date}</p>
      <Markdown>{article.content}</Markdown>
    </div>
  );
}

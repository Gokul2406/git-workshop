import { getAllArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Markdown from 'react-markdown'
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { VT323 } from "next/font/google";

const VT323_font = VT323({
  weight: "400"
})


const robotoMono = Roboto_Mono({
  weight: "700"
})


async function fetchArticles(slug) {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug);
}

export default async function Article({ params }) {
  const article = await fetchArticles((await params).slug);
  if (!article) notFound();

  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row w-3/4 h-fit pl-16 pt-8 items-center justify-around">
        <Link href={"/"}>
          <Image
            src="/arrow_left.svg"
            width={50}
            height={50}
            alt="Arrow left button" />
        </Link>
        <h1 className={`${VT323_font.className} text-8xl [text-shadow:_0_9px_4px_rgb(194_36_147_/_1)]`}>CONVERGENCE</h1>
      </div>
      <div className="w-screen h-screen flex flex-col bg-[#11111B] p-16">
        <h1 className={`${robotoMono.className} text-5xl mb-3 [text-shadow:_0_5px_4px_rgb(194_36_147_/_1)]`}>{article.data.title}</h1>
        <p className={`${robotoMono.className} text-[#8087A2] text-xl mt-3`}>date published: {article.data.date}</p>
        <p className={`${robotoMono.className} text-[#8087A2] text-xl mb-5`}>author: {article.data.author}</p>
        <Markdown className={`prose prose-base max-w-none prose-p:text-[#CAD3F5] ${robotoMono.className} prose-p:text-2xl prose-headings:text-[#cba6f7] prose-li:text-[#CAD3F5] prose-a:text-[#94e2d5] prose-strong:text-[#f9e2af] prose-code:text-[#f5c2e7]`}>{article.content}</Markdown>
      </div >
    </div>
  );
}

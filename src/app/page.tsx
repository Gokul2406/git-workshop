"use-client";
// src/app/page.tsx
import Image from "next/image";
import { VT323 } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Button from "@/components/Button";

const VT323_font = VT323({
  weight: "400",
});

const RobotoMono_font = Roboto_Mono({
  weight: "700",
});

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="bg-[#1e1e2e] min-h-screen text-[#cdd6f4]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#181825] z-50 px-6 py-4 flex justify-between items-center">
        <div className={`text-[#cba6f7] text-4xl font-bold `}>CONVERGENCE</div>
        <div className="flex text-3xl space-x-6">
          <a
            href="#home"
            className="px-4 py-2 rounded-md transition-colors duration-300 text-[#bac2de] hover:bg-[#313244]"
          >
            Home
          </a>
          <a
            href="#articles"
            className="px-4 py-2 rounded-md transition-colors duration-300 text-[#bac2de] hover:bg-[#313244]"
          >
            Articles
          </a>
        </div>
      </nav>

      {/* Hero Section (Full Screen) */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center px-6"
      >
        <h1 className="text-8xl font-bold text-[#cba6f7] mb-6">CONVERGENCE</h1>
        <p
          className={`text-md text-center max-w-2xl ${RobotoMono_font.className}`}
        >
          Where technology meets innovation. A collaborative platform by the
          Turing Club and Robotics Club showcasing cutting-edge research and
          ideas in technology and IoT.
        </p>
        <div className="mt-12">
          <a
            href="#articles"
            className="bg-[#f5c2e7] text-[#1e1e2e] px-6 py-3 rounded-md hover:bg-[#cba6f7] transition-colors duration-300"
          >
            Explore Articles
          </a>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section id="articles" className="min-h-screen bg-[#181825] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#cba6f7] mb-12">
            Latest Articles
          </h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.data.title}
                  author={article.data.author}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181826] py-8 px-6 border-t border-[#313244]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#cba6f7] text-xl font-bold mb-4 md:mb-0">
            Convergence
          </div>
          <div className="text-[#a6adc8]">
            A collaborative project by the Turing Club and Robotics Club
          </div>
        </div>
      </footer>
    </div>
  );
}

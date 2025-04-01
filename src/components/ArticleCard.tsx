// src/components/ArticleCard.tsx
import { FC } from "react";

interface ArticleCardProps {
  title: string;
  author: string;
  synopsis?: string;
}

const ArticleCard: FC<ArticleCardProps> = ({ title, author, synopsis }) => {
  return (
    <div className="w-fit h-fit bg-[#1e1e2e] rounded-lg p-4 transition-all duration-300 hover:scale-110">
      <h1 className="text-3xl text-[#f2cdcd] font-bold">{title}</h1>
      <p className="text-xl text-[#f9e2af]">by {author}</p>
      <p className="text-xl">{synopsis}</p>
    </div>
  );
};

export default ArticleCard;

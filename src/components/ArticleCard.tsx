// src/components/ArticleCard.tsx
import { FC } from "react";

interface ArticleCardProps {
  title: string;
  author: string;
}

const ArticleCard: FC<ArticleCardProps> = ({ title, author }) => {
  return (
    <div className="w-1/4 h-1/2 bg-white rounded-lg p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm text-gray-600">by {author}</p>
    </div>
  );
};

export default ArticleCard;
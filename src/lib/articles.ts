import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "src/articles");

export const getAllArticles = () => {
  const allPosts = fs.readdirSync(articlesDirectory);

  return allPosts.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(
      path.join(articlesDirectory, filename),
      "utf8",
    );
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
};

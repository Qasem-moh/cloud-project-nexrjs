import { Article } from "@/utils/type";
interface ArticleItemProps {
    article: Article;
}
import Link from "next/link";
import React from "react";

const ArticesItem = ({ article }: ArticleItemProps) => {
    return (
        <div
            className="p-5 rounded-lg my-1 shadow-lg
        border-2 border-gray-400  w-full md:w-2/5 lg:w-1/4 lg:mt-6 "
        >
            <h3 className="text-xl font-bold text-red-900 mb-2 line-clamp-1">{article.title}</h3>
            <p className="my-2 text-xl font-bold p-1 line-clamp-1">{article.body}</p>
            <Link
                className="text-xl bg-purple-700 hover:bg-purple-800 w-full block 
          text-center p-1 text-white rounded-lg"
                href={`/articles/${article.id}`}
            >
                Read more
            </Link>
        </div>
    );
};

export default ArticesItem;

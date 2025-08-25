import ArticesItem from "@/components/Articles/ArticesItem";
import Link from "next/link";
import { Article } from "@/utils/type";

const articlesPage = async () => {
  const articles = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!articles.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Article[] = await articles.json();
  // console.log(data )
  return (
    <section className="container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {data.map((item) => (
          <ArticesItem article={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default articlesPage;

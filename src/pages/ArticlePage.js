import { useParams } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () => {
  const { articleId } = useParams();

  const article = articles.find((article) => article.name === articleId);

  return (
    <>
      <h1>{article.title}</h1>
      <h2>this is param id :{articleId}</h2>
      {article.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;

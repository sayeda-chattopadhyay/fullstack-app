import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Link
          to={`/articles/${article.name}`}
          key={article.name}
          className="article-list-item"
        >
          <h2>{article.name}</h2>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;

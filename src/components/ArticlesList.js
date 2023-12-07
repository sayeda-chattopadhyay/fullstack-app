import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const ArticlesList = ({ articles }) => {
  const { language } = useLanguage();
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
          <p>
            {language === "en" ? article.content[0] : article.content[3]}
            ...
          </p>
          {/* <p>{article.content[1].substring(0, 150)}...</p> */}
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;

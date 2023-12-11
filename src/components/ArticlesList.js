import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const ArticlesList = () => {
  const { language, articles } = useLanguage();
  const articlesList = articles[language] || [];

  return (
    <div className="article-card">
      <h1>{language === "en" ? "Articles" : "Artikler"}</h1>
      {articlesList.map((article) => (
        <Link
          to={`/articles/${article.name}`}
          key={article.name}
          className="article-list-item"
        >
          {/* <h2>{article.name}</h2> */}
          <h3>{article.title}</h3>

          {article.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </Link>
      ))}
    </div>
  );
};

export default ArticlesList;

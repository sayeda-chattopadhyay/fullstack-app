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
          <h2>{language === "en" ? article.name : article.navn}</h2>
          <h3>{language === "en" ? article.title : article.tittel}</h3>
          <p>{language === "en" ? article.content[0] : article.content[3]}</p>
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;

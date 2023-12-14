import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const NewsList = () => {
  const { language, news } = useLanguage();
  const newsList = news[language] || [];

  return (
    <div className="article-card">
      <h1>{language === "en" ? "News" : "Nyheter"}</h1>
      {newsList.map((news) => (
        <Link
          to={`/news/${news.name}`}
          key={news.name}
          className="article-list-item"
        >
          <h3>{news.title}</h3>

          {news.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </Link>
      ))}
    </div>
  );
};

export default NewsList;

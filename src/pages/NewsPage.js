import { useParams } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { articleId } = useParams();
  const { language, articles } = useLanguage();

  console.log("Article ID:", articleId);
  console.log("Language:", language);
  console.log("Articles:", articles);

  if (!articles[language]) {
    // return <NotFoundPage />;
    return <div>Loading...</div>;
  }

  const article = articles[language].find(
    (article) => article.name === articleId
  );

  console.log("Article:", article);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;



import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const localLanguage = localStorage.getItem("language") || "no";
  const [language, setLanguage] = useState(localLanguage);

  const [articles, setArticles] = useState({
    en: [],
    no: [],
  });

  const [news, setNews] = useState({
    en: [],
    no: [],
  });


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const contentEn = await import(`./pages/en-content.js`);
        const contentNo = await import(`./pages/no-content.js`);
        const newsEn = await import(`./pages/en-news.js`);
        const newsNo = await import(`./pages/no-news.js`);

        setArticles({
          en: contentEn.default,
          no: contentNo.default,
        });

        setNews({
          en: newsEn.default,
          no: newsNo.default,
        });



      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, articles , news}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

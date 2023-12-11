import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const localLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(localLanguage);
  const [articles, setArticles] = useState({
    en: [],
    no: [],
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const contentEn = await import(`./pages/en-content.js`);
        const contentNo = await import(`./pages/no-content.js`);
        console.log("contentEn:", contentEn);
        console.log("contentNo:", contentNo);
        // setArticles(content.default);
        setArticles({
          en: contentEn.default,
          no: contentNo.default,
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

  // const toggleLanguage = () => {
  //   const newLanguage = language === "en" ? "no" : "en";
  //   console.log("Language updated:", newLanguage);
  //   setLanguage(newLanguage);
  //   localStorage.setItem("language", newLanguage);
  // };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "no" : "en";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, articles }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

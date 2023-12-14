import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NewsListPage from "./pages/NewsListPage";
import NotFoundPage from "./pages/NotFoundPage";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticlesListPage />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="/news" element={<NewsListPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;

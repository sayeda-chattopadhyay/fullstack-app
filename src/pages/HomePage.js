import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { language } = useLanguage();
  return (
    <>
      <h1>
        {language === "en"
          ? "Hello, welcome to my blog!"
          : "Hei, velkommen til bloggen min!"}
      </h1>
      <p>
        {language === "en"
          ? "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."
          : "React er et gratis og åpen kildekode-frontend JavaScript-bibliotek for bygge brukergrensesnitt basert på komponenter. Det vedlikeholdes av Meta og et fellesskap av individuelle utviklere og selskaper. Reager kan være brukes til å utvikle enkeltside-, mobil- eller server-renderte applikasjoner med rammeverk som Next.js."}
      </p>
      <p>
        {language === "en"
          ? "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting."
          : "Node.js er en plattformuavhengig, åpen kildekode JavaScript runtime-miljø som kan kjøre på Windows, Linux, Unix, macOS og mer. Node.js kjører på V8 JavaScript-motoren og utfører JavaScript-kode utenfor en nettleser. Node.js lar utviklere bruke JavaScript til å skrive kommandolinjeverktøy og for server-side scripting."}
      </p>
      <p>
        {language === "en"
          ? "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License."
          : "MongoDB er et kildekode-tilgjengelig tverrplattform dokument-orientert databaseprogram. Klassifisert som et NoSQL databaseprogram, bruker MongoDB JSON-lignende dokumenter med valgfrie skjemaer. MongoDB er utviklet av MongoDB Inc. og nåværende versjoner er lisensiert under Server Side Public License."}
      </p>
      <Link to="/about" className="btn">
        {language === "en" ? "About Us" : "Om oss"}
      </Link>
    </>
  );
};

export default HomePage;

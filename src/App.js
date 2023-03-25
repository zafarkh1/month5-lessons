import UseEffect from "./components/UseEffect";
import { useTranslation } from "react-i18next";

import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleChangeLanguage('eng')}>Eng</button>
        <button onClick={() => handleChangeLanguage("ru")}>Ru</button>
        <h1>{t("greeting")}</h1>
        <p>{t("buy")}</p>
        <UseEffect />
      </header>
    </div>
  );
}

export default App;

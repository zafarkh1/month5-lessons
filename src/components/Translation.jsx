import React from "react";
import { useTranslation } from "react-i18next";
import Perevod from "./perevod.json";

const Translation = () => {
  const { t, i18n } = useTranslation();

  const handleTranslation = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleTranslation("eng")}>Eng</button>
      <button onClick={() => handleTranslation("ru")}>Ru</button>

      <h1>{t("greating")}</h1>
      <Perevod />
    </div>
  );
};

export default Translation;

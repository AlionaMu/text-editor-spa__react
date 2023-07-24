import { LocalType } from "../../types";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import "./Header.scss";

export const Header = (props: LocalType) => {
  return (
    <header className="header">
      <h1 className="header__title">{props.t("header.title")}</h1>
      <ThemeSwitcher></ThemeSwitcher>
      <div className="header__switch-container">
        <button
          type="button"
          className="button_theme button_lang"
          onClick={() => props.changeLanguage("ru")}
        >
          ru
        </button>
        <button
          type="button"
          className="button_theme button_lang"
          onClick={() => props.changeLanguage("en")}
        >
          en
        </button>
      </div>
    </header>
  );
};

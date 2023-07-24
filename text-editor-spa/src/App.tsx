import { CardsList } from "./components/CardsList/CardsList";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import TagsList from "./components/TagsList/TagsList";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ThemeContext } from "./context/theme-context";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Footer } from "./components/Footer/Footer";

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const [filter, setFilter] = useState("");

  const state = useSelector((state: RootState) => state.notesList);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header changeLanguage={changeLanguage} t={t}></Header>
          <main className="main">
            <section className="container">
              <Form t={t}></Form>
              <TagsList
                items={state.tagsAmount}
                setFilter={setFilter}
                t={t}
              ></TagsList>
            </section>
            <CardsList filter={filter} list={state.notesList} t={t}></CardsList>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

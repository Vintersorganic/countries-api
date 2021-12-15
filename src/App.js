import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Country from "./components/Country";
import CountryList from "./components/CountryList";
import GlobalContainer from "./components/layout/GlobalContainer";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/styles/GlobalStyle";
import { lightTheme, darkTheme } from "./components/styles/theme";

const App = () => {
  const [country, setCountry] = useState([]);
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Navbar handleTheme={handleTheme} />
        <GlobalContainer>
          <Switch>
            <Route exact path="/">
              <CountryList setCountry={setCountry} />
            </Route>
            <Route path="/country/:name">
              <Country country={country} />
            </Route>
          </Switch>
        </GlobalContainer>
      </>
    </ThemeProvider>
  );
};

export default App;

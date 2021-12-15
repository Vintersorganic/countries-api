import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Country from "./components/Country";
import CountryList from "./components/CountryList";
import GlobalContainer from "./components/layout/GlobalContainer";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/styles/GlobalStyle";
import { lightTheme, darkTheme } from './components/styles/theme';


const App = () => {
  const [country, setCountry] = useState([]);
  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Navbar handleTheme={handleTheme}/>
        <GlobalContainer>
        
          <Routes>
            <Route exact path="/" element={<CountryList setCountry={setCountry} />} />
          </Routes>
        </GlobalContainer>
      </>
    </ThemeProvider>
  );
};

export default App;

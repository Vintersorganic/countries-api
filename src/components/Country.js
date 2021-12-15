import { ArrowBack } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { useParams, Link } from "react-router-dom";
import { mobile } from "./styles/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 17px;
  ${mobile({ fontSize: 14 })}
`;

const Button = styled.button`
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.elements};
  color: ${(props) => props.text};
  border: none;
  padding: 10px;
  width: 10%;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  ${mobile({ width: "40%" })}

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  ${mobile({ flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  width: 45%;
  ${mobile({ width: "100%" })}
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
  margin-left: 60px;
  ${mobile({ width: "100%", marginLeft: 0, padding: 0, marginTop: 30 })}
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  column-count: 2;
  column-gap: 100px;
  ${mobile({
    width: "100%",
    paddingLeft: 0,
    display: "flex",
    flexWrap: "wrap",
  })}
`;

const ListItem = styled.li`
  font-weight: 600;
  line-height: 2;
`;

const Span = styled.span`
  font-weight: 300;
`;

const BorderCountriesContainer = styled.p`
  font-weight: 600;
  margin-top: 50px;
  font-size: 15px;
  align-items: center;
  flex-wrap: wrap;
  ${mobile({
    width: "100%",
    display: "flex",
    alignContent: "center",
    fontSize: 14,
    justifyContent: "space-between",
  })}
`;

const BorderButton = styled(Link)`
  transition: all 0.3s;
  font-size: 18px;
  font-weight: 300;
  background: ${(props) => props.elements};
  padding: 10px;
  color: ${(props) => props.text};
  margin-left: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  ${mobile({
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 0,
    alignItem: "center",
  })}

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
`;

const Country = () => {
  const history = useHistory();
  const theme = useTheme();
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    
     axios.get(
        `https://restcountries.com/v2/alpha/${name}`
      ).then(result => {
      console.log(result)
      setCountry(result.data);
      })
   
  }, [name]);

  const handleBack = () => {
    history.push("/");
  };

  if (country.length < 1) {
    return null
  }

  return (
    <Container>
      <Button text={theme.text} elements={theme.elements} onClick={handleBack}>
        <ArrowBack />
        Back
      </Button>

      <CountryInfo>
        <ImageContainer>
          <Image src={country.flag} />
        </ImageContainer>
        <InfoContainer>
          <Title>{country.name}</Title>
          <List>
            <ListItem>
              Native Name: <Span>{country.nativeName}</Span>
            </ListItem>
            <ListItem>
              Population: <Span>{country.population}</Span>
            </ListItem>
            <ListItem>
              Region: <Span>{country.region}</Span>
            </ListItem>
            <ListItem>
              Sub Region: <Span>{country.subregion}</Span>
            </ListItem>
            <ListItem>
              Capital: <Span>{country.capital}</Span>
            </ListItem>
            <ListItem>
              Top Level Domain: <Span>{country.topLevelDomain}</Span>
            </ListItem>
            <ListItem>
              Currencies:{" "}
              {country.currencies.map((currency, i) => (
                <Span key={i}>
                  {currency.name}{" "}
                  {i + 1 === country.currencies.length ? "" : ", "}
                </Span>
              ))}
            </ListItem>
            <ListItem>
              Currencies:{" "}
              {country.languages.map((language, i) => (
                <Span key={i}>
                  {language.name}
                  {i + 1 === country.languages.length ? "" : ", "}
                </Span>
              ))}
            </ListItem>
          </List>
          <BorderCountriesContainer>
            <span>Border Countries:</span>
            {country.borders
              ? country.borders.map((border, i) => (
                  <BorderButton
                  key={i}
                    elements={theme.elements}
                    text={theme.text}
                    to={`/${border}`}
                  >
                    {border}
                  </BorderButton>
                ))
              : ""}
          </BorderCountriesContainer>
        </InfoContainer>
      </CountryInfo>
    </Container>
  );
};

export default Country;

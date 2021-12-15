import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { useTheme } from "styled-components";
import CountryCard from "./CountryCard";
import { Search } from "@material-ui/icons";
import Select from "react-select";
import { mobile } from './styles/responsive'
import Loader from "react-loader-spinner";

const options = [
  { value: null, label: "All Regions" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountriesContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 70px;
  flex-wrap: wrap;

  ${mobile({flexDirection: 'column'} )}  
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  border-radius: 5px;
  color: ${props => props.text};
  background: ${props => props.elements};
  width: 20%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  ${mobile({width: '100%', marginBottom: 10} )}

  &:focus-within {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  }
`;

const Input = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  padding: 10px;
  color: ${props => props.text};
  

  &:focus {
    outline: none;
    caret-color: ${props => props.text};
    color: ${props => props.text};
  }

  &::placeholder {
    color: ${props => props.text};
    padding-left: 10px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${mobile({flexDirection: 'column', justifyContent: 'center'} )}
 
`;

const StyledSelect = styled(Select)`
  .react-select__placeholder,
  .react-select__single-value {
    color: ${props => props.text};
  }

  .react-select__option {
    color: ${props => props.text};
  }

  .react-select__control {
    background-color: ${props => props.elements};
    color: ${props => props.text};
    border-color: transparent;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    ${mobile({width: '100%'} )}
  }

  .react-select__menu {
    color: ${props => props.text};
    background-color: ${props => props.elements};
  }
`;

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState(null);
  const [filter, setFilter] = useState(null)


  const theme = useTheme()

  const filteredCountries = filter ? countries.filter(
    (country) => country.name.toLowerCase().includes(filter)
  ) : countries

  const countriesByRegion = region ? countries.filter(
    (country) => country.region.toLowerCase() === region
  ) : null;


  useEffect(() => {
    
    const getCountries = async () => {
      const result = await axios.get("https://restcountries.com/v2/all")

      setCountries(result.data);
      setLoading(false)
    
    }
    getCountries()
  }, []);

  const handleOnChange = (value) => {
    setRegion(value.value);
  };

  const handleFilter = event => {
    setRegion(null)
    setFilter(event.target.value)
  }

  return (
    <Container>
      <FilterContainer>
        <InputContainer text={theme.text}
          elements={theme.elements}>
          <Search />
          <Input text={theme.text} type="search" placeholder="Search for a Country..." onChange={handleFilter}/>
        </InputContainer>
        <StyledSelect
          text={theme.text}
          elements={theme.elements}
          classNamePrefix="react-select"
          className="react-select-container"
          options={options}
          onChange={handleOnChange}
          placeholder="Filter By Region"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: 'grey',
              primary: "",
            },
          })}
        />
      </FilterContainer>

      <CountriesContainer>
        {loading ? <Loader
      style={{margin: 'auto', marginTop: '100px'}}
      type="Puff"
      color={theme.text}
      height={100}
      width={100}
    /> : null }
        { !region
          ? filteredCountries.map((country) => (
              <CountryCard country={country} key={country.numericCode} />
            ))
          : countriesByRegion.map((country) => (
            <CountryCard country={country} key={country.numericCode} />
          ))}
      </CountriesContainer>

    </Container>
  );
};

export default CountryList;

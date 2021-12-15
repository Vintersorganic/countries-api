
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useTheme } from 'styled-components';
import { mobile } from './styles/responsive'

const Container = styled(Link)`
  width: 20%;
  color: ${props => props.text};
  background: ${props => props.elements};
  border-radius: 5px;
  padding-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  text-decoration: none;
  transition: all .3s;
  ${mobile({width: '100%'} )}  

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const Image = styled.img`
  width: 100%;
  height: 180px;
  display: block;
  border-radius: 5px;
`

const InfoContainer= styled.div`
  padding: 20px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.7;
`

const Span = styled.span`
  font-weight: 300;
`

const CountryCard = ({ country, setCountry }) => {
  const theme = useTheme()

  const handleCountry = () => {
      setCountry(country)
  }

  if (country.length < 1) {
    return null
  }

  return (
    <Container text={theme.text} elements={theme.elements} to={`${country.alpha3Code}`} onClick={handleCountry}>
      <Image src={country.flags.png} />
      <InfoContainer>
        <h3>{country.name}</h3>
        <Info>
          <p>Population: <Span>{country.population}</Span></p>
          <p>Region: <Span>{country.region}</Span></p>
          <p>Capital: <Span>{country.capital}</Span></p>
        </Info>
      </InfoContainer>
    </Container>
  )
}

export default CountryCard

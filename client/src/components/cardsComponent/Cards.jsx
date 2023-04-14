import { useSelector } from "react-redux";
import Card from "../cardComponent/Card";
import { CardsStyle } from "./cardsStyles";

export default function Cards() {
  const countries = useSelector((state) => state.countries);

  return (
    <CardsStyle>
      {countries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          flags={country.flags}
          continent={country.continent}
        />
      ))}
    </CardsStyle>
  );
}

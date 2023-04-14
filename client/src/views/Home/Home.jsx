
//import React from "react";
import Cards from "../../components/cardsComponent/Cards";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
//import { connect } from "react-redux";
import { getCountries } from "../../redux/actions";

function Home () {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Cards/>
    </div>
  )
}

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './homepage.css'
import { fetchData, addCountry } from "../Redux/Country/countrySlice";
import { CiSettings, CiSearch } from 'react-icons/ci'
import { BiMicrophone } from'react-icons/bi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.countries.list)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  useEffect(() => {
    dispatch(addCountry(list));
  }, [dispatch, list])


  return (
  <div className="section">
    <div className="header">
            <div className="search-input">
        <form>
        <button type="button"><CiSearch style={{ width: '26px', height: '26px', padding: '10px', position: 'relative', top: '10px', left: '-26px' }} /></button>
              <input type="search" placeholder="Search..."/>
              <BiMicrophone style={{ width: '26px', height: '26px', padding: '10px', display: 'flex-end'}} />
        </form>
        <CiSettings style={{ width: '30px', height: '30px', padding: '10px', color: 'white' }} />
      </div>

      <h1> Hey, <br/> WELCOME TO AMERICA </h1>
      </div>
    <div className="main-container">
      {list && list.length > 0 ?
        list.map((country) => (
          <div key={country.name.common} className="country-container">
            <ul>
              <li className="country-name">
              <Link to={`/country/${country.name.common}`}>{country.name.common} <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="flag" /></Link>

                </li>
            </ul>
            <span className="icon">
            <HiOutlineArrowNarrowRight style={{
             width: '12px',
             height: '12px',
             padding: '2px',
             color:'white',
             border: '1px solid white',
             marginLeft: '10px',
             borderRadius: '50px',
            }} /></span>
          </div>
        ))
        : <div className="loading">Loading...</div>
      }
    </div>
    </div>
  );
};

export default HomePage

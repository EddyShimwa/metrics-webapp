import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './homepage.css';
import { CiSettings } from 'react-icons/ci';
import { BsChevronLeft } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { fetchData, addCountry } from '../Redux/Country/countrySlice';

function HomePage() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.countries.list);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addCountry(list));
  }, [dispatch, list]);

  return (
    <div className="section">
      <div className="header">
        <div className="search-input">
          <form>
            <BsChevronLeft style={{ width: '20px', height: '15px' }} className="left-iconn" />
            <h5>2023</h5>

          </form>
          <BiMicrophone style={{
            width: '26px', height: '26px', padding: '10px', color: 'white',
          }}
          />
          <CiSettings style={{
            width: '30px', height: '30px', padding: '10px', color: 'white',
          }}
          />
        </div>

        <h1>WELCOME TO AMERICA</h1>
      </div>
      <div className="main-container">
        {list && list.length > 0
          ? list.map((country) => (
            <div key={country.name.common} className="country-container">
              <span className="icon">
                <HiOutlineArrowNarrowRight style={{
                  width: '12px',
                  height: '12px',
                  padding: '2px',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '50px',
                  marginTop: '5px',
                }}
                />
              </span>
              <div className="country-name">
                <Link to={`/country/${country.name.common}`}>
                  {country.name.common.toUpperCase()}
                  {' '}
                  <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="flag" />
                </Link>
              </div>
            </div>
          ))
          : <div className="loading">Loading...</div>}
      </div>
    </div>
  );
}

export default HomePage;

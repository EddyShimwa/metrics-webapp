import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import './detailsPage.css';
import { CiSettings } from 'react-icons/ci';
import { BiMicrophone } from 'react-icons/bi';
import { fetchCountry } from '../Redux/details';

function Details() {
  const { country: countryName } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.country);

  useEffect(() => {
    if (countryName) {
      dispatch(fetchCountry(countryName));
    }
  }, [dispatch, countryName]);
  return (
    <div>
      <header>
        <li>
          <Link to="/">
            <BsChevronLeft style={{ width: '20px', height: '15px' }} className="left-con" />
            {' '}
            <h5>2023</h5>
            {' '}
          </Link>
          <BiMicrophone style={{ width: '30px', height: '30px', padding: '10px' }} />
          {' '}
          <CiSettings style={{ width: '30px', height: '30px', padding: '10px' }} />
        </li>
      </header>
      {country.name ? (
        <div>

          <div className="country-title">
            <h1>{country.name.common.toUpperCase()}</h1>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="Flag" />
          </div>
          <ul className="country-details">
            <li>
              <h4 className="detail">Region:</h4>
              {country.region}
            </li>
            <li>
              <h4 className="detail">Capital City:</h4>
              {' '}
              {country.capital}
            </li>
            <li>
              <h4 className="detail">Population:</h4>
              {' '}
              {country.population}
            </li>
            <button type="submit" className="view"><a href="{country.maps.googleMaps}">View on map</a></button>
          </ul>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default Details;

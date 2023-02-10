import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import './detailsPage.css';
import { CiSettings } from 'react-icons/ci';
import { BiMicrophone } from 'react-icons/bi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
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
            <h4>2023</h4>
          </Link>
          <h4 className="title">Country/Details</h4>
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
              <h5 className="detail">Region:</h5>
              <span className="iconn">
                {country.region}
              </span>
              <HiOutlineArrowNarrowRight
                style={{
                  width: '12px',
                  height: '12px',
                  padding: '2px',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '50px',
                  marginTop: '5px',
                }}
                className="myIcon"
              />
            </li>
            <li>
              <h5 className="detail">Capital City:</h5>
              <span className="iconn">
                {country.capital}

              </span>
              <HiOutlineArrowNarrowRight
                style={{
                  width: '12px',
                  height: '12px',
                  padding: '2px',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '50px',
                  marginTop: '5px',
                }}
                className="myIcon"
              />
            </li>
            <li>
              <h5 className="detail">Population:</h5>

              <span className="iconn">
                {country.population}
              </span>
              <HiOutlineArrowNarrowRight
                style={{
                  width: '12px',
                  height: '12px',
                  padding: '2px',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '50px',
                  marginTop: '5px',
                }}
                className="myIcon"
              />
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

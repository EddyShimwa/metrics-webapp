import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';

import App from '../App';
import HomePage from '../Components/HomePage';
import Details from '../Components/DetailsPage';

jest.mock('../Components/HomePage');
jest.mock('../Components/DetailsPage');

describe('Testing my App.js with pages', () => {
  test('should render the Header and Layout components', () => {
    HomePage.mockImplementation(() => <h1>WELCOME TO AMERICA</h1>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('WELCOME TO AMERICA');
    expect(txt).toBeInTheDocument();
  });

  test('should render the homepage', () => {
    HomePage.mockImplementation(() => <h1>Hello From Home Page</h1>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Hello From Home Page');
    expect(txt).toBeInTheDocument();
  });

  test('should render the Details Page', () => {
    Details.mockImplementation(() => <h1>Hello From Details Page</h1>);
    render(
      <MemoryRouter initialEntries={['/details']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Hello From Details Page');
    expect(txt).toBeInTheDocument();
  });
});

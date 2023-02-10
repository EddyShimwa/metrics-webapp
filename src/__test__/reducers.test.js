import { fetchData, addCountry } from '../Redux/Country/countrySlice';

describe('reducers', () => {
  describe('fetchData', () => {
    test('should handle the fulfilled action correctly', () => {
      const data = [{ name: 'Argentina' }, { name: 'Brazil' }];
      const result = fetchData.fulfilled(data);

      expect(result).toEqual({
        type: 'data/fetchData/fulfilled',
        payload: data,
        meta: {
          arg: undefined,
          requestId: undefined,
          requestStatus: 'fulfilled',
        },
      });
    });
  });

  describe('addCountry', () => {
    test('should handle the addCountry action correctly', () => {
      const data = [{ name: 'Argentina' }, { name: 'Brazil' }];
      const result = addCountry(data);

      expect(result).toEqual({
        type: 'countrySlice/addCountry',
        payload: data,
      });
    });
  });
});

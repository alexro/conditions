import { waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

const mockData = { conditions: [{}, {}, {}] };
const mockResponse = Promise.resolve({
  status: 200,
  json: () => mockData,
});
const mockFetchPromise = Promise.resolve(mockResponse);

beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(global, 'fetch').mockImplementation(async () => {
    await new Promise((r) => setTimeout(r, 0));
    return mockFetchPromise;
  });
});

afterEach(() => {
  jest.clearAllTimers();
  global.fetch.mockClear();
});

test('renders `Spinner` while data is fetched', async (done) => {
  const dom = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(dom.queryByTestId(/spinner/)).not.toBeNull();

  jest.runAllTimers();
  done();
});

test('renders `Conditions` when data is fetched', async (done) => {
  jest.runAllTimers();

  const dom = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  await waitFor(() => {
    expect(dom.queryAllByTestId(/selected/).length).toBe(1);
    expect(dom.queryAllByTestId(/item/).length).toBe(2);
  });

  done();
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import Transaction from './components/Transaction';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import { GlobalContext } from './context/GlobalContext';


describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

test('Shows transaction title and amount', async () => {
  const {getByText} = render(
    <Transaction id={1} title={"Test Title"} amount={666} />
  )

  expect(getByText("Test Title")).toBeInTheDocument();
  expect(getByText(/666/)).toBeInTheDocument();
});

test('Shows Balance', async () => {
  const {getByText} = render(
    <Balance />
  )

  expect(getByText(/Balance/)).toBeInTheDocument();
  expect(getByText(/\$/)).toBeInTheDocument();
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IncomeExpenses />, div);
});

test('Shows Income', () => {
  const {getByText} = render(
    <IncomeExpenses />
  )

  expect(getByText(/Income/)).toBeInTheDocument();

  // debug();
});

test('Shows Expense', () => {
  const {getByText} = render(
    <IncomeExpenses />
  )

  expect(getByText(/Expense/)).toBeInTheDocument();

  // debug();
});

test('Context', () => {
  const {getByText, debug} = render(
    <GlobalContext.Provider value={{
      transactions: [{id:1, title:"Test", amount:66}],
      deleteTransaction : () => {},
      addTransaction :  () => {}
    }}>
      <App />
    </GlobalContext.Provider>
  )

  expect(getByText)
  debug();
})
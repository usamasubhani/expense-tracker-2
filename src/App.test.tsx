import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from './App';
import NewTransaction from './components/NewTransaction';
import ReactDOM from 'react-dom';


describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

describe('<NewTransaction />', () => {
  let documentBody: RenderResult;
  beforeEach(() => {
    documentBody = render(<NewTransaction />);
  });  
  
  it('Shows empty form with placeholders', () => {
    expect(documentBody.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(documentBody.getByPlaceholderText('Amount')).toBeInTheDocument();
  });
});
// test('Display empty form', () => {
//   const { getByText } = render(<NewTransaction />);
//   const linkElement = getByText(/Hello/);
//   expect(linkElement).toBeInTheDocument();
// });

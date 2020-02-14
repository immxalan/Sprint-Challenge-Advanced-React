import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from "./components/Nav";
import { render } from "@testing-library/react";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Nav title renders correctly", () => {
  //arrange - define which query you will be using
  const{ getByText } = render(<App/>)
  //act
  const  Title = getByText(/World Ranking of Searches - Women's Soccer Players/i) // i = ignore casing
  //assert
  expect(Title).toBeInTheDocument();
} )
test('Renders with a className equal to the variant', () => {
  const { container } = render(<Nav variant="navbar" />)
  expect(container.firstChild).toHaveClass('navbar')
})

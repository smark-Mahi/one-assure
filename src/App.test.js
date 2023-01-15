import { render, screen,fireEvent } from '@testing-library/react';
import Comp1 from './components/Comp1';

test('user input should chng', () => {
  render(<Comp1/>);
  const linkElement = screen.getByPlaceholderText(/username/i);
  const testvalue='test';
  fireEvent.change(linkElement,{target:{value:testvalue}})
  expect(linkElement.value).toBe(testvalue);
});

test('renders App', () => {
  render(<Comp1/>);
  const title = screen.getByTitle("sum");
  expect(title).toBeInTheDocument();
});


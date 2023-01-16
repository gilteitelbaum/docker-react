import { render, screen } from '@testing-library/react';
import App from './App';
/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}
*/
test('renders learn react link', () => {
     render(<App />);
  const linkElement = screen.getByText(/Another Change/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
const linkElement = screen.getByText(/Another Change/i);
expect(linkElement).toBeInTheDocument();
});

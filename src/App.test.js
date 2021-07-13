import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button have correct intial color', () => {
  render(<App />);
  const buttonColor = screen.getByRole('button', { name: 'Change to blue' });

  // expect to have a background color of red
  expect(buttonColor).toHaveStyle({ backgroundColor: 'red' });

  // fired the click event on the button color
  fireEvent.click(buttonColor);

  // expect to have a background color of blue
  expect(buttonColor).toHaveStyle({ backgroundColor: 'blue' });

  // assertion for the text of button
  expect(buttonColor.textContent).toBe('Change to red')

});

test("intitial condition =>", () => {

  render(<App />);
  const ButtonColor = screen.getByRole('button', { name: 'Change to blue' });

  expect(ButtonColor).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  expect(ButtonColor).toBeDisabled();
})



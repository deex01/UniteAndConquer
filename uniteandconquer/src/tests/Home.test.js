/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Home from '../components/Home';

const mockedUsedLink = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: () => mockedUsedLink,
  useNavigate: () => mockedUsedNavigate,
}));

test('home title header', () => {
  render(<Home />);
  const linkElement = screen.getByText('Unite and Conquer');
  expect(linkElement).toBeInTheDocument();
});

test('push to show notifications', () => {
  render(<Home />);
  fireEvent.click(screen.getByTestId('bell-button'));
  const linkElement = screen.getByText('Notifications');
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('notif-button'));
});

test('snapshot home', () => {
  const component = renderer.create(<Home />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

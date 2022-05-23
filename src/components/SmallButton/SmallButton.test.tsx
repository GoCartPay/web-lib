import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import * as SmallButton from  './story';

// this seems like this is more of testing the story rather than testing the component itself
const { Default, WithBorder } = composeStories(SmallButton);

const mockOnClick = jest.fn();

describe('Small button behaves correctly',  () => {

  it('renders without crashing', () => {
    render(
      // @ts-expect-error this does have a call signature 
      <Default/>
    );
    expect(screen.getByRole('button')).toBeTruthy();
  });
  it('matches snapshot for a text button', () => {
    // @ts-expect-error this does have a call signature 
    const { container } = render(<Default/>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('allows for an event to fire onClick', () => {
    render(
      // @ts-expect-error this does have a call signature 
      <Default 
        onClick={mockOnClick}
      />
    );
    const smallBtnElem = screen.getByRole('button');
    userEvent.click(smallBtnElem);
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('Outlined variant renders button with border state and matches snapshot', () => {
    const { container } = render(
      // @ts-expect-error this does have a call signature 
      <WithBorder />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
})
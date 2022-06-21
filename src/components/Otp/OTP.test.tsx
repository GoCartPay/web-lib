import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import OTP from './';
import { ThemeProvider } from '../../Theme';
const mockOnChange = jest.mock;

describe('OTP renders and works correctly', () => {
  it('renders with expected content and does not crash', () => {
    const { container } = render(
      <ThemeProvider>
        <OTP
          onChange={mockOnChange}
          value={''}
        />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('will render an amount of input fields equal to the number defined in codeLength', () => {
    render(
      <ThemeProvider>
        <OTP
          onChange={mockOnChange}
          value={''}
          codeLength={4}
        />
      </ThemeProvider>
    );
    const inputLength = screen.getAllByRole('textbox').length;
    expect(inputLength).toEqual(4);
  });

  it('when otp is rendered, active styling should be applied and first input should have focus', () => {
    const { container } = render(
      <ThemeProvider>
        <OTP
          onChange={mockOnChange}
          value={''}
        />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle('border: solid 1px #117B74CC');

    const firstOtpInput = screen.getByRole('textbox', { name: /otp-field-0/});
    
    expect(firstOtpInput).not.toHaveAttribute('placeholder');
    expect(firstOtpInput).toHaveFocus();
  });

  it('will conditionally render error styling when there is an error', () => {
    const { container } = render(
      <ThemeProvider>
        <OTP
          onChange={mockOnChange}
          value={''}
          hasError
        />
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyle('border: solid 1px #DF2113')
  });

  it('will conditionally render isComplete styling when OTP has completed', () => {
    const { container } = render(
      <ThemeProvider>
        <OTP
          onChange={mockOnChange}
          value={''}
          isComplete
        />
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyle('border: 1px solid rgb(42, 208, 98)');
  });

  it('will conditionally render error styling when OTP has an error', () => {
    const { container } = render(
      <ThemeProvider>
        <OTP
          onChange={mockOnChange}
          value={''}
          hasError
        />
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyle('border: solid 1px #DF2113');
  });

  it('when a user types into OTP field, the focus field should be updated and the following input whould become active', () => {
    render(
      <ThemeProvider>
        <OTP
          onChange={(value) => console.log(value)}
          value={''}
          hasError
          codeLength={3}
        />
      </ThemeProvider>
    );
    
    const firstOtpInput = screen.getByRole('textbox', { name: /otp-field-0/});
    const secondOtpInput = screen.getByRole('textbox', { name: /otp-field-1/});
    const thirdOtpInput = screen.getByRole('textbox', { name: /otp-field-2/});

    userEvent.type(firstOtpInput, '1');
    expect(firstOtpInput).not.toHaveFocus();
    expect(secondOtpInput).not.toHaveAttribute('placeholder');
    expect(secondOtpInput).toHaveFocus();

    userEvent.type(secondOtpInput, '1');
    expect(firstOtpInput).not.toHaveFocus();
    expect(secondOtpInput).not.toHaveFocus();
    expect(thirdOtpInput).toHaveFocus();
    expect(thirdOtpInput).not.toHaveAttribute('placeholder');
  });

  it('keyboard events fire correctly (arrow right/left, backspace)', () => {
    render(
      <ThemeProvider>
        <OTP
          onChange={(value) => console.log(value)}
          value={''}
          hasError
          codeLength={3}
        />
      </ThemeProvider>
    );
    
    const firstOtpInput = screen.getByRole('textbox', { name: /otp-field-0/});
    const secondOtpInput = screen.getByRole('textbox', { name: /otp-field-1/});
    const thirdOtpInput = screen.getByRole('textbox', { name: /otp-field-2/});

    userEvent.type(firstOtpInput, '1');
    userEvent.type(secondOtpInput, '1');

    userEvent.keyboard('{arrowleft}');
    expect(secondOtpInput).toHaveFocus();

    userEvent.keyboard('{arrowright}');
    expect(thirdOtpInput).toHaveFocus();
    
    userEvent.keyboard('{backspace}');
    expect(secondOtpInput).toHaveFocus();

    userEvent.keyboard('{backspace}');
    expect(firstOtpInput).toHaveFocus();
    
  });
 
});
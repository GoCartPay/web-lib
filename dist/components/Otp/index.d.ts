/** @jsxImportSource @emotion/react */
import React from 'react';
declare type OtpProps = {
    codeLength?: number;
    dataTestId?: string;
    isComplete?: boolean;
    isDisabled?: boolean;
    hasError?: boolean;
    onChange: (value: string) => void;
    value: string;
};
declare const Otp: React.FC<OtpProps>;
export default Otp;

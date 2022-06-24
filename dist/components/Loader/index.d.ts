import * as React from 'react';
import { LinearProgressProps } from '@mui/material/LinearProgress';
declare type LoaderProps = LinearProgressProps & {
    onComplete: () => void;
};
declare const Loader: React.FC<LoaderProps>;
export { Loader };

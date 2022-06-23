import * as React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

type LoaderProps = LinearProgressProps & {
  onComplete: () => void
}

const Loader: React.FC<LoaderProps> = ({
  onComplete,
  ...muiProps
}: LoaderProps) => {
  const [progress, setProgress] = React.useState(70);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          onComplete();
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%', color: 'white', padding: 2 }}>
      <LinearProgress variant="determinate" value={progress} color="inherit" />
    </Box>
  );
}


export { Loader }

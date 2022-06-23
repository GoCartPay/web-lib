import * as React from 'react'
import SwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'
import CloseIcon from '@mui/icons-material/Close'
import { Loader } from '../Loader/index'
import { makeStyles } from '@mui/styles'
import IconButton from '@mui/material/IconButton'


const useStyles: any = makeStyles({
  container: {
    '& .MuiDrawer-paper': {
      width: '100%',
      maxWidth: '430px',
      margin: '0 auto',
      fontFamily: 'TWK Lausanne!important',
      backgroundColor: '#121317',
      height: '90%'
    }
  },
  innerContainer: {

  },
  header: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    '& svg': {
      height: '16px',
      width: '69px'
    }
  },
  content: {

  },
  closeIcon: {
    color: '#fff',
    height: '24px',
    width: '24px',
    backgroundColor: '#38393B'
  }
});

type EntryBackgroundDrawerProps = SwipeableDrawerProps & {
  hasLoader?: boolean,
  content: any
}

export const EntryBackgroundDrawer = ({
  content,
  hasLoader = false,
  ...muiProps
}: EntryBackgroundDrawerProps) => {
  console.log(hasLoader)
  const [loading, setLoading] = React.useState(hasLoader);

  const styles = useStyles();

  const GoCartLogoReverse = <svg width="137" viewBox="0 0 563 131" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M236.977 64.0964C236.977 21.9893 266.659 0 300.65 0C332.247 0 355.705 17.7786 359.056 44.9143H330.81C328.895 31.8143 316.448 22.925 300.65 22.925C280.064 22.925 264.265 36.9607 264.265 63.6286C264.265 90.2964 280.064 104.332 300.65 104.332C316.927 104.332 329.374 95.4429 331.768 82.8107H359.056C356.662 109.479 333.204 127.725 301.128 127.725C266.18 127.725 236.977 106.204 236.977 64.0964Z" fill="white" />
    <path d="M450.974 100.589C450.974 113.689 451.453 121.643 452.889 125.386H426.08C425.122 123.046 424.644 119.304 424.644 114.625V113.221C419.856 123.046 410.76 127.725 396.398 127.725C386.823 127.725 378.685 125.386 372.461 120.239C366.237 115.093 362.886 108.543 362.886 100.121C362.886 97.7822 363.365 95.4429 363.844 93.1036C364.322 90.7643 365.28 88.8929 366.237 87.4894C367.195 85.6179 368.631 84.2144 370.067 82.8108C371.982 80.9394 373.418 80.0036 374.376 79.0679C375.333 78.6001 377.248 77.1965 379.642 76.2608C382.036 75.3251 382.993 75.3251 384.908 74.3893C386.344 73.9215 388.259 73.4536 390.653 72.9858C393.526 72.5179 394.962 72.0501 395.919 72.0501C396.877 72.0501 398.313 71.5822 401.185 71.1143C403.579 70.6465 405.015 70.6465 405.494 70.6465C406.93 70.1786 408.367 70.1786 410.281 70.1786C412.196 70.1786 413.633 69.7108 414.59 69.7108C415.548 69.7108 416.505 69.2429 417.941 69.2429C419.378 68.7751 420.335 68.7751 420.814 68.3072C421.293 67.8393 422.25 67.3715 422.729 66.9036C423.208 66.4358 423.686 65.5001 424.165 65.0322C424.644 64.0965 424.644 63.1608 424.644 62.2251C424.644 58.4822 423.208 55.6751 420.814 53.3358C418.42 51.4643 415.069 50.0608 410.76 50.0608C406.452 50.0608 403.1 50.9965 400.228 53.3358C397.355 55.6751 395.919 58.4822 395.919 62.2251H369.588C370.546 52.8679 374.376 45.3822 381.557 39.3001C387.781 33.6858 397.355 30.4108 409.803 30.4108C423.207 30.4108 433.261 33.6858 440.442 40.7036C447.623 47.2536 450.974 57.5465 450.974 71.5822V100.589ZM405.015 109.479C410.76 109.479 415.548 107.139 419.378 102.461C423.207 97.7822 425.122 91.7001 425.122 83.7465V78.6001C422.729 82.8108 416.984 86.0858 407.409 87.9572C396.877 90.2965 391.132 94.0393 391.132 99.6536C391.132 102.461 392.089 104.8 394.483 106.671C396.398 108.543 400.228 109.479 405.015 109.479Z" fill="white" />
    <path d="M562.521 51.4643C555.819 51.4643 549.117 51.4643 542.414 51.4643V83.7464C542.414 90.7643 543.372 95.9107 544.808 99.1857C545.287 100.589 546.244 101.525 547.202 102.461C548.638 103.396 550.074 103.864 553.425 104.332C555.819 104.8 559.17 104.8 562.521 104.8C562.521 111.35 562.521 118.368 562.521 124.918C556.776 124.918 551.031 124.918 545.765 124.918C534.754 124.918 527.094 121.643 522.786 115.561C518.956 109.479 516.562 100.121 516.562 87.9571V51.4643H502.2L504.593 30.8786H516.083C516.083 25.7321 516.083 20.5857 516.083 15.4393C524.222 10.2929 532.36 5.14643 540.978 0C541.457 0 541.457 0 541.935 0C541.935 10.2929 541.935 20.5857 541.935 30.8786C548.638 30.8786 555.34 30.8786 562.043 30.4107C563 37.4286 562.521 44.4464 562.521 51.4643Z" fill="white" />
    <path d="M128.303 79.0679C128.303 50.9965 149.367 30.4108 179.049 30.4108C208.731 30.4108 229.796 50.9965 229.796 79.0679C229.796 107.139 208.731 127.725 179.049 127.725C149.846 127.725 128.303 107.139 128.303 79.0679ZM203.465 79.0679C203.465 63.1608 193.89 52.8679 179.528 52.8679C165.166 52.8679 155.591 63.6286 155.591 79.0679C155.591 94.5072 165.166 105.268 179.528 105.268C193.89 105.268 203.465 94.9751 203.465 79.0679Z" fill="white" />
    <path d="M64.1514 81.875C64.1514 74.3893 64.1514 66.9036 64.1514 58.95C83.301 58.95 102.929 58.95 122.079 58.95C122.079 80.9393 122.079 102.929 122.079 124.918C113.462 124.918 104.844 124.918 96.227 124.918C96.227 123.514 96.227 122.579 96.227 121.175C99.0995 117.9 102.451 114.157 105.323 109.011C110.111 101.525 112.504 94.5071 113.94 89.3607C113.462 88.8929 112.983 88.425 112.504 87.9571C111.547 92.1679 106.759 106.671 92.3971 117.432C80.4286 125.854 67.9813 127.257 62.2364 127.725C59.3639 127.725 47.8741 128.193 35.4269 122.111C28.7245 118.836 22.9796 114.625 17.7134 109.011C5.7449 96.3786 0 81.4072 0 64.0964C0 52.4 2.39371 42.1071 7.65986 32.2821C12.4473 22.925 20.1071 14.9714 30.1607 8.88929C40.2143 2.80714 52.1828 0 65.5876 0C80.9073 0 93.3546 3.74286 102.451 11.2286C111.547 18.7143 118.249 29.0071 122.079 41.6393H93.3546C88.5672 29.475 79.4711 23.3929 65.5876 23.3929C53.619 23.3929 44.523 27.1357 37.8206 34.6214C31.1182 42.1071 27.767 51.9321 27.767 64.0964C27.767 76.2607 31.1182 86.0857 37.8206 93.5714C39.7355 95.9107 42.1292 97.7822 44.523 99.1857C53.619 105.268 63.1939 104.8 65.5876 104.8C69.4175 104.8 76.5986 104.332 83.7798 99.1857C92.3971 93.1036 94.7908 84.6822 95.7483 82.3429C85.216 81.875 74.6837 81.875 64.1514 81.875Z" fill="white" />
    <path d="M503.157 51.9322C490.71 51.9322 484.965 61.2893 484.965 76.7286V125.386H459.592V30.8786H484.965V45.85C489.753 34.6215 496.455 30.8786 507.466 30.8786H518.477V51.4643L503.157 51.9322Z" fill="white" />
  </svg>;
  

  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={muiProps.open}
      onClose={() => muiProps.onClose()}
      onOpen={() => muiProps.onOpen()}
      className={styles.container}
      {...muiProps}
    >
      <div className={styles.innerContainer}>
        { loading && <Loader onComplete={() => { setLoading(false) }} />}
        { !loading && <div className={styles.header}>
          {GoCartLogoReverse}
          <IconButton onClick={() => { muiProps.onClose() }} className={styles.closeIcon}>
            <CloseIcon />
          </IconButton>
        </div> }
        <div className={styles.content}>{content}</div>
      </div>
    </SwipeableDrawer>
  )
}

export default EntryBackgroundDrawer

import { theme } from '../../Theme';

const styles = {
  "&.MuiButton-root": {
    fontFamily: 'TWK Lausanne!important',
    // font weight 600 was not present in theme
    fontWeight: 600,
    // translates to 14px on a scale 1:8
    fontSize: theme.spacing(1.75),
    textTransform: 'none',
    px: 2,
    py: 1.5,
    color: theme.palette.text.primary,
    borderRadius: '8px',
    //translate to 19px on a scale 1:8
    lineHeight: theme.spacing(2.375),
    height: theme.spacing(5.5),
    border: 0.5,
    borderStyle: 'solid',
  },
  "&.MuiButton-text": {
    borderColor: 'transparent',
    '&:hover': {
      backgroundColor: '#DCDEE533',
    },
    '&:focus': {
      borderColor:'#117B7433',
      backgroundColor: '#F1F2F5',
      boxShadow: `0px 0px ${theme.spacing(0.5)}px 0px #CFE5E31`
    },
  },
  "&.MuiButton-outlined": {
    // translates to 1px on a scale 1:8
    border: theme.spacing(0.125),
    borderStyle: 'solid',
    borderColor: '#DCDEE5',
    backgroundColor: '#F1F2F5',
    '&:hover': {
      backgroundColor: '#DCDEE5',
      borderColor: '#1213171A'
    },
    '&:focus': {
      border: 0.5,
      borderColor:'#117B7433',
      boxShadow: `0px 0px ${theme.spacing(0.5)}px 0px #CFE5E3`,
      backgroundColor: '#F1F2F5'
    },
  },
};

export default styles;
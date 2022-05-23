import { theme } from '../../Theme';

const styles = {
  "&.MuiButton-root": {
    fontWeight: 600,
    fontSize: '14px',
    textTransform: 'none',
    px: 2,
    py: 1.5,
    color: theme.palette.text.primary,
    borderRadius: 1,
    lineHeight: '19px',
  },
  "&.MuiButton-text": {
    '&:hover': {
      backgroundColor: '#DCDEE533',
    },
    '&:focus': {
      border: 0.5,
      borderColor:'#117B7433',
      backgroundColor: '#F1F2F5',
      boxShadow: '0px 0px 4px 0px #CFE5E3'
    },
  },
  "&.MuiButton-outlined": {
    border: '1px',
    borderColor: '#DCDEE5',
    backgroundColor: '#F1F2F5',
    '&:hover': {
      backgroundColor: '#1213171A',
      borderColor: '#1213171A'
    },
    '&:focus': {
      border: 0.5,
      borderColor:'#117B7433',
      boxShadow: '0px 0px 4px 0px #CFE5E3',
      backgroundColor: '#F1F2F5'
    },
  },
};

export default styles;
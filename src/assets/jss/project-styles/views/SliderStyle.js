
import { styled } from '@mui/material/styles';
const PrettoSlider = styled(Slider)({
    color: 'lightgray',
    height: 10,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#D65746',
      border: '2px solid #D65746',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 14,
      background: 'unset',
      padding: 0,
      width: 28,
      height: 28,
      borderRadius: '10px',
      backgroundColor: 'grey',
    },
  });
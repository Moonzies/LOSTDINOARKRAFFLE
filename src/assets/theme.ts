import { createTheme } from '@material-ui/core/styles';
import { DeviceType } from '../providers/ViewportProvider';

const PRIMARY_COLOR = '#E44145';
const SECONDARY_COLOR = 'rgb(40, 100, 150, 1)';

const theme = ({ device }: { device: DeviceType }) =>
  createTheme({
    typography: {
      allVariants: { color: '#000', fontFamily: "'Roboto Slab', serif"},
      h1: {
        color: "#F0F",
        textAlign: 'center',
        fontSize: device === DeviceType.Phone ? '20px' : '40px',
      },
      h2: {
        color: "#FF0",
        fontWeight: 'bold',
        fontSize: device === DeviceType.Phone ? '18px' : '25px',
      },
      h3: {
        color: "#dbdbdb",
        fontWeight: 'bold',
        fontSize: device === DeviceType.Phone ? '15px' : '16px',
        textShadow: "0px -2px 2px #737373, -2px 0px 2px black,0px 2px 2px black, 2px 0px 2px white, -4px 0px 7px black,4px 0px 7px white",
      },
      h4: {
        fontSize: device === DeviceType.Phone ? '20px' : '20px',
      },
      h6: {
        color: "white",
      },
      body1: {
        color: '#dbdbdb',
        textShadow: "0px -2px 2px #737373, -2px 0px 2px black,0px 2px 2px black, 2px 0px 2px white, -4px 0px 7px black,4px 0px 7px white",
        fontSize: device === DeviceType.Phone ? '14px' : '14px',
      },
      overline: {
        color: '#9F2',
        fontSize: device === DeviceType.Phone ? '12px' : '13px',
      },
      caption: {
        color: '#29F',
        fontSize: device === DeviceType.Phone ? '16x' : '16px',
      },
    },
    palette: {
      type: 'dark',
      background: {
        paper: '#221616',
        default:
          'linear-gradient(0deg, rgba(57,9,74,1) 0%, rgba(6,18,98,1) 100%, rgba(57,9,74,1) 100%);',
      },
      primary: {
        main: "#777",
      },
      secondary: {
        main: "#FFFFFF",
      },
      grey: { 500: '#FFFFFF' },

    },
  });

export default theme;

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DeviceType } from '../../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      width: '100%',
      height: device === DeviceType.Phone ? '50px' : '0px',
    }),
    drawerHeader: () => ({
      width: '100%',
      height: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
    }),
    appBar: ({ device }) => ({
      height: device === DeviceType.Phone ? '50px' : '90px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(6,18,98,0)',
      alignItems: 'center',
      zIndex: 99,
    }),
    navContainer: {
      position: "fixed",
      top: "20px", 
      right: "20px", 
      display: 'flex',
      alignItems: 'center',
      zIndex: 888,
    },
    homeButton: () => ({
      position: "fixed",
      color: theme.palette.primary.dark,
      zIndex: 888,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }),
    navButtons: {
      marginLeft: '30px',
      color: theme.palette.primary.main,
      '&:hover': {
        textShadow: '0px 0px 5px #e86bff',
        backgroundColor: 'transparent',
      },
    },
    homeButtonIcon: {
      height: '60px',
      color: theme.palette.primary.main,
      margin: "-5px",
    },
    walletButtonContainer: {
      marginLeft: '20px',
      borderRadius: "5px",
      backgroundColor: "maroon",
    },
    currentLocation: {
      color: 'black',
    },
  })
);

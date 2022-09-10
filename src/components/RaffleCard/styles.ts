import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      height: '420px',
      width: '280px',
      position: 'relative',
      cursor: 'pointer',
      boxShadow: '0 3px 5px 0 #111',
      '&:hover': {
        boxShadow: '0 6px 7px 0 #DDD',
        transform: 'scale3d(1.02, 1.02, 1)',
      },
      '&:active': {
        transform: 'scale3d(1.01, 1.01, 1.01)',
        boxShadow: '0 4px 5px 0 #DDD',
      },
    }),
    media: {
      height: '250px',
      minHeight: '250px',
      boxShadow: '-2px -2px 3px #F3AA54, 2px 2px 2px #F3AA54, 2px 1px 2px #441308, 5px 0px 5px #FFF, -5px 0px 5px #955307, 0px 5px 5px #FEB, 0px -5px 5px #CA7514',
      borderRadius: '15px',
    },
    raffleInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '20px',
      padding: '15px',
      fontFamily: "'Roboto Slab', serif",
      textShadow: "0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42",
      color: "#FFF4D4",
    },
    cardLabel: {
      fontSize: '15px',
      textShadow: '0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42',
      color: '#FFF5BF',
    },
    detailsRow1: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '10px',
      width: '100%',
      justifyContent: 'space-around',
      display: 'flex',
      paddingBottom: '5px',
      boxShadow: "0px 1px #c16d14a3, 0px 3px #bb9563c4, 0px 4px #ffdf61cf",
      color: "#FFF1BC",
    },
    detailsRow2: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "space-between",
      width: '100%',
      marginBottom: '10px',
    },
    detailsRow3: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    label: {
      fontSize: '10px',
      color: '#777',
    },
    ticketsSold: {
      width: '50%',
    },
    endingIn: {
      width: '50%',
    },
    ticketPrice: {
      width: '50%',
    },
    goToRaffle: {
      color: 'white',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    cardPrizesBadge: {
      fontSize: '12px',
      fontWeight: 'bold',
      width: '80px',
      textAlign: 'center',
      padding: '2px',
      position: 'absolute',
      top: '5px',
      left: '5px',
      color: 'black',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '2px',
      boxShadow: '0 2px 6px 0 #000',
    },
    cardEndedBadge: {
      fontSize: '12px',
      fontWeight: 'bold',
      width: '50px',
      textAlign: 'center',
      padding: '2px',
      position: 'absolute',
      top: '5px',
      right: '5px',
      color: 'white',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '2px',
      boxShadow: '0 2px 6px 0 #000',
    },
  })
);

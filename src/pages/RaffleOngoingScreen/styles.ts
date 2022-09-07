import { Theme } from '@material-ui/core';
import { makeStyles, alpha } from '@material-ui/core/styles';

import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: {
      width: '100%',
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionTagline: {
      width: '100%',
      marginBottom: '20px',
    },
    textHighlight: {
      fontWeight: 'bold',
      color: "#dbdbdb",
      marginBottom: '10px',
      textShadow: "0px -2px 2px #737373, -2px 0px 2px black,0px 2px 2px black, 2px 0px 2px white, -4px 0px 7px black,4px 0px 7px white",
    },
    topSection: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
    },
    raffleTitle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignContent: 'center',
      alignItems: 'center',
      justifyItems: 'space-between',
      marginRight: "30px",
      marginTop: "20px",
    },
    leftTitleSection: {
      width: '10%',
      display: 'flex',
    },
    middleTitleSection: {
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    },
    rightTitleSection: {
      width: '10%',
    },
    backButton: {
      color: theme.palette.common.white,
      backgroundColor: alpha(theme.palette.secondary.main, 0.8),
      boxShadow: 'rgb(85, 62, 62) -2px -2px inset, rgb(255, 255, 255) 2px 1px 1px inset, rgb(74, 74, 74) 2px 2px 2px 0px inset, rgb(115, 115, 115) -4px -4px 4px 0px inset, rgb(225, 225, 225) 4px 5px 1px inset, rgb(164, 164, 164) -7px -11px 5px inset, rgb(79, 24, 24) 5px 2px 3px, rgba(19, 19, 19, 0.6) 10px 10px 20px, rgb(60, 60, 60) -2px -2px 4px, rgba(11, 11, 11, 0.15) 20px 20px 20px !important',
      background: 'linear-gradient(300deg, rgba(181, 181, 181, 0.6) 0%, rgba(255, 0, 0, 0) 20%, rgba(187, 187, 187, 0.35) 40%, rgba(0, 0, 0, 0) 43%, rgba(185, 185, 185, 0.73) 90%), url("https://cdn.discordapp.com/attachments/241232921183125505/1015202414200107018/istockphoto-1200220612-612x612.jpg")',
      borderRadius: "20px",
      '&:hover': {
        boxShadow: `0px 0px 5px ${theme.palette.secondary.main}, inset 0px 0px 5px ${theme.palette.secondary.main}`,
        backgroundColor: alpha(theme.palette.secondary.main, 0.8),
      },
    },
    countdown: ({ device }) => ({
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
      fontSize: device === DeviceType.Phone ? '32px' : '60px',
      color: 'white',
      WebkitTextStrokeWidth: '1px',
      WebkitTextStrokeColor: theme.palette.secondary.main,
      textShadow: `0 0 10px ${theme.palette.secondary.main}`,
    }),
    mainContent: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: "40px",
      padding: "20px",
      borderRadius: "20px",
    },
    prizesSection: {
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '20px',
      minHeight: '450px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    prizesHeader: {
      marginBottom: '10px',
    },

    yourTickets: {
      zIndex: 90,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "89px",
      marginBottom: "-192px",
      textShadow: "0px -2px 2px #737373, -2px 0px 2px black,0px 2px 2px black, 2px 0px 2px white, -4px 0px 7px black,4px 0px 7px white",
      color: "#dbdbdb",
    },
    myTicketsTitle: {
      fontSize: "xx-large",
      lineHeight: "0px",
      textShadow: "0px -2px 2px #737373, -2px 0px 2px black,0px 2px 2px black, 2px 0px 2px white, -4px 0px 7px black,4px 0px 7px white",
    },
    myTicketsVal: {
      marginTop: "21px",
      fontSize: "69px",
      textShadow: "0px -2px 2px #737373, -2px 0px 2px black,0px 2px 2px black, 2px 0px 2px white, -4px 0px 7px black,4px 0px 7px white",
      color: "#dbdbdb",
    },
    
    labelPrizeAmount: {
      marginLeft: '5px',
      color: theme.palette.secondary.main,
      textTransform: 'initial',
      '&:hover': {
        textShadow: `0px 0px 5px ${theme.palette.secondary.main}`,
        backgroundColor: 'transparent',
        textDecoration: 'none',
      },
    },
    seeAllPrizesLabel: {},
    detailsSection: ({ device }) => ({
      color: "white",
      paddingTop: '0px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '30%',
      minWidth: device === DeviceType.Phone ? '256px' : '313px',
      maxWidth: device === DeviceType.Phone ? '380px' : '380px',
      maxHeight: '500px',
    }),
    actionSectionContainer: {
      padding: '20px 0 20px 0',
      marginTop: '72px',
    },
    actionSectionInner: {
      padding: '10px 0',
      width: '90%',
      textAlign: 'center',
    },
    connectToBuyButton: {
      width: '80%',
      height: '40px',
    },
    scrollIcon: {
      color: theme.palette.common.white,
      transform: `rotate(90deg)`,
      fontSize: '50px',
      opacity: '0.6',
      marginTop: '20px',
      marginBottom: '60px',
    },
    spacer: {
      width: '100%',
      height: '20px',
    },
    claimFlexContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    claimBox: {
      width: "418px",
    }
  })
);

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      width: '100%',
      minWidth: device === DeviceType.Phone ? '256px' : '313px',
      maxWidth: device === DeviceType.Phone ? '380px' : '380px',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '30px',
    }),
    ticketsSection: {
      width: "280px",
      height: "420px",
      borderRadius: "19px!important",
    margin: "40px",
    background: 'linear-gradient(300deg, rgba(252, 212, 69, 0.604) 0%, rgba(255, 0, 0, 0) 20%, rgba(252, 212, 69, 0.353) 40%, rgba(0, 0, 0, 0) 43%, rgba(252, 212, 69, 0.73) 90%), url("https://media.istockphoto.com/photos/gold-foil-metal-wall-with-glowing-shiny-light-abstract-texture-picture-id1200220612?k=20&m=1200220612&s=612x612&w=0&h=HcQmbsPbDpVGOiZC2rvblGKnvVBRObEzVnO_89Xd_04=")',
    boxShadow: "rgb(225, 170, 57) -2px -2px inset, rgb(225, 170, 57) 4px 3px 1px inset, rgb(90, 46, 7) 4px 3px 2px 0px inset, rgb(202, 127, 34) -3px -7px 4px 0px inset, rgb(228, 234, 191) 7px 6px 1px inset, rgb(235, 182, 54) -7px -11px 2px inset, rgb(140, 69, 5) 4px 4px 3px, rgb(40, 1, 1) 10px 10px 20px, rgb(123, 58, 0) -2px -2px 4px, rgba(40, 23, 0, 0.75) 50px 60px 40px !important",
    padding: "19px",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    filter:'contrast(1.25) brightness(0.85)',
    '&:hover': {
      filter: "grayscale(0%)!important",
    }
    },
    ticketsSectionMobile: {
      width: "280px",
      height: "420px",
      borderRadius: "19px!important",
    background: 'linear-gradient(300deg, rgba(252, 212, 69, 0.604) 0%, rgba(255, 0, 0, 0) 20%, rgba(252, 212, 69, 0.353) 40%, rgba(0, 0, 0, 0) 43%, rgba(252, 212, 69, 0.73) 90%), url("https://media.istockphoto.com/photos/gold-foil-metal-wall-with-glowing-shiny-light-abstract-texture-picture-id1200220612?k=20&m=1200220612&s=612x612&w=0&h=HcQmbsPbDpVGOiZC2rvblGKnvVBRObEzVnO_89Xd_04=")',
    boxShadow: "rgb(225, 170, 57) -2px -2px inset, rgb(225, 170, 57) 4px 3px 1px inset, rgb(90, 46, 7) 4px 3px 2px 0px inset, rgb(202, 127, 34) -3px -7px 4px 0px inset, rgb(228, 234, 191) 7px 6px 1px inset, rgb(235, 182, 54) -7px -11px 2px inset, rgb(140, 69, 5) 4px 4px 3px, rgb(40, 1, 1) 10px 10px 20px, rgb(123, 58, 0) -2px -2px 4px, rgba(40, 23, 0, 0.75) 50px 60px 40px !important",
    padding: "19px",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    filter:'contrast(1.25) brightness(0.85)',
    marginTop: "72px",
    '&:hover': {
      filter: "grayscale(0%)!important",
    },
    ticketContainerMobile: {
      minWidth: '256px',
      maxWidth: '380px',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '30px',
      marginTop: "72px",
    },
    },
    totalTickets: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '20px',
      padding: '15px',
      fontFamily: "'Roboto Slab', serif",
      color: '#FFF',
      textShadow: '0px 0px 2px #FFE300, 0px 0px 2px #ffeacf',
    },
    ticketPrice: {
      width: '42%',
    },
    myTickets: {
      width: '55%',
    },
    showMyTickets: {
      width: '45%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'baseline',
      paddingBottom: '5px',
    },
    media: {
      height: '250px',
      minHeight: '250px',
      boxShadow: '-2px -2px 3px #F3AA54, 2px 2px 2px #F3AA54, 2px 1px 2px #441308, 5px 0px 5px #FFF, -5px 0px 5px #955307, 0px 5px 5px #FEB, 0px -5px 5px #CA7514',
      borderRadius: '15px',
    },
    ticketButton: {
      fontSize: '14px',
      color: theme.palette.primary.main,
      textShadow: '0px 0px 5px #FF000C',
      padding: '0 0',
      '&:hover': {
        backgroundColor: 'transparent',
      },
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
      textShadow: "0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42",
      color: '#FFF5BF'
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
    separator: { margin: '0 5px' },
  })
);

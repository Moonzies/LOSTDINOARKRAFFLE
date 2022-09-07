import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '19px',
  },
  titleSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: '15px',
  },
  amountLabel: {
    width: '100%',
    display: 'flex',
    justifyContent: "center",
    boxShadow: "0px -1px #f7f7f7, 0px -3px #d7d7d7, 0px -4px #b0b0b0",
    paddingTop: "14px",
  },
  priceTotal: {
    display: "flex",
    justifyContent: "center",
    textShadow: "0px -2px 2px #605b52, -2px 0px 2px #ffc12c,0px 2px 2px #626262, 2px 0px 2px #6c6c6c, -4px 0px 7px #515151,4px 0px 7px #ffffff42",
    color: "#FFF4D4",
  },
  priceValue: {
    marginRight: "5px",
  },
  plusSign: {
    textShadow: "0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42",
    color: "#FFF4D4",
    fontSize: "xxx-large",
  },
  minusSign: {
    textShadow: "0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42",
    color: "#FFF4D4",
    fontSize: "xxx-large",
  },
  ticketAmountSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginBottom: '15px',
    textShadow: "0px -2px 2px #737373, -2px 0px 2px black,0px 2px 2px black, 2px 0px 2px white, -4px 0px 7px black,4px 0px 7px white",
    fontSize: "70px", 
  },
  ticketAmountSectionLeft: {
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ticketAmountSectionMiddle: {
    width: "175px",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ticketAmountSectionRight: {
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  changeTicketAmountButton: {
    color: theme.palette.primary.main,
  },
  ticketAmountTextField: {
    width: '100%',
    height: '100%',
    borderColor: "#00000000",
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      // borderColor: theme.palette.primary.main,
      borderColor: "#00000000",
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: "#00000000",
    },
    '& .MuiOutlinedInput-input': {
      color: "#FFF4D4",
      textAlign: 'center',
      fontSize: "80px",
      textShadow: "0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42",
      background: 'linear-gradient(300deg, rgba(252, 212, 69, 0.604) 0%, rgba(255, 0, 0, 0) 20%, rgba(252, 212, 69, 0.353) 40%, rgba(0, 0, 0, 0) 43%, rgba(252, 212, 69, 0.73) 90%), url("https://media.istockphoto.com/photos/gold-foil-metal-wall-with-glowing-shiny-light-abstract-texture-picture-id1200220612?k=20&m=1200220612&s=612x612&w=0&h=HcQmbsPbDpVGOiZC2rvblGKnvVBRObEzVnO_89Xd_04=")',
      borderRadius: "15px",
      boxShadow: "0px -1px 1px #AE820B, 0px 2px 2px #FEFCFA, -2px 0px 2px #BE9620, 2px 0px 2px #BE9620, 0px 4px 8px #FCEDA8, 0px -2px 2px #3F2705, -2px 0px 2px #3F2705, 0px -5px 8px #3F2705A8, -4px 0px 4px black",
      marginTop: "15px",
      borderColor: "#00000000",
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: '8px',
      borderColor: "#00000000",
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: '8px',
      borderColor: "#00000000",
    },
  },
  maxButton: {
    color: theme.palette.primary.main,
    fontSize: '15px',
    width: '30px',
    minWidth: '30px',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  priceSection: {
    width: '100%',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  priceLabel: {
    margin: '-5px 0 -5px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paymentOptionSection: {
    width: '100%',
    display: 'flex',
  },
  basketPrice: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  paymentOptionSelect: {
    width: '100%',
    height: '50px',
    marginTop: '-10px',
    padding: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  paymentOptionSelection: {
    padding: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentOptionMenu: {
    padding: '0 10px 0 0',
    margin: '5px 10px 5px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  paymentOptionLogoContainer: {
    height: '30px',
    width: '30px',
    margin: '5px 10px 5px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paymentOptionLogo: {
    height: '100%',
    borderRadius: '50%',
  },

  buySection: {
    width: "200px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
  },
  purchaseButtonContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "x-large",
    textShadow: "0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42",
  },
  purchaseButtonContentLeft: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
  },
  purchaseButtonContentMiddle: {
    width: '60%',
  },
  purchaseButtonContentRight: {
    width: '20%',
  },
  purchaseSpinner: {
    height: '50px',
    color: theme.palette.secondary.main,
  },
  walletBalance: {
    marginTop: '5px',
    fontSize: '12px',
    color: '#777',
    textAlign: 'left',
  },
}));

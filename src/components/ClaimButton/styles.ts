import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
  },
  claimButtonContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  claimButtonContentLeft: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
  },
  claimButtonContentMiddle: {
    width: '80%',
  },
  claimButtonContentRight: {
    width: '0%',
  },
  claimSpinner: {
    height: '50px',
    color: theme.palette.primary.main,
  },
  claimButton: {
    border: "0px",
    height: '100%',
    marginTop: "-54px",
    marginBottom: "15px",
    textShadow: "0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42",
    boxShadow: "rgb(225, 170, 57) -2px -2px inset, rgb(225, 170, 57) 4px 3px 1px inset, rgb(90, 46, 7) 4px 3px 2px 0px inset, rgb(202, 127, 34) -3px -7px 4px 0px inset, rgb(228, 234, 191) 7px 6px 1px inset, rgb(235, 182, 54) -7px -11px 2px inset, rgba(140, 69, 5, 0.41) 4px 4px 3px, rgba(40, 1, 1, 0.51) 10px 10px 20px, rgb(123, 58, 0) -2px -2px 4px, rgba(40, 23, 0, 0.6) 15px 15px 15px !important",
    background: 'linear-gradient(300deg, rgba(252, 212, 69, 0.604) 0%, rgba(255, 0, 0, 0) 20%, rgba(252, 212, 69, 0.353) 40%, rgba(0, 0, 0, 0) 43%, rgba(252, 212, 69, 0.73) 90%), url("https://media.istockphoto.com/photos/gold-foil-metal-wall-with-glowing-shiny-light-abstract-texture-picture-id1200220612?k=20&m=1200220612&s=612x612&w=0&h=HcQmbsPbDpVGOiZC2rvblGKnvVBRObEzVnO_89Xd_04=")',
    color: "#FFF4D4",
    borderRadius: "15px",
    width: "150px",
    fontSize: "xx-large",
    filter: "contrast(1.25) brightness(0.85)",
    '&:hover': {
      borderColor: "khaki",
      filter: "!important",
    },
  },
}));

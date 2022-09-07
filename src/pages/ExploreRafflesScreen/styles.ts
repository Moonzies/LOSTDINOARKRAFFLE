import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    rafflesGrid: {
      display: 'flex',
      flexGrow: 'initial',
      width: 'auto',
    },
    titleBar: ({ device }) => ({
      marginBottom: device === DeviceType.Phone ? '20px' : '50px',
    }),
    mainContent: {
      marginTop: '100px',
      textAlign: 'center',
      color: "white",
    },
    raffleCardContainer: ({ device }) => ({
      borderRadius: "19px!important",
      margin: "40px",
      background: 'linear-gradient(300deg, rgba(252, 212, 69, 0.604) 0%, rgba(255, 0, 0, 0) 20%, rgba(252, 212, 69, 0.353) 40%, rgba(0, 0, 0, 0) 43%, rgba(252, 212, 69, 0.73) 90%), url("https://media.istockphoto.com/photos/gold-foil-metal-wall-with-glowing-shiny-light-abstract-texture-picture-id1200220612?k=20&m=1200220612&s=612x612&w=0&h=HcQmbsPbDpVGOiZC2rvblGKnvVBRObEzVnO_89Xd_04=")',
      boxShadow: "rgb(225, 170, 57) -2px -2px inset, rgb(225, 170, 57) 4px 3px 1px inset, rgb(90, 46, 7) 4px 3px 2px 0px inset, rgb(202, 127, 34) -3px -7px 4px 0px inset, rgb(228, 234, 191) 7px 6px 1px inset, rgb(235, 182, 54) -7px -11px 2px inset, rgb(140, 69, 5) 4px 4px 3px, rgb(40, 1, 1) 10px 10px 20px, rgb(123, 58, 0) -2px -2px 4px, rgba(40, 23, 0, 0.75) 50px 60px 40px !important",
      padding: "19px",
      backgroundSize: "cover",
      filter:'contrast(1.25) brightness(0.85)',
      '&:hover': {
        filter: "grayscale(0%)!important",
      }
    }),
  })
);

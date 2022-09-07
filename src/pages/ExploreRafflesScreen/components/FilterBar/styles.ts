import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DeviceType } from '../../../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    filterBar: ({ device }) => ({
      width: '100%',
      display: 'flex',
      flexDirection: device === DeviceType.Phone ? 'column' : 'row',
      alignItems: 'center',
      marginBottom: '30px',
      justifyContent: 'space-between',
    }),
    leftSection: {
      width: '25%',
    },
    middleSection: {
      width: '50%',
      height: "30px",
      display: 'flex',
      justifyContent: 'center',
    },
    rightSection: {
      width: '25%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    leftPhoneSection: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    rightPhoneSection: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    ownRafflesSwitchContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: 200,
      height: "30px",
      border: '1px solid #5b2a2a',
      background: 'linear-gradient(300deg, rgba(181, 181, 181, 0.6) 0%, rgba(255, 0, 0, 0) 20%, rgba(187, 187, 187, 0.35) 40%, rgba(0, 0, 0, 0) 43%, rgba(185, 185, 185, 0.73) 90%), url("https://cdn.discordapp.com/attachments/241232921183125505/1015202414200107018/istockphoto-1200220612-612x612.jpg")',
      boxShadow: 'rgb(85, 62, 62) -2px -2px inset, rgb(255, 255, 255) 2px 1px 1px inset, rgb(74, 74, 74) 2px 2px 2px 0px inset, rgb(115, 115, 115) -4px -4px 4px 0px inset, rgb(225, 225, 225) 4px 5px 1px inset, rgb(164, 164, 164) -7px -11px 5px inset, rgb(79, 24, 24) 5px 2px 3px, rgba(19, 19, 19, 0.6) 10px 10px 20px, rgb(60, 60, 60) -2px -2px 4px, rgba(11, 11, 11, 0.24) 20px 20px 20px !important',
      borderRadius: "4px",
      textShadow: "1px 1px 2px black",
    },
    ownRafflesSwitchContainerMobile: {
      display: 'flex',
      justifyContent: 'center',
      height: "30px",
      border: '1px solid #5b2a2a',
      background: 'linear-gradient(300deg, rgba(181, 181, 181, 0.6) 0%, rgba(255, 0, 0, 0) 20%, rgba(187, 187, 187, 0.35) 40%, rgba(0, 0, 0, 0) 43%, rgba(185, 185, 185, 0.73) 90%), url("https://cdn.discordapp.com/attachments/241232921183125505/1015202414200107018/istockphoto-1200220612-612x612.jpg")',
      boxShadow: 'rgb(85, 62, 62) -2px -2px inset, rgb(255, 255, 255) 2px 1px 1px inset, rgb(74, 74, 74) 2px 2px 2px 0px inset, rgb(115, 115, 115) -4px -4px 4px 0px inset, rgb(225, 225, 225) 4px 5px 1px inset, rgb(164, 164, 164) -7px -11px 5px inset, rgb(79, 24, 24) 5px 2px 3px, rgba(19, 19, 19, 0.6) 10px 10px 20px, rgb(60, 60, 60) -2px -2px 4px, rgba(11, 11, 11, 0.24) 20px 20px 20px !important',
      borderRadius: "4px",
      textShadow: "1px 1px 2px black",
    },
    showEndedRaffles: {
      display: 'none',
      alignItems: 'center',
    },
    showEndedRafflesCheckbox: {
      color: theme.palette.primary.main,
      '&.Mui-checked': {
        color: theme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    hideEndedText: {
      color: 'white',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  })
);

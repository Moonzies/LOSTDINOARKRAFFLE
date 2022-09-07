import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      position: 'fixed',
      bottom: device === DeviceType.Phone ? 20 : 30,
      right: device === DeviceType.Phone ? 20 : 30,
    }),
    scrollButton: {
      color: theme.palette.common.white,
      backgroundColor: "darkkhaki",
      background: 'linear-gradient(300deg, rgba(181, 181, 181, 0.6) 0%, rgba(255, 0, 0, 0) 20%, rgba(187, 187, 187, 0.35) 40%, rgba(0, 0, 0, 0) 43%, rgba(185, 185, 185, 0.73) 90%), url("https://cdn.discordapp.com/attachments/241232921183125505/1015202414200107018/istockphoto-1200220612-612x612.jpg")aliceblue',
      boxShadow: 'rgb(176, 176, 176) -2px -2px inset, rgb(159, 159, 159) 4px 3px 1px inset, rgb(74, 74, 74) 4px 3px 2px 0px inset, rgb(115, 115, 115) -3px -7px 4px 0px inset, rgb(225, 225, 225) 7px 6px 1px inset, rgb(164, 164, 164) -7px -11px 2px inset, rgba(123, 123, 123, 0.06) 4px 4px 3px, rgb(19, 19, 19) 10px 10px 20px, rgb(60, 60, 60) -2px -2px 4px, rgba(11, 11, 11, 0.75) 50px 60px 40px !important',
      '&:hover': {
        boxShadow: `0px 0px 10px ${theme.palette.secondary.main}, inset 0px 0px 5px ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.secondary.main,
      },
    },
    scrollButtonIcon: {
      transform: `rotate(-90deg)`,
    },
  })
);

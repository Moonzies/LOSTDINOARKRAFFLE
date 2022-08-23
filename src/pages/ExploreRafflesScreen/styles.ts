import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    rafflesGrid: {
      display: 'flex',
      flexGrow: 'initial',
      width: 'auto',
      padding: "20px",
      backgroundColor: "#000F0F8A",
      borderRadius: "20px"
    },
    titleBar: ({ device }) => ({
      marginBottom: device === DeviceType.Phone ? '20px' : '50px',
    }),
    mainContent: {
      marginTop: '100px',
      textAlign: 'center',
    },
    raffleCardContainer: ({ device }) => ({
      margin:
        device === DeviceType.Phone ? '0 10px 0px 10px' : '0 10px 0px 10px',
    }),
  })
);

import { Theme, alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  walletConnectButton: {
    backgroundColor: 'transparent',
    boxShadow: '0 0 5px 2px khaki, inset 0 0 10px 0px khaki',
    color: "khaki",
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
      borderColor: "khaki",
    },
  },
  walletDisconnectButton: {
    backgroundColor: 'transparent',
    borderColor: "khaki",
    boxShadow: `0 0 5px 2px khaki, inset 0 0 10px 0px khaki`,
    color: "khaki",
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.2),
      borderColor: "khaki",
    },
  },
}));

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1F0800',
    backgroundImage: 'url(https://cdn.discordapp.com/attachments/241232921183125505/1011248734736228362/background.png)',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'auto',
    backgroundPosition: 'left',
    position: 'fixed',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

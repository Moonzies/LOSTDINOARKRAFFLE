import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: '100vw',
    height: '0%',
    backgroundColor: '#1F0800',
    backgroundImage: 'url(https://cdn.discordapp.com/attachments/241232921183125505/1013757305659072542/Untitled-5.png)',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    position: 'absolute',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

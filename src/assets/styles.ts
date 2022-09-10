import { Theme, alpha, darken } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    textAlign: 'left',
  },
  value: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    verticalAlign: 'center',
  },
  actionSection: {
    width: "280px",
    height: "420px",
    minHeight: '180px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: '19px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    margin: "40px",
    background: 'linear-gradient(300deg, rgba(181, 181, 181, 0.6) 0%, rgba(255, 0, 0, 0) 20%, rgba(187, 187, 187, 0.35) 40%, rgba(0, 0, 0, 0) 43%, rgba(185, 185, 185, 0.73) 90%), url("https://cdn.discordapp.com/attachments/241232921183125505/1015202414200107018/istockphoto-1200220612-612x612.jpg")',
    boxShadow: "rgb(176, 176, 176) -2px -2px inset, rgb(159, 159, 159) 4px 3px 1px inset, rgb(74, 74, 74) 4px 3px 2px 0px inset, rgb(115, 115, 115) -3px -7px 4px 0px inset, rgb(225, 225, 225) 7px 6px 1px inset, rgb(164, 164, 164) -7px -11px 2px inset, rgb(123, 123, 123) 4px 4px 3px, rgb(19, 19, 19) 10px 10px 20px, rgb(60, 60, 60) -2px -2px 4px, rgba(11, 11, 11, 0.75) 50px 60px 40px !important",
    padding: "19px",
    backgroundSize: "cover",
    filter:'contrast(1.25) brightness(0.85)',
    textShadow: "0px 0px 2px #FFE300, 0px 0px 2px #ffeacf",
  },
  mainButton: {
    border: "0px",
    height: '100%',
    marginTop: "15px",
    marginBottom: "15px",
    fontSize: "x-large",
    textShadow: "0px -2px 2px #774e00, -2px 0px 2px #7d5800,0px 2px 2px #886000, 2px 0px 2px #ffcb00, -4px 0px 7px #642f00,4px 0px 7px #ffffff42",
    boxShadow: "0px -2px 2px #ffe29f, -2px 0px 2px #000000ba, 0px 2px 2px #0000008a, 2px 0px 2px #fbe695, -4px 0px 7px #00000096, 4px 0px 7px white, 0px -7px 6px #4f4f4fa6, 0px 4px 5px #000000e0, inset -2px 0px 2px #ffe2aa70, inset 1px 1px 1px #ffe47c1a, inset 2px -1px 3px #482806, inset -4px -2px 1px #ffdaaa, 7px 0px 15px #b37e004a",
    background: 'linear-gradient(300deg, rgba(252, 212, 69, 0.604) 0%, rgba(255, 0, 0, 0) 20%, rgba(252, 212, 69, 0.353) 40%, rgba(0, 0, 0, 0) 43%, rgba(252, 212, 69, 0.73) 90%), url("https://media.istockphoto.com/photos/gold-foil-metal-wall-with-glowing-shiny-light-abstract-texture-picture-id1200220612?k=20&m=1200220612&s=612x612&w=0&h=HcQmbsPbDpVGOiZC2rvblGKnvVBRObEzVnO_89Xd_04=")',
    color: "#FFF4D4",
    '&:hover': {
      backgroundColor: darken(theme.palette.secondary.main, 0.2),
      borderColor: darken(theme.palette.secondary.main, 0.2),
    },
  },
}));

export default useStyles;

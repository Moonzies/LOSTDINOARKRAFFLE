import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
  CardMedia,
  CardActions,
  Card,
} from '@material-ui/core';
import { FC, useState } from 'react';
import CountUp from 'react-countup';

import { getDisplayAmount } from '../../lib/accounts';
import { Raffle } from '../../lib/types';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';
import Countdown from '../Countdown';
import { classicNameResolver } from 'typescript';

type UserTicketsDialogProps = DialogProps & {
  setOpen: (isOpen: boolean) => void;
  userTickets?: number[];
};

const UserTicketsDialog: FC<UserTicketsDialogProps> = ({
  setOpen,
  userTickets,
  ...props
}) => {
  return (
    <Dialog {...props} onClose={() => setOpen(false)} fullWidth={true}>
      <DialogTitle>My tickets</DialogTitle>
      <DialogContent>
        {userTickets?.map((userTicket) => (
          <div key={userTicket}>#{userTicket + 1}</div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

interface RaffleInfoSectionProps {
  raffle: Raffle;
  userConnected: boolean;
  userTickets?: number[];
}

const RaffleInfoSection: FC<RaffleInfoSectionProps> = ({
  userConnected,
  raffle,
  userTickets,
}) => {
  const { device } = useViewport();
  const classes = { ...useCommonStyles(), ...(useStyles({ device }) as any) };
  const [open, setOpen] = useState(false);
  const prize = raffle.prizes[0];
  const imageUrl =
    raffle.metadata.overviewImageUri
      ? raffle.metadata.overviewImageUri
      : prize.meta.imageUri;

  return (
    <div className={classes.ticketContainerMobile}>
          
        <div className={classes.ticketsSectionMobile}
        onClick={() => {
          var win = window.open(
            `https://solscan.io/token/${prize.mint.publicKey.toString()}`,
            '_blank'
          );
          win?.focus();
        }}>
          <CardMedia
            component="img"
            className={classes.media}
            src={imageUrl}
          /> 
          
          <CardActions className={classes.raffleInfo}>
            <div className={classes.detailsRow1}>
              {raffle.metadata.name}
            </div>

            <div className={classes.detailsRow2}>
              <div className={classes.ticketPrice}>
                <div className={classes.label}>
                  <span className={classes.cardLabel}>PRICE</span>
                </div>
                <div>
                  {getDisplayAmount(
                    raffle.proceeds.ticketPrice,
                    raffle.proceeds.mint
                  )}{' '}
                  {raffle.proceeds.mint.symbol}
                </div>
              </div>
              <div className={classes.ticketsSold}>
                <div className={classes.label}>
                  <span className={classes.cardLabel}>TICKETS SOLD</span>
                </div>
                <div>
                {raffle.totalTickets != 0 ? raffle.totalTickets : "SOLD OUT"}
                </div>
              </div>
            </div>

            <div className={classes.detailsRow3}>
              <div className={classes.endingIn}>
                <div className={classes.label}>
                  <span className={classes.cardLabel}>TIME</span>
                </div>
                  <Countdown endTimestamp={raffle.endTimestamp} />
              </div>
            </div>
          </CardActions>
        </div>
    </div>
  );
};

export default RaffleInfoSection;

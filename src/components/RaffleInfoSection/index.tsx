import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { FC, useState } from 'react';
import CountUp from 'react-countup';

import { getDisplayAmount } from '../../lib/accounts';
import { Raffle } from '../../lib/types';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';

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

  return (
    <div className={classes.root}>
      <div className={classes.ticketsSection}>
        <div className={classes.totalTickets}>
          <Typography variant="overline" className={classes.label}>
            Tickets sold
          </Typography>
          {raffle.entrantsCap > 0 ? (
            <div className={classes.value}>
              <CountUp
                start={0}
                end={raffle.totalTickets}
                delay={0.7}
                duration={3.0}
                preserveValue
                useEasing
              >
                {({ countUpRef }) => <Typography variant="h4" ref={countUpRef} />}
              </CountUp>
            </div>
          ) : (
            <Typography variant="h4">
              SOLD OUT
            </Typography>
          )}
        </div>
        <div className={classes.ticketPrice}>
          <Typography variant="overline" className={classes.label}>
            Ticket Price
          </Typography>
          <Typography variant="h4">
            {`${getDisplayAmount(
              raffle.proceeds.ticketPrice,
              raffle.proceeds.mint
            )} ${raffle.proceeds.mint.symbol}`}
          </Typography>
        </div>
      </div>
      {raffle.entrantsCap > 0 && userConnected && (
        <div className={classes.ticketsSection}>
          <div className={classes.myTickets}>
            <Typography variant="overline" className={classes.label}>
              My tickets
            </Typography>
            <div className={classes.value}>
              <CountUp
                start={0}
                end={userTickets?.length ?? 0}
                delay={0}
                duration={0.8}
                preserveValue
                useEasing
              >
                {({ countUpRef }) => (
                  <Typography variant="h4" ref={countUpRef} />
                )}
              </CountUp>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RaffleInfoSection;

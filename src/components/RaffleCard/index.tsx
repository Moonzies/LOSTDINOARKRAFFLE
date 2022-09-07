import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { ArrowForward } from '@material-ui/icons';
import { useHistory } from 'react-router';

import { PrizeType, Raffle } from '../../lib/types';
import { routes } from '../../router/routes';
import Countdown from '../Countdown';
import { getDisplayAmount } from '../../lib/accounts';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';

export interface RaffleCardProps extends HTMLAttributes<HTMLDivElement> {
  raffle: Raffle;
}

const MAX_TITLE_LENGTH = 20;

const RaffleCard: FC<RaffleCardProps> = ({
  raffle,
  className,
  ...otherProps
}) => {
  const { device } = useViewport();
  const classes = useStyles({ device });
  const { push } = useHistory();
  const [isEnded, setIsEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timerId = setInterval(
      () => setIsEnded(new Date() < raffle.endTimestamp),
      1000
    );
    return () => clearInterval(timerId);
  }, [raffle, setIsEnded]);

  if (raffle.prizes.length === 0) return null;

  const prize = raffle.prizes[0];
  const imageUrl =
    raffle.metadata.overviewImageUri
      ? raffle.metadata.overviewImageUri
      : prize.meta.imageUri;

  return (
    <Card style={!isEnded ? {filter: "grayscale(100%)"} : {backgroundColor: "white"}}
      onClick={() => {
        push(`${routes.RAFFLES}/${raffle.publicKey}`);
      }}
      className={`${classes.root} ${className}`}
      {...otherProps}
    >
      {/*<div className={classes.cardPrizesBadge}>
        {raffle.prizes.length} WINNER{raffle.prizes.length > 1 && 'S'}
      </div>
      {new Date() > raffle.endTimestamp && (
        <div className={classes.cardEndedBadge}>Ended</div>
      )}*/}
      {!isLoaded && (
        <Skeleton
          variant="rect"
          animation={'wave'}
          classes={{
            root: classes.media,
          }}
        />
      )}
      <CardMedia
        component="img"
        className={classes.media}
        src={imageUrl}
        alt={prize.mint.name}
        style={isLoaded ? (raffle.totalTickets == 0 ? {} : {}) : { display: 'none' }}
        onLoad={() => setIsLoaded(true)}
      />

      <CardActions className={classes.raffleInfo} style={isEnded ? {} : {background: "linear-gradient(300deg, rgba(255, 252, 203, 0.8)00%, rgba(255,0,0,0) 20%,rgba(251, 245, 216, 0.8)30%,rgba(232, 225, 225, 0)50%,rgba(255, 243, 176, 0.8)80%), darkkhaki!important"}}>
        <div className={classes.detailsRow1}>
          {
            raffle.metadata.name
          }
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
              <span className={classes.cardLabel}> {!isEnded ? "TIME" : "TIME"}</span>
            </div>
            {isEnded ? <Countdown endTimestamp={raffle.endTimestamp} /> : 'ENDED'}
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default RaffleCard;

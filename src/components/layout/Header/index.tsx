import React, { FC, useState } from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import { useWallet } from '@solana/wallet-adapter-react';
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronLeft, Home } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { useStyles } from './styles';
import { routes } from '../../../router/routes';
import AirdropButton from '../../AirdropButton';
import { useViewport } from '../../../hooks/useViewport';
import { DeviceType } from '../../../providers/ViewportProvider';
import Drawer from '../Drawer';
import WalletButton from '../WalletButton';
import NavButton from '../NavButton';
import { TESTING } from '../../../config/misc';
import { isAdmin } from '../../AdminRoute';

export interface HeaderProps {
  onBackNavigation?: () => void;
}

const NAV_LINKS_LIST = [
  { label: 'Admin Panel', target: routes.ADMIN.HOME, admin: true },
];

const Header: FC<HeaderProps> = ({ onBackNavigation }) => {
  const { device } = useViewport();
  const classes = useStyles({ device });
  const { connected, publicKey } = useWallet();
  const { push, location } = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <>
            <div>
              <IconButton
                onClick={() => push(routes.RAFFLES)}
                className={classes.homeButton}
              >
                <img
                  src="/ldaLogo.png"
                  alt={'Site banner'}
                  className={classes.homeButtonIcon}
                />
              </IconButton>
            </div>
            <div className={classes.navContainer}>
              {NAV_LINKS_LIST.filter(
                ({ admin }) => !admin || (admin && isAdmin(publicKey))
              ).map(({ label, target }) => (
                <NavButton
                  key={target}
                  label={label}
                  target={target}
                  isCurrent={location.pathname === target}
                  style={{ marginRight: '20px' }}
                />
              ))}
              {connected && TESTING && <AirdropButton />}
              <div className={classes.walletButtonContainer}>
                <WalletButton />
              </div>
            </div>
          </>
    </div>
  );
};

export default Header;

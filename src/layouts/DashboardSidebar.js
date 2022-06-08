
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Box,
  styled,
  CardMedia,
  Drawer,
  Typography
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import useResponsive from '../hooks/useResponsive';

import NavSection from '../components/NavSection';
import Logo from '../assets/images.png'

import navConfig from './NavConfig';

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));


export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <CardMedia component="img"
          image={Logo} />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <AccountStyle>
          <GitHubIcon />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              GitHub API
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Welcome to
            </Typography>
          </Box>
        </AccountStyle>
      </Box>
      <NavSection navConfig={navConfig} />
    </>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{ sx: { width: DRAWER_WIDTH }, }}>
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.paper',
              borderRightStyle: 'dashed',
            },
          }}>
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}

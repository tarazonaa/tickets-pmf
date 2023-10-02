import { useTheme } from '@mui/material/styles'
import { AppBar, Toolbar, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { TitlePortal, RefreshIconButton } from 'react-admin';

export const PMFAppbar = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up('sm'));

return (




);


    // <AppBar position="static">
    //     <Toolbar>
    //         <TitlePortal />
    //         <Box flex="1" />
    //         <RefreshIconButton />
    //     </Toolbar>
    // </AppBar>
  };
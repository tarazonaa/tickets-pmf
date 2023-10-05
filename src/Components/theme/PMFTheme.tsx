import { Admin, defaultTheme } from 'react-admin';

export const PMFTheme = { 
    ...defaultTheme,
    palette: {
        mode: 'light',
        primary: {
          main: '#AA5656',
        },
        secondary: {
          main: '#698269',
        },
        background: {
          default: '#F1DBBF',
          paper: '#fff',
        },
        divider: '#B99B6B',
      },
      typography: {
        fontFamily: 'Inter',    
      },
      shape: {
        borderRadius: 6,
      },
};
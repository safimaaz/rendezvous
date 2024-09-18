import { createTheme, ThemeOptions } from "@mui/material";

export const theme = createTheme({
    palette: {
        secondary: {
            light: '#9B51E0',
            main: '#783EAD',
            dark: '#432361',
        },
    },
    typography: {
        h1: {
            fontSize: '32px',
            lineHeight: '38px',
            fontWeight: 700,
            '@media (max-width:600px)': {
                fontSize: '24px',
                lineHeight: '28px'
            },   
        },
        h2: {
            fontSize: '24px',
            lineHeight: '30px',
            fontWeight: 700,
            '@media (max-width:600px)': {
                fontSize: '18px',
                lineHeight: '23px'
            },   
        },
        h5: {
            fontSize: '20px',
            lineHeight: '20px',
            fontWeight: 700   
        },
        h6: {
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: 700   
        },
        body1: {
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: 400   
        },
    }
} as ThemeOptions);

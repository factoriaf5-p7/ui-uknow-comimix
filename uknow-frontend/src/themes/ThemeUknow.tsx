import { createTheme } from "@mui/material";
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/500.css'
import '@mui/material/Typography'
// import React from 'react'

declare module '@mui/system/createTheme/createBreakpoints' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        desktop: true;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        heroText: true;
        footerText: true;
        joinTitle: true;
        inputLabel: true;
        accentText: true;
    }
}

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {    
        darkBlue?: PaletteColorOptions;
        lightBlue?: PaletteColorOptions;
        orange?: PaletteColorOptions;
    }
    interface Palette {    
        darkBlue?: PaletteColor;
        lightBlue?: PaletteColor;
        orange?: PaletteColor;
    }
}

export const SoundWaveTheme = createTheme({
    palette: {
        primary: {
            main: '#2F303A',
            light: 'dfds',
            dark: '484584'
        },
        background: {
            default: '#2F303A'
        },
        text: {
            primary: '#fff',
        },
        darkBlue: {
            main: "#124873"
        }
    },
    typography: () => ({
        fontFamily: 'Poppins',
        heroText: {
            fontSize: '2rem',
            fontWeight: 500
        },
        joinTitle: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: '3.5rem'
        },
        accentText: {
            fontFamily: ['Poppins'],
            color: '#bf3681'
        },
        inputLabel: {
            fontFamily: ['Poppins'],
            fontSize: '0.75rem',
            fontWeight: 700
        },
        footerText: {
            fontFamily: ['Poppins'],
            fontWeight: 700,
            fontSize: '0.85rem',
            color: '#fff'
        }
    }),
    breakpoints: {
        values: {
            mobile: 0,
            desktop: 750
        }
    }
})
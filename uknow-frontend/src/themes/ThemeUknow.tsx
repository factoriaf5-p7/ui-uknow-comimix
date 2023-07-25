import { PaletteColorOptions, Palette, createTheme, colors } from "@mui/material";
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/500.css'
import '@mui/material/Typography'

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

declare module '@mui/material/styles' {
    interface Palette {
      uDarkBlue: Palette;
    }
  
    interface PaletteOptions {
      uDarkBlue?: PaletteOptions;
    }
  }

export const UknowTheme = createTheme({
    palette: {
        primary: {
            main: '#ff0000'
        },
        secondary: {
            main: '#ff0000'
        },
        background: {
            default: '#2F303A'
        },
        text: {
            primary: '#fff',
        },
        uDarkBlue: {
            main: '#ff0000'
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
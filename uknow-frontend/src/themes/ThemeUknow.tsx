import { createTheme,PaletteColor, PaletteColorOptions } from "@mui/material/styles";
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/500.css'
import '@fontsource/mochiy-pop-one'
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
      uDarkBlue: PaletteColor;
      uLightBlue: PaletteColor;
      uBlue: PaletteColor;
      uOrange: PaletteColor;
      uGrey: PaletteColor;
    }
  
    interface PaletteOptions {
      uDarkBlue?: PaletteColorOptions;
      uLightBlue: PaletteColorOptions;
      uBlue: PaletteColorOptions;
      uOrange: PaletteColorOptions;
      uGrey: PaletteColorOptions;
    }
  }

export const UknowTheme = createTheme({
    
    palette: {
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#fff'
        },
        background: {
            default: '#EEEEEE'
        },
        text: {
            primary: '#000',
        },
        uDarkBlue: {
            main: '#124873'
        },
        uOrange: {
            main: '#DEA01E'
        },
        uLightBlue: {
            main: '#dbf2ff'
        },
        uBlue: {
            main: '#4f78a7'
        },
        uGrey: {
            main: '#eeeeee'
        }
    },
    typography: () => ({
        fontFamily: 'Poppins',
        uTitle: {
            fontFamily: ['Mochiy Pop One'],
            fontSize: '3rem',
            color: '#000'
        },
        uSubtitle: {
            fontFamily: ['Mochiy Pop One'],
            fontSize: '2rem',
        },
        uContent: {
            fontFamily: ['Poppins'],
            fontSize: '1.2rem',
            color: '#000'
        },
        uDescription: {
            fontFamily: ['Poppins'],
            fontSize: '1.5rem'
        },
        uButtonText: {
            fontFamily: ['Poppins'],
            fontSize: '0.85rem',
            color: '#000'
        }
    }),
    breakpoints: {
        values: {
            mobile: 300, 
            desktop: 960,
        }
    }
})

export const uColors = {
    uOrange: UknowTheme.palette.uOrange.main,
    uDarkBlue: UknowTheme.palette.uDarkBlue.main,
    uLightBlue: UknowTheme.palette.uLightBlue.main,
    uBlue: UknowTheme.palette.uBlue.main,
    uGrey: UknowTheme.palette.uGrey.main,
}
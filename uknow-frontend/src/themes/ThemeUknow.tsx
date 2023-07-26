import { createTheme } from "@mui/material";
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
      uLightBlue: Palette;
      uBlue: Palette;
      uOrange: Palette;
      uGrey: Palette;
    }
  
    interface PaletteOptions {
      uDarkBlue?: PaletteOptions;
      uLightBlue: PaletteOptions;
      uBlue: PaletteOptions;
      uOrange: PaletteOptions;
      uGrey: PaletteOptions;
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

export const uColors = {
    uOrange: UknowTheme.palette.uOrange.main,
    uDarkBlue: UknowTheme.palette.uDarkBlue.main,
    uLightBlue: UknowTheme.palette.uLightBlue.main,
    uBlue: UknowTheme.palette.uBlue.main,
    uGrey: UknowTheme.palette.uGray.main,
}
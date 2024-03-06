// React
import { useMemo } from 'react';

// Material-UI
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom Theme Components
import Palette from './palette';
import Typography from './typography';
import componentStyleOverrides from './compStyleOverride';

// This component customizes the theme of the application
export default function ThemeCustomization({ children }) {
    const fontFamily =  'Montserrat, sans-serif';
    const presetColor = '#03363D';

    const theme = useMemo(() => Palette(presetColor), [presetColor]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const themeTypography = useMemo(() => Typography(theme, fontFamily), [theme, fontFamily]);
    
    const themeOptions = useMemo(
        () => ({
            direction: 'rtl',
            palette: theme.palette,
            mixins: {
                toolbar: {
                    minHeight: '48px',
                    padding: '16px',
                    '@media (min-width: 600px)': {
                        minHeight: '48px'
                    }
                }
            },
            typography: themeTypography,
        }),
        [theme, themeTypography]
    );

    // Create the theme with the defined options
    const themes = createTheme(themeOptions);
    themes.components = useMemo(
        () => componentStyleOverrides(themes),
        [themes]
    );
    // Return the provider with the customized theme
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
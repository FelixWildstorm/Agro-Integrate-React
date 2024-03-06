

// Material-UI
import { createTheme } from '@mui/material/styles';

// assets
import defaultColor from '../assets/brand-color/scss/_themes-vars.module.scss';


const Palette = (presetColor) => {
    let colors;
    switch (presetColor) {
        case 'default':
        default:
            colors = defaultColor;
    }

    return createTheme({
        palette: {   
            primary: {
                main: colors.primaryMain,
            },
            secondary: {
                main: colors.secondaryMain,
            },
            error: {
                main: colors.errorMain,
            },
            warning: {
                main: colors.warningMain,
            }, 
        }
    });
};

export default Palette;

const Typography = (fontFamily) => ({
    fontFamily,
    h6: {
        fontFamily: 'Montserrat, sans-serif', 
        fontWeight: 500,
        color: "#03363D",
        fontSize: '0.75rem'
    },
    h5: {
        fontFamily: 'Montserrat, sans-serif', 
        fontSize: '0.875rem',
        color: "#03363D",
        fontWeight: 500
    },
    h4: {
        fontFamily: 'Montserrat, sans-serif', 
        fontSize: '1rem',
        color: "#03363D",
        fontWeight: 600
    },
    h3: {
        fontFamily: 'Montserrat, sans-serif', 
        fontSize: '1.25rem',
        color: "#03363D",
        fontWeight: 600
    },
    h2: {
        fontFamily: 'Montserrat, sans-serif', 
        fontSize: '1.5rem',
        color: "#03363D",
        fontWeight: 700
    },
    h1: {
        fontFamily: 'Montserrat, sans-serif', 
        fontSize: '2.125rem',
        color: "#03363D",
        fontWeight: 700
    },
    subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 500,
    },
    subtitle2: {
        fontSize: '0.75rem',
        color: "#03363D",
        fontWeight: 400,
    },
    caption: {
        fontSize: '0.75rem',
        fontWeight: 400
    },
    body1: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.334em'
    },
    body2: {
        letterSpacing: '0em',
        fontWeight: 400,
        lineHeight: '1.5em',
    },
    button: {
        textTransform: 'capitalize'
    },
});

export default Typography;

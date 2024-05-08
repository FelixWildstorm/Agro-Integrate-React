import React, { Fragment } from "react";

// Material-UI
import { Box, Button, Container, Grid } from "@mui/material";

// Slider Components 
import { SlideContent } from "./SliderComponents/SlideContent";
import { SlideSubTitle } from "./SliderComponents/SlideSubTitle";
import { SlideTitle } from "./SliderComponents/SlideTitle";
import { SliderThumb } from "./SliderComponents/SliderThumb";


export default function SlideOne(subTitle, title, content, thumb) {
    return (
        <Fragment>
            <Box>
                <Container>
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={7} xl={6} order={{ xs: 1, sm: 0, xl: 0 }}>
                            <SlideContent>
                                {subTitle && <SlideSubTitle>{subTitle}</SlideSubTitle>}
                                {title && <SlideTitle>{title}</SlideTitle>}
                                {content && <p>{content}</p>}
                                <Button variant="contained" size="large" color="primary" sx={{ mt: 3 }}>
                                    Get Started
                                </Button>
                            </SlideContent>
                            {thumb && (
                                <Grid item xs={12} sm={5} xl={6} order={{ xs: 0, sm: 1, xl: 1 }}>
                                    <SliderThumb>
                                        <img src={thumb} alt={title} width={540} height={458} />
                                    </SliderThumb>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    );
}


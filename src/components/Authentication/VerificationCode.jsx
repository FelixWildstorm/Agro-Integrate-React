
import React, { useState, useEffect } from 'react';

// Material-UI
import {
    Button,
    Box,
    Container,
    Card,
    CardHeader,
    CardContent,
    Stack,
    Typography,
    FormHelperText,
    TextField,
    Link
} from "@mui/material";

// Project Imports
import Timer from './SubComponents/Timer';

// Third party
import * as Yup from 'yup';
import { useFormik } from 'formik';


export default function Verification({
    handleNext,
    handleBack,
    userData,
}) {
    console.log('userData', userData);
    const [showLink, setShowLink] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLink(true);
        }, 20000); // 20 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        setShowLink(false);
        setTimeout(() => {
            setShowLink(true);
        }, 20000);
    };

    const initialValues = {
        code: ''
    };

    const validationSchema = Yup.object({
        code: Yup
            .string()
            .max(6)
            .required('Code is required')
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
                console.log('values', values);
                handleNext();
            } catch (error) {
                console.error(error);
                setStatus({ success: false });
                setErrors({ submit: error.message });
                setSubmitting(false);
            }
        }
    });

    return (
        <Box
            component="header"
            sx={{
                left: 0,
                position: 'fixed',
                right: 0,
                top: 0,
                zIndex: (theme) => theme.zIndex.appBar
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        height: {
                            xs: 560,
                            sm: 600,
                            md: 640,
                            lg: 680,
                            xl: 720
                        }
                    }}
                >
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            flex: '1 1 auto'
                        }}
                    >
                        <Container
                            maxWidth="sm"
                            sx={{
                                py: {
                                    xs: '60px',
                                    md: '120px'
                                }
                            }}
                        >
                            <Card elevation={16} sx={{ p: 3 }}>
                                <CardHeader
                                    subheader={(
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ mt: 1 }}
                                        >
                                            Una vez que ingreses el código que enviamos a  
                                            {" "}{userData?.email} &nbsp;habrá iniciado sesión.
                                            &nbsp;
                                        </Typography>
                                    )}
                                    sx={{ pb: 1 }}
                                    title="Código de verificación"
                                />
                                <CardContent>
                                    <form onSubmit={formik.handleSubmit}>
                                        <Stack spacing={3}>
                                            <Typography variant="subtitle2">
                                                Ingresa el código de verificación enviado a tu correo electrónico.
                                            </Typography>
                                            <TextField
                                                error={Boolean(formik.touched.code && formik.errors.code)}
                                                fullWidth
                                                helperText={formik.touched.code && formik.errors.code}
                                                label="Código de verificación"
                                                name="code"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                type="text"
                                                value={formik.values.code}
                                                variant="outlined"
                                            />
                                        </Stack>
                                        {formik.errors.submit && (
                                            <FormHelperText
                                                error
                                                sx={{ mt: 3 }}
                                            >
                                                {formik.errors.submit}
                                            </FormHelperText>
                                        )}
                                        <Button
                                            disabled={formik.isSubmitting}
                                            fullWidth
                                            size="large"
                                            sx={{ mt: 2 }}
                                            type="submit"
                                            variant="contained"
                                        >
                                            Continuar
                                        </Button>
                                    </form>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            mt: 3
                                        }}
                                    >
                                        <>
                                            <Typography variant="subtitle2">
                                            ¿No recibiste el código? &nbsp;
                                            </Typography>
                                            {showLink ? (
                                                <Link
                                                    color="textSecondary"
                                                    to="/"
                                                    underline="hover"
                                                    variant="subtitle2"
                                                    onClick={handleClick}
                                                >
                                                Reenviar codigo
                                                </Link>
                                            ) : <Timer />
                                            }
                                        </>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Container>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

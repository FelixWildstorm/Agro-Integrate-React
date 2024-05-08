import React from "react";
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
import { styled } from "@mui/material/styles";

// Project Imports
import ImageLogo from '../../assets/brand/agro_integrate_logo_green.png';

// Third party
import * as Yup from 'yup';
import { useFormik } from 'formik';


// Styled Components
const LogoIcon = styled('img')({
  marginRight: (theme) => theme.spacing(1),
  width: '80px',
  height: '80px',
});


export default function SignIn({
  handleNext,
  setUserData
}) {

  const initialValues = {
    email: '',
    submit: null
  };

  const validationSchema = Yup.object({
    email: Yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required')
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        console.log('values', values);
        setUserData(values);
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
                <Box
                  component={Link}
                  href="/"
                  sx={{
                    display: 'inline-flex',
                    height: "auto",
                    width: "auto"
                  }}
                >
                  <LogoIcon
                    src={ImageLogo}
                    alt="Logo"
                    style={{ width: '80%', height: '100%' }}
                  />
                </Box>
                <CardHeader
                  subheader={(
                    <Typography
                      color="text.secondary"
                      variant="body2"
                    >
                      ¿Aún no tienes cuenta?
                      &nbsp;
                      <Link
                        href="/signup"
                        underline="hover"
                        variant="subtitle2"
                        to="/register"
                      >
                        Regístrate
                      </Link>
                    </Typography>
                  )}
                  sx={{ pb: 0 }}
                  title="Inicia sesión"
                />
                <CardContent>
                  <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>
                      <Typography variant="subtitle2">
                        Inicia sesión con tu correo electrónico
                      </Typography>
                      <TextField
                        autoFocus
                        error={!!(formik.touched.email && formik.errors.email)}
                        fullWidth
                        helperText={formik.touched.email && formik.errors.email}
                        label="Correo electrónico"
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
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
                      Recibir código
                    </Button>
                  </form>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: 3
                    }}
                  >
                    <Link
                      color="textSecondary"
                      to="/"
                      underline="hover"
                      variant="subtitle2"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
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
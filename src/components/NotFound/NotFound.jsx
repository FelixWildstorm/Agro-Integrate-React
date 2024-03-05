import React from "react";
// Material UI 
import { Container, Grid, Link, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// Icons 
import StorageIcon from '@mui/icons-material/Storage';

const PageError = styled("div")`
  flex-grow: 1;
`;

const Header = styled("div")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(2, 0)};
`;

const HeaderLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

const NavIcon = styled("nav")`
  & .MuiSvgIcon-root {
    font-size: 2rem;
    margin-right: ${({ theme }) => theme.spacing(2)};
    color: #fff;
    text-decoration: none;
  }
`;

const Content = styled("div")`
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

const ErrorNumber = styled(Typography)`
  font-size: 5rem;
  font-weight: bold;
`;

const ErrorTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
`;

const ErrorText = styled(Typography)`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const BtnError = styled(Link)`
  text-decoration: none;
`;

export default function NotFound() {
  React.useEffect(() => {
    document.body.classList.remove("sidebar-show");
  }, []);

  return (
    <PageError>
      <Header>
        <Container>
          <HeaderLogo to="/">Agro Integrate</HeaderLogo>
        </Container>
      </Header>

      <Content>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={5} className="d-flex flex-column align-items-center">
              <ErrorNumber variant="h1">404</ErrorNumber>
              <ErrorTitle variant="h2">Page Not Found</ErrorTitle>
              <ErrorText variant="body1">
                Oopps. The page you were looking for doesn't exist. You may
                have mistyped the address or the page may have moved.
              </ErrorText>
              <BtnError to="/dashboard">
                <Button variant="contained" color="primary">
                  Back to Dashboard
                </Button>
              </BtnError>
            </Grid>
            <Grid item xs={8} lg={6}>
              <StorageIcon />
            </Grid>
          </Grid>
        </Container>
      </Content>
    </PageError>
  );
}
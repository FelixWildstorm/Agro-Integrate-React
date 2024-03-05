import React from 'react';
import { styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const StyledScrollbar = styled(SimpleBar)``;

const PerfectScroll = (props) => {
  return <StyledScrollbar {...props} />;
};

export default PerfectScroll;

/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '../atoms/Container/container';
import Image from '../atoms/Image/image';
import Typography from '../atoms/Typography/Typography';
import DATA from '../config/data';

export default () => {
  const useStyles = makeStyles({
    container: {
      justifyContent: 'center',
    },
    text: {
      justifyContent: 'center',
      height: 50,
    },
  });
  const classes = useStyles();
  return (
    <Container margin={100} width="90%" height={60}>
      <Grid
        justify="center"
        className={classes.container}
        container
        item
        xs={12}
      >
        <Grid xs={3}>
          <Image alt={DATA.APP_NAME} width={60} height={60} />
        </Grid>
        <Grid direction="column" className={classes.text} xs={8}>
          <Container width="100%" height="100%" margin={0}>
            <Typography title size={21}>
              {DATA.APP_NAME}
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Container margin={30} width="90%">
          <Typography size={17}>
              {DATA.DESCRIPTION}
          </Typography>
      </Container>
    </Container>
  );
};

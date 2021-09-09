import React from 'react';
import {Box, Card, CardContent, Typography} from '@material-ui/core';
import {useStyles} from './style';
import clsx from 'clsx';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


export const CostsCard = ({title, costs, date, behavior, isGoingWell}) => {
  const classes = useStyles();

  return (
    <Card elevation={3}>
      <CardContent className={classes.container}>
        <Typography variant="caption" color="textSecondary">{title}</Typography>
        <Box className={classes.content}>
          <Box className={classes.left}>
            <Typography variant="h6" color="textSecondary" className={classes.costs}>
              {costs}
            </Typography>
            <Typography variant="caption" color="textSecondary" className={classes.date}>
              {date}
            </Typography>
          </Box>

          <Box className={classes.right}>
            <Box className={clsx({
              [classes.goodBehavior]: true,
              [classes.badBehavior]: !isGoingWell,
            })}>
              <Typography variant="body2" color="textPrimary">
                {behavior}%
              </Typography>
              {
                isGoingWell ? <ArrowUpwardIcon className={classes.arrowIcon}/> :
                  <ArrowDownwardIcon className={classes.arrowIcon}/>
              }
            </Box>
            <Typography variant="caption" color="textSecondary">MoM</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
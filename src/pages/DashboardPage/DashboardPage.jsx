import React from 'react';
import {Box, Grid, Typography, Card, CardContent} from '@material-ui/core';
import {CostsCard} from '../../components/CostsCard';
import {Chart} from '../../components/Chart';
import {useStyles} from './style';
import {fakeTableData} from '../../helpers/DataForTable';
import {FakeCostsData} from '../../helpers/CostsCardData';
import {RevenueDetails} from '../../components/CustomTable';
import {useCubeQuery} from '@cubejs-client/react';
import {grossMargin} from '../../helpers/GraphQL/grossMarginLine';
import {revenueBar} from '../../helpers/GraphQL/revenueBar';

export const DashboardPage = () => {
  const classes = useStyles();
  const {
    resultSet: grossResult,
    isLoading: grossIsLoading,
    error: grossError,
    progress: grossProgress
  } = useCubeQuery(grossMargin);
  const {
    resultSet: revenueResult,
    isLoading: revenueIsLoading,
    error: revenueError,
    progress: revenueProgress
  } = useCubeQuery(revenueBar);
  if (grossIsLoading || revenueIsLoading) {
    return <div>Loading...</div>;
  }
  if (grossError || revenueError) {
    return <div>{grossError.toString()}</div>;
  }
  if (!grossResult || !revenueResult) {
    return null;
  }
  const grossDataSource = grossResult.tablePivot();
  const revenueDataSource = revenueResult.tablePivot();

  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h6" color="textSecondary">My Dashboard</Typography>
      </Box>
      <Box>
        <Grid container spacing={2} className={classes.cardsContainer}>
          {
            FakeCostsData.map(item => {
              return (
                <Grid
                  item
                  sm={12}
                  key={item.title}
                >
                  <CostsCard
                    title={item.title}
                    costs={item.costs}
                    date={item.date}
                    behavior={item.behavior}
                    isGoingWell={item.isGoingWell}
                  />
                </Grid>
              )
            })
          }
        </Grid>
        <Grid m={1} container spacing={2} className={classes.generalInfoContainer}>
          <Grid item sm={6} className={classes.chartsContainer}>
            <Box mb={2}>
              <Chart
                id={'costsOfGoods'}
                isLoading={grossIsLoading}
                chartName={'Revenue & Cost of Goods'}
                lineData={grossDataSource}
                columnData={revenueDataSource}
              />
            </Box>
            <Chart
              id={'grossMargin'}
              isLoading={revenueIsLoading}
              chartName={'Revenue & Gross Margin'}
              lineData={grossDataSource}
              columnData={revenueDataSource}
            />
          </Grid>
          <Grid item sm={6} className={classes.listContainer}>
            <Card elevation={3}>
              <CardContent>
                <RevenueDetails columnData={fakeTableData.columnData} rowData={fakeTableData.rowData}/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
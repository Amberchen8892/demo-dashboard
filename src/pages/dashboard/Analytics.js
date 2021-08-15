import { useEffect, useState, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import {
  AnalyticsGeneralOverview,
  // AnalyticsMostVisitedPages,
  AnalyticsSocialMediaSources,
  // AnalyticsVisitsByCountry,
  //  AnalyticsTrafficSources,
} from '../../components/dashboard/analytics';
import useSettings from '../../hooks/useSettings';
// import ChevronDownIcon from '../../icons/ChevronDown';
import ChevronRightIcon from '../../icons/ChevronRight';
// import DownloadIcon from '../../icons/Download';
import gtm from '../../lib/gtm';
import AnalyticsClosedOpen from '../../components/dashboard/analytics/AnalyticsClosedOpen';
import { CustomerListTable } from '../../components/dashboard/customer';
// import CustomerNew from '../../components/dashboard/customer/CustomerNew';
// import AnalyticsRevenue from '../../components/dashboard/analytics/AnalyticsRevenue';
import useMounted from '../../hooks/useMounted';
import { customerApi } from '../../__fakeApi__/customerApi';

const Analytics = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);
  const getCustomers = useCallback(async () => {
    try {
      const data = await customerApi.getCustomers();

      if (mounted.current) {
        setCustomers(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);
  const customersForAnalytic = customers.filter((c) => c.status === 'Created');
  console.log(customersForAnalytic);
  return (
    <>
      <Helmet>
        <title>Dashboard: Analytics | Wype</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8,
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Analytics
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Analytics
                </Typography>
              </Breadcrumbs>
            </Grid>
            {/* <Grid item>
              <Button
                endIcon={<DownloadIcon fontSize="small" />}
                variant="outlined"
              >
                Export
              </Button>
              <Button
                color="primary"
                endIcon={<ChevronDownIcon fontSize="small" />}
                sx={{ ml: 2 }}
                variant="contained"
              >
                Last month
              </Button>
            </Grid> */}
          </Grid>
          <Box sx={{ py: 3 }}>
            <AnalyticsGeneralOverview />
          </Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xl={9}
              md={8}
              xs={12}
            >
              <AnalyticsClosedOpen sx={{ height: '100%' }} />
              {/* <AnalyticsVisitsByCountry /> */}
            </Grid>
            <Grid
              item
              xl={3}
              md={4}
              xs={12}
            >
              {/* <AnalyticsVisitsByCountry /> */}
              <AnalyticsSocialMediaSources />
            </Grid>
            <Grid
              item
              xl={12}
              md={12}
              xs={12}
            >
              <CustomerListTable customers={customersForAnalytic} />
              {/* <CustomerNew customers={customers} /> */}

            </Grid>
            {/* <Grid
              item
              xl={3}
              md={4}
              xs={12}
            >
              <AnalyticsSocialMediaSources />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Analytics;

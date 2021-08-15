import { useCallback, useState, useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core';
import { customerApi } from '../../__fakeApi__/customerApi';
import {
  CustomerContactDetails,
  // CustomerDataManagement,
  CustomerTimelineContainer,
  CustomerInvoices,
  CustomerInvoicesSummary,
  CustomerLogs
} from '../../components/dashboard/customer';
import useMounted from '../../hooks/useMounted';
import ChevronRightIcon from '../../icons/ChevronRight';
// import PencilAltIcon from '../../icons/PencilAlt';
import gtm from '../../lib/gtm';
import useSettings from '../../hooks/useSettings';
import Map from '../../components/dashboard/googleMap/Map';

const tabs = [
  { label: 'Details', value: 'details' },
  // { label: 'Invoices', value: 'invoices' },
  // { label: 'Logs', value: 'logs' }
];

const CustomerDetails = (props) => {
  console.log('check props', props);
  const mounted = useMounted();
  const { settings } = useSettings();
  // const [customer, setCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [currentTab, setCurrentTab] = useState('details');
  const checkId = useParams();
  console.log('check id', checkId.customerId);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);
  // get customer list to add find function
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

  // find the customer with id
  const customer = customers.find((c) => c.id === checkId.customerId);

  // const getCustomer = useCallback(async () => {
  //   try {
  //     const data = await customerApi.getCustomer();

  //     if (mounted.current) {
  //       setCustomer(data);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [mounted]);

  // useEffect(() => {
  //   getCustomer();
  // }, [getCustomer]);

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  if (!customer) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard: Customer Details | Wype</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
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
                {customer.name}
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
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Management
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Customers
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item>
              {/* <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  component={RouterLink}
                  startIcon={<PencilAltIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  to="/dashboard/customers/1/edit"
                  variant="contained"
                >
                  Edit
                </Button>
              </Box> */}
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box sx={{ mt: 3 }}>
            {currentTab === 'details' && (
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  // lg={settings.compact ? 6 : 4}
                  lg={12}
                  md={12}
                  // xl={settings.compact ? 6 : 3}
                  xl={12}
                  xs={12}
                >
                  <CustomerTimelineContainer customer={customer} />
                </Grid>
                <Grid
                  item
                  lg={settings.compact ? 6 : 4}
                  md={6}
                  xl={settings.compact ? 6 : 3}
                  xs={12}
                >
                  <CustomerContactDetails
                    address1={customer.address1}
                    address2={customer.address2}
                    country={customer.country}
                    email={customer.email}
                    isVerified={customer.isVerified}
                    phone={customer.phone}
                    state={customer.state}
                    zipCode={customer.zipCode}
                    city={customer.city}
                    link={customer.link}
                  />
                </Grid>
                <Grid
                  item
                  lg={settings.compact ? 6 : 4}
                  md={6}
                  xl={settings.compact ? 6 : 3}
                  xs={12}
                >
                  <CustomerInvoicesSummary />
                </Grid>
                <Grid
                  item
                  // lg={settings.compact ? 6 : 4}
                  lg={12}
                  md={6}
                  // xl={settings.compact ? 6 : 3}
                  xl={12}
                  xs={12}
                >
                  {/* <CustomerInvoicesSummary /> */}
                  <Map
                    address1={customer.address1}
                    address2={customer.address2}
                    state={customer.state}
                    zipCode={customer.zipCode}
                    city={customer.city}
                  />
                </Grid>
              </Grid>
            )}
            {currentTab === 'invoices' && <CustomerInvoices />}
            {currentTab === 'logs' && <CustomerLogs />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerDetails;

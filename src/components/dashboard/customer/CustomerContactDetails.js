import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
  Button,
  Typography
} from '@material-ui/core';
// import LockIcon from '../../../icons/Lock';
// import UserIcon from '../../../icons/User';
import DirectionsIcon from '@material-ui/icons/Directions';
import Label from '../../Label';

const CustomerContactDetails = (props) => {
  const { zipCode, address1, address2, country, email, isVerified, phone, state, city, link, ...other } = props;
  return (
    <Card {...other}>
      <CardHeader title="Contact Details" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {email}
              </Typography>
              <Label color={isVerified ? 'success' : 'error'}>
                {isVerified ? 'Email verified' : 'Email not verified'}
              </Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Phone
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {phone}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Country
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {country}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                State/Region
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {state}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                City
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {city}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Address 1
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {address1}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Address 2
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {address2}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Zipcode
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {zipCode}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          p: 1
        }}
      >
        <Button
          color="inherit"
          startIcon={<DirectionsIcon fontSize="small" />}
          variant="text"
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Get There
          </a>
        </Button>
      </Box>
    </Card>
  );
};

CustomerContactDetails.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  country: PropTypes.string,
  email: PropTypes.string.isRequired,
  isVerified: PropTypes.bool.isRequired,
  phone: PropTypes.string,
  state: PropTypes.string
};

export default CustomerContactDetails;

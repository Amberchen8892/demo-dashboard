// import { useState, useCallback, useEffect } from 'react';
// import { format } from 'date-fns';
import {
  // Box,
  // Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  // Table,
  // TableBody,
  // TableCell,
  // TableRow,
  // TextField,
  // Typography
} from '@material-ui/core';
import CustomerProgress from './CustomerProgress';

const CustomerTimelineContainer = ({ customer }) => (
  <Card>
    <CardHeader title="Customer's Timeline" />
    <Divider />
    <CardContent>
      <CustomerProgress customer={customer} />
    </CardContent>
  </Card>
);

export default CustomerTimelineContainer;

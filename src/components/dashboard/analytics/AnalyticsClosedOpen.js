import Chart from 'react-apexcharts';
import { Box, Card, CardContent, CardHeader } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const AnalyticsClosedOpen = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    colors: ['rgba(204, 204, 204, 0.8)', '#12ae6d'],
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: theme.palette.divider,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      labels: {
        colors: theme.palette.text.secondary
      },
      show: true
    },
    plotOptions: {
      bar: {
        columnWidth: '40%'
      }
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: theme.palette.divider
      },
      axisTicks: {
        show: true,
        color: theme.palette.divider
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const chartSeries = [
    {
      data: [23, 12, 24, 11, 22, 6, 21, 9, 16, 23, 20, 8],
      name: 'Open'
    },
    {
      data: [20, 15, 25, 35, 29, 3, 17, 8, 21, 18, 23, 36],
      name: 'Closed'
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default'
      }}
    >
      <Card>
        <CardHeader title="Sales" />
        <CardContent>
          <Chart
            height={300}
            options={chartOptions}
            series={chartSeries}
            type="bar"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default AnalyticsClosedOpen;

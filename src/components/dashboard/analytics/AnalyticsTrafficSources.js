import { useState } from 'react';
import Chart from 'react-apexcharts';
import { Box, Card, CardHeader, Checkbox, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// import InformationCircleIcon from '../../../icons/InformationCircle';

const data = {
  series: [
    {
      color: 'rgba(204, 204, 204, 0.8)',
      type: 'line',
      data: [500, 520, 540, 580, 600, 630, 650, 680, 700, 720, 740, 780],
      name: 'Your Score'
    },
    {
      color: '#4CAF50',
      type: 'area',
      data: [650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650],
      name: 'Target Score'
    },
    // {
    //   color: 'rgba(204, 204, 204)',
    //   type: 'line',
    //   data: [20, 20, 40, 20, 30, 20, 30, 20, 20, 20, 40],
    //   name: 'Diff'
    // }
  ],
  xaxis: {
    dataPoints: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  }
};
const scoreA = data.series[0].data;
const newA = [];
function diff(ary) {
  for (let i = 1; i < ary.length; i++) newA.push(ary[i] - ary[i - 1]);
  return newA;
}
console.log(newA);
diff(scoreA);

const AnalyticsTrafficSources = (props) => {
  const theme = useTheme();
  const [selectedSeries, setSelectedSeries] = useState([
    'Your Score',
    // 'Diff',
    'Target Score'
  ]);

  const handleChange = (event, name) => {
    if (!event.target.checked) {
      setSelectedSeries(selectedSeries.filter((item) => item !== name));
    } else {
      setSelectedSeries([...selectedSeries, name]);
    }
  };

  const chartSeries = data.series.filter((item) => selectedSeries.includes(item.name));

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: chartSeries.map((item) => item.color),
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'solid',
      opacity: [0.35, 0.2],
    },
    grid: {
      borderColor: theme.palette.divider,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      show: false
    },
    markers: {
      hover: {
        size: undefined,
        sizeOffset: 2
      },
      radius: 2,
      shape: 'circle',
      size: 4,
      strokeWidth: 0
    },
    stroke: {
      curve: 'smooth',
      lineCap: 'butt',
      width: 3
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: data.xaxis.dataPoints,
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: [
      // {
      //   axisBorder: {
      //     color: theme.palette.divider,
      //     show: true
      //   },
      //   axisTicks: {
      //     color: theme.palette.divider,
      //     show: true
      //   },
      //   labels: {
      //     style: {
      //       colors: theme.palette.text.secondary
      //     }
      //   }
      // },
      {
        axisTicks: {
          color: theme.palette.divider,
          show: true
        },
        axisBorder: {
          color: theme.palette.divider,
          show: true
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        },
        opposite: true
      }
    ]
  };

  return (
    <Card {...props}>
      <CardHeader
        disableTypography
        title={(
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              color="textPrimary"
              variant="p"
            >
              Last Updated On Agust,2021
            </Typography>
            {/* <Tooltip title="Widget25 Source by channel">
              <InformationCircleIcon fontSize="small" />
            </Tooltip> */}
          </Box>
        )}
      />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          px: 2
        }}
      >
        {data.series.map((item) => (
          <Box
            key={item.name}
            sx={{
              alignItems: 'center',
              display: 'flex',
              mr: 2
            }}
          >
            <Checkbox
              checked={selectedSeries.some((visibleItem) => visibleItem === item.name)}
              color="primary"
              onChange={(event) => handleChange(event, item.name)}
            />
            <Box
              sx={{
                backgroundColor: item.color,
                borderRadius: '50%',
                height: 8,
                ml: 1,
                mr: 2,
                width: 8
              }}
            />
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Chart
        height="393"
        options={chartOptions}
        series={chartSeries}
        type="line"
      />
    </Card>
  );
};

export default AnalyticsTrafficSources;

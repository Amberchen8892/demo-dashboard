import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

import { useTheme } from '@material-ui/core/styles';
// import { fontSize } from '@material-ui/system';
// import { CardContent, Card } from '@material-ui/core';

const ScoreChart = ({ score }) => {
  console.log(score);
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: [function getColor() {
      if (`${score}` <= 50) {
        return '#F3411A';
      } if (`${score}` > 50 && `${score}` <= 90) {
        return '#F3D91A';
      } return '#12ae6d';
    }],
    labels: [''],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
          },
          value: {
            color: theme.palette.text.secondary,
            show: true
          }
        },
        hollow: {
          size: '20%'
        },
        track: {
          background: theme.palette.background.default
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  };
  const chartSeries = [`${score}`];

  return (
    <Chart
      height="100"
      series={chartSeries}
      options={chartOptions}
      type="radialBar"
      width="100"
    />
  );
};
ScoreChart.propTypes = {
  score: PropTypes.node.isRequired
};
export default ScoreChart;

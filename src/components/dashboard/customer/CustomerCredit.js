// import { useState } from 'react';
// import Chart from 'react-apexcharts';
// import { Box, Card, CardHeader, Checkbox, Tooltip, Typography } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
// import InformationCircleIcon from '../../../icons/InformationCircle';
// const data = {
//     series: [
//       {
//         color: '#4CAF50',
//         data: [
//           3350,
//           1840,
//           2254,
//           5780,
//           9349,
//           5241,
//           2770,
//           2051,
//           3764,
//           2385,
//           5912,
//           8323
//         ],
//         name: 'Organic'
//       },
//     ],
//     xaxis: {
//       dataPoints: [
//         '01 Jan',
//         '02 Jan',
//         '03 Jan',
//         '04 Jan',
//         '05 Jan',
//         '06 Jan',
//         '07 Jan',
//         '08 Jan',
//         '09 Jan',
//         '10 Jan',
//         '11 Jan',
//         '12 Jan'
//       ]
//     }
//   };
//   const chartOptions = {
//     chart: {
//       background: 'transparent',
//       stacked: false,
//       toolbar: {
//         show: false
//       }
//     },
//     colors: 'green',
//     dataLabels: {
//       enabled: false
//     },
//     grid: {
//       borderColor: theme.palette.divider,
//       xaxis: {
//         lines: {
//           show: true
//         }
//       },
//       yaxis: {
//         lines: {
//           show: true
//         }
//       }
//     },
//     legend: {
//       show: false
//     },
//     markers: {
//       hover: {
//         size: undefined,
//         sizeOffset: 2
//       },
//       radius: 2,
//       shape: 'circle',
//       size: 4,
//       strokeWidth: 0
//     },
//     stroke: {
//       curve: 'smooth',
//       lineCap: 'butt',
//       width: 3
//     },
//     theme: {
//       mode: theme.palette.mode
//     },
//     xaxis: {
//       axisBorder: {
//         color: theme.palette.divider
//       },
//       axisTicks: {
//         color: theme.palette.divider,
//         show: true
//       },
//       categories: data.xaxis.dataPoints,
//       labels: {
//         style: {
//           colors: theme.palette.text.secondary
//         }
//       }
//     },
//     yaxis: [
//       {
//         axisBorder: {
//           color: theme.palette.divider,
//           show: true
//         },
//         axisTicks: {
//           color: theme.palette.divider,
//           show: true
//         },
//         labels: {
//           style: {
//             colors: theme.palette.text.secondary
//           }
//         }
//       },
//       {
//         axisTicks: {
//           color: theme.palette.divider,
//           show: true
//         },
//         axisBorder: {
//           color: theme.palette.divider,
//           show: true
//         },
//         labels: {
//           style: {
//             colors: theme.palette.text.secondary
//           }
//         },
//         opposite: true
//       }
//     ]
//   };
//   const ShowCredit = ()=>{
//       return (

//         <Chart
//          height="393"
//          options={chartOptions}
//          series={data.series}
//          type="line"
//         />

//       );
//   };
//   export default ShowCredit

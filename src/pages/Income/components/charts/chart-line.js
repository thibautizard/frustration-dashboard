import HighchartsReact from 'highcharts-react-official'
import Highcharts from '@config/highcharts.config'
import { events } from './events'

export function ChartLine({ type, series, period='month' }) {

  let dateFormat;

  switch(period) {
    case 'month':
      dateFormat = '{value: %b %Y}';
    case 'day':
      dateFormat = '{value: %e/%m}'
  }


  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: dateFormat
      },
      title: {
        text: ''
      },
      plotLines: events
    },
    yAxis: [
      {
        labels: {
          format: `{value} ${type}`
        },
        title: {
          text: ''
        },
        gridLineWidth: 0
      },
      {
        gridLineWidth: 0,
        labels: {
          format: '{value}€'
        },
        title: {
          text: ''
        },
        opposite: true
      }
    ],

    series: series
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    ></HighchartsReact>
  )
}

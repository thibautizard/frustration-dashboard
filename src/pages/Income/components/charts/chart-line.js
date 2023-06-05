import HighchartsReact from 'highcharts-react-official'
import Highcharts from '@config/highcharts.config'
import { events } from './events'

export function ChartLine({ type, series }) {
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
        format: '{value: %b %Y}'
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

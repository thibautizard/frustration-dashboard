import Panel from '../components/Panel'
import { ChartLine } from '../components/charts/chart-line'
import { useOutletContext } from 'react-router-dom'
import { ChartColumn } from '../components/charts/panel-column'
import { tidy, summarize, groupBy, sum } from '@tidyjs/tidy'

export default function Subscription() {
  let { data } = useOutletContext()

  if (data) {
    data = data.filter((row) => row.type === 'subscription')
    data = tidy(
      data,
      groupBy(['created', 'source'], [summarize({ net: sum('net') })])
    )
  }

  const series = [
    {
      name: 'HelloAsso',
      yAxis: 1,
      color: '#4AD28A',
      data: data
        .filter((row) => row.source === 'helloasso')
        .map((cv) => [new Date(cv.created).getTime(), cv.net]),
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        xDateFormat: '%B %Y',
        valueSuffix: ' €'
      },
      showInLegend: true
    },

    {
      name: 'Stripe',
      yAxis: 1,
      color: '#515EE1',
      data: data
        .filter((row) => row.source === 'stripe')
        .map((cv) => [new Date(cv.created).getTime(), cv.net]),
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        valueSuffix: ' €',
        xDateFormat: '%B %Y'
      },
      showInLegend: true
    }
  ]

  return (
    <>
      <Panel label="abonnements" icon="🙆‍♂️" data={data}>
        <ChartColumn type="abonnements" data={data} />
      </Panel>
      <ChartLine type="abonnés" series={series} />
    </>
  )
}

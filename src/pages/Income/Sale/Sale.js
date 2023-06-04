import Panel from "../components/Panel";
import { ChartLine } from '../components/charts/chart-line'
import { useOutletContext } from "react-router-dom";

export default function Sale() {
  let { data } = useOutletContext();
  const type = "sale";
  data = data.filter((row) => row.type === type)

  const series = [
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
      <Panel type={type} data={data} />
      <ChartLine type={type} series={series} />
    </>
  )
}

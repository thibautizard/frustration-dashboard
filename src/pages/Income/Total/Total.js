import Panel from "../components/Panel";
import { ChartLine } from '../components/charts/chart-line'
import { useOutletContext } from "react-router-dom";
import { tidy, groupBy, sum, summarize } from '@tidyjs/tidy'


export default function Total() {
  let { data } = useOutletContext();
  const type = "total";
  if(data) {
    data = data.filter((row) => ['subscription', 'donation', 'sale'].includes(row.type))
    data = tidy(
      data,
      groupBy('created', [
        summarize({ net: sum('net') })
      ])
    )
    }

  return (
    <>
      <Panel type={type} data={data} />

    </>
  )
}

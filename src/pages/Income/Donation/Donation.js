import Panel from "../components/Panel";
import { ChartLine } from '../components/charts/chart-line'
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import styled from "styled-components";
import { useDonation } from "@hooks";

export default function Donation() {
  let { data } = useOutletContext();
  const donationInfo = useDonation()?.['0'];
  const type = "donation";
  data = data.filter((row) => row.type === type)

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
      <Panel type={type} data={data} />
      <CardsContainer>
        <Card title="Don max"  icon="⬆︎">{donationInfo?.max}€</Card>
        <Card title="Don min" icon="⬇︎">{donationInfo?.min}€</Card>
        <Card title="Don moyen" icon="∑">{donationInfo?.mean}€</Card>
        <Card title="Don médian" icon="↹">{donationInfo?.median}€</Card>
      </CardsContainer>
      <ChartLine type={type} series={series} />
    </>
  )
}

const CardsContainer = styled(({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
})`
display:flex;
gap:clamp(20px, 4vw, 30px);
& > * {
  flex-grow:1;
  flex-basis: 300px;
}
`

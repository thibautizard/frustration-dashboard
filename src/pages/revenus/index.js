import React from 'react'
import styled from 'styled-components'
import { Tabs } from './components/Tabs'
import useIncome from './hooks/useIncome'
import Panel from './components/Panel'
import { ChartLine } from './charts/line'
import { useLocation } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import supabase from '../../config/supabaseClient'

const Revenus = styled(({ className }) => {
  const type = useLocation().pathname.match(/[^/]+$/g)[0]

  let { data, isLoading, error } = useQuery({
    queryKey: ['income'],
    queryFn: async (type) => {
      let { data, error } = await supabase.rpc('total_by_month')
      if (error) console.error(error)
      return data
    }
  })

  if (data) data = data.filter((row) => row.type === type)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data</div>
  }

  return (
    <div className={className}>
      <Tabs />
      <Panel type={type} data={data} />
      <ChartLine type={type} data={data} />
    </div>
  )
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  overflow: visible;

  .charts-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    & > *:first-child {
      flex-basis: 0px;
      flex-grow: 1;
    }

    & > *:last-child {
      flex-basis: 0px;
      flex-grow: 1;
    }
  }

  .secondary-charts {
    display: flex;
    justify-content: space-between;

    .highcharts-container {
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: 30%;
    }
  }
`

export default Revenus

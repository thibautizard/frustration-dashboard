import { useQuery } from '@tanstack/react-query'
import supabase from '../../../config/supabaseClient'

export function useLastUpdate() {
  let { data: lastUpdate, isLoading: isLoadingLastUpdate } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .limit(1)
        .order('date', { ascending: false })
      if (error) throw new Error(error);
      return data[0].date
    }
  })

  return { lastUpdate, isLoadingLastUpdate }
}

import supabase from "@config/supabaseClient"
import { useQuery } from "@tanstack/react-query"

export function useIncome() {
  let query = useQuery({
    queryKey: ['income'],
    queryFn: async () => {
      let { data, error } = await supabase.rpc('total_by_month')
      if (error) console.error(error)
      return data
    }
  })

  return query
}

export function useDonation() {
  let { data, isLoading, error} = useQuery({
    queryKey: ['donation'],
    queryFn: async() => {
      let { data, error } = await supabase.rpc("donation_info")
      return data
    }
  })

  return data
}
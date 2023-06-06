export function getLastMonth(str) {
  const selectedDate = new Date(str)

  const lastMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1
  )

  const options = { month: 'long', timeZone: 'UTC' }
  let lastMonthName = lastMonth.toLocaleString('fr-FR', options)
  lastMonthName =
    lastMonthName.slice(0, 1).toUpperCase() + lastMonthName.slice(1)

  return `${lastMonthName} ${selectedDate.getFullYear()}`
}

export function getMonthEvolution(current, previous) {
  let evolution = ''
  console.log(evolution)
  console.log(current)
  console.log(previous)
  if (previous) {
    let percent = ((current - previous) / current) * 100
    percent = Math.trunc(percent * 100) / 100
    evolution = percent > 0 ? `+${percent}%` : `${percent}%`
  }
  return evolution
}

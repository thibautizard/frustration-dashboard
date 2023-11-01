import badges from '../data/badges.json'

export function retrieveUserBadge(selectedUserId) {
  return badges.find(({ userId }) =>
    userId === (selectedUserId ?? 'default')
  )
}

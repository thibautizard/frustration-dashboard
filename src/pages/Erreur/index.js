import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Cette page n'existe pas</h1>
      <p>L'erreur suivante a été renvoyée : </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default Error

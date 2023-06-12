import './style.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Error() {
  useEffect(() => {
    document.title = 'Kasa - Error'
  }, [])

  return (
    <main className="container-error">
      <div className="number-error">404</div>
      <div className="message-error">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link className="link-error" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default Error

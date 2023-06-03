import React from 'react'
import styled from 'styled-components'

const Accueil = styled(({ className }) => (
  <div className={className}>
    <h2>
      Bienvenue sur le dashboard de Frustration <br />
      <span class="hand">👋</span>
    </h2>
    <p>
      Pour accéder aux données financières, rendez vous dans l'onglet "Revenus".
      Les bases de données sont mises à jour manuellement (voir la date en bas à
      gauche au-dessus du badge utilisateur) et jusqu'au mois précédent.
    </p>
  </div>
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 700px;
  margin: auto;
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
  }
  p {
    font-size: 1.5rem;
  }

  @keyframes handwave {
    from {
      rotate: 0deg;
    }

    to {
      rotate: 20deg;
    }
  }

  .hand {
    display: inline-block;
    animation: handwave 0.7s alternate infinite;
  }
`

export default Accueil

import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";

const Accueil = styled(({ className }) => (
  <div className={className}>
    <h2>
      Bienvenue sur le dashboard de Frustration <br />
      👋
    </h2>
    <p>
      Bon, il n'y a pas grand-chose pour l'instant 😔 il s'agit juste de
      vérifier que le système d'authentification fonctionne (vous devriez voir
      le badge en bas à gauche avec votre prénom) et que la navigation dans les
      liens de la barre latérale ne déclenche pas d'erreur. Faites-moi un retour
      si l'une de ces conditions n'est pas remplie.
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
`;

export default Accueil;

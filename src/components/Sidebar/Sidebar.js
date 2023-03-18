import { useState } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pp_redaction from "./pp_redaction.png";
import { useSession } from "../../hooks/useSession";
import menus from "./menus.json";
import badges from "./badges.json";

const Sidebar = styled(({ className }) => {
  const session = useSession();
  let user;
  if (session) {
    user = badges.filter((badge) => badge.id === session.user.id)[0];
  }

  return (
    <aside className={className}>
      {/* <Arrow /> */}
      <Menus>
        {menus.map(({ text, icon, link }, index) => (
          <Menu icon={icon} text={text} link={link} index={index} />
        ))}
      </Menus>
      <Badge
        name={user?.first_name}
        image_url={
          user
            ? require(`../../img/pp/${user?.id}.${user?.image_extension}`)
            : require("./pp_redaction.png")
        }
      />
    </aside>
  );
})`
  --container-shadow: 0px 7px 29px 0px rgba(0, 0, 0, 0.2);
  --bg-color: #000000;
  --bg-color-hover: #191a00;
  --color: #fff200;

  background-color: var(--bg-color);
  color: var(--color);
  fill: var(--color);
  box-sizing: border-box;
  box-shadow: var(--container-shadow);
  font-family: Poppins;
  width: 220px;
  height: 100%;
  padding: 0 15px;
  padding-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Badge = styled(({ className, name, image_url }) => (
  <div className={className}>
    <img src={image_url} />
    <div className="infos">
      <span>{name || "Rédaction"}</span>
      <small>ADMIN</small>
    </div>
  </div>
))`
  border: 1px solid var(--bg-color-hover);
  border-radius: 2em;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: var(--color);
  color: var(--bg-color);
  gap: 10px;
  img {
    border-radius: 100%;
    height: 33px;
  }

  .infos {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 600;
    }

    small {
      font-size: 0.5rem;
    }
  }
`;

const Arrow = styled(({ className }) => (
  <div className={className} onClick={() => setOpen((prevOpen) => !prevOpen)}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  </div>
))`
  width: 20px;
  height: 20px;
  background-color: var(--color);
  border-radius: 100%;
  position: absolute;
  top: 0;
  right: 0;
  translate: 50% 10px;
  box-shadow: var(--container-shadow);
  display: grid;
  place-items: center;
  cursor: pointer;

  svg {
    width: 70%;
    height: 70%;
  }
`;

const Menu = styled(({ className, icon, text, link, index }) => (
  <li className={className}>
    <Link to={link}>
      {parse(icon)}
      {text}
    </Link>
    <hr />
  </li>
))`

    a {
        margin: 0;
        margin-block: 0;
        margin-inline: 0;
        padding: padding-inline:0;
        padding: 12px 20px;
        border-radius:4px;
        font-size:1em;
        display: flex;
        gap:10px;
        font-weight:300;
        transition: .2s linear;
        margin-bottom:5px;

    &:hover, &.selected {
        background-color:var(--bg-color-hover) ;
        cursor:pointer;
    }

    }

    svg {
        width:1em;
        fill:inherit;
    }




  hr {
    border-color:var(--bg-color-hover);
    opacity:.6;
  }
`;

const Menus = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default Sidebar;

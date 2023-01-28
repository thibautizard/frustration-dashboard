import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pp_redaction from "./pp_redaction.png";
import { useSession } from "../../hooks/useSession";

const menus = [
  {
    text: "Paiements",
    link: "/paiements",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z" />
      </svg>
    ),
  },

  {
    text: "Audiences",
    link: "",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
      </svg>
    ),
  },

  {
    text: "Labo",
    link: "",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M175 389.4c-9.8 16-15 34.3-15 53.1c-10 3.5-20.8 5.5-32 5.5c-53 0-96-43-96-96V64C14.3 64 0 49.7 0 32S14.3 0 32 0H96h64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32V309.9l-49 79.6zM96 64v96h64V64H96zM352 0H480h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V214.9L629.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H261.4c-38.3 0-69.4-31.1-69.4-69.4c0-12.8 3.6-25.4 10.3-36.4L320 214.9V64c-17.7 0-32-14.3-32-32s14.3-32 32-32h32zm32 64V224c0 5.9-1.6 11.7-4.7 16.8L330.5 320h171l-48.8-79.2c-3.1-5-4.7-10.8-4.7-16.8V64H384z" />
      </svg>
    ),
  },
];

const Sidebar = styled(({ className }) => {
  const session = useSession();
  let name = "Rédaction";
  if (session) name = session.user.user_metadata.first_name;

  return (
    <aside className={className}>
      {/* <Arrow /> */}
      <Menus>
        {menus.map(({ text, icon, link }, index) => (
          <Menu icon={icon} text={text} link={link} index={index} />
        ))}
      </Menus>
      <Badge name={name} />
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
  width: 200px;
  height: 100%;
  padding: 0 15px;
  padding-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Badge = styled(({ className, name }) => (
  <div className={className}>
    <img src={pp_redaction} />
    <span>{name}</span>
  </div>
))`
  border: 1px solid var(--bg-color-hover);
  border-radius: 2em;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: var(--color);
  color: var(--bg-color);
  gap: 7px;
  img {
    border-radius: 100%;
    height: 30px;
  }
  span {
    font-weight: 600;
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
      {icon}
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

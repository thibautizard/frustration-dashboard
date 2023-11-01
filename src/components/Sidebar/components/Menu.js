import styled from 'styled-components';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export const Menu = styled(({ className, icon, text, link, key }) => (
  <li className={className} key={key}>
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
    line-height: 110%;
    padding: clamp(7px, 0.7vw, 16px) 40px clamp(7px, 0.7vw, 16px)
      clamp(14px, 0.9vw, 22px);
    border-radius: 4px;
    font-size: clamp(12px, 0.9vw, 20px);
    display: flex;
    gap: clamp(5px, 0.8vw, 8px);
    font-weight: 300;
    transition: 0.2s linear;
    margin-bottom: 5px;
    white-space: nowrap;

    &:hover,
    &.selected {
      background-color: var(--bg-color-hover);
      cursor: pointer;
    }
  }

  svg {
    width: 1em;
    fill: inherit;
  }

  hr {
    border-color: var(--bg-color-hover);
    opacity: 0.6;
  }
`

export const Menus = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useSession from '../../hooks/use-session.hook'
import menus from './menus.json'
import badges from './badges.json'
import { useQuery } from '@tanstack/react-query'
import supabase from '../../config/supabaseClient'
const Sidebar = styled(({ className }) => {

  let { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase.from("events").select("*").order("date", { ascending: false });
			if (error) console.error(error);
			return data;
    }
  })
  const session = useSession()
  let user
  if (session) {
    user = badges.filter((badge) => badge.id === session.user.id)[0]
  }

  return (
    <aside className={className}>
      <Menus>
        {menus.map(({ text, icon, link }, index) => (
          <Menu icon={icon} text={text} link={link} index={index} />
        ))}
      </Menus>
      <BadgeContainer>
      {!isLoading && <UpdateNotification date={data[0]?.date} />}
      <Badge
        name={user?.first_name}
        image_url={
          user
            ? require(`../../img/pp/${user?.id}.${user?.image_extension}`)
            : require('./pp_redaction.png')
        }
      />
      </BadgeContainer>
    </aside>
  )
})`
  --container-shadow: 0px 7px 29px 0px rgba(0, 0, 0, 0.2);
  --bg-color: #000000;
  --bg-color-hover: #191a00;
  --color: #fff200;

  grid-row: 2/3;
  background-color: var(--bg-color);
  color: var(--color);
  fill: var(--color);
  box-shadow: var(--container-shadow);
  font-family: Poppins;
  padding: 0 15px 10px 15px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`

const UpdateNotification = styled(({ className, date }) => {
  function formatDate(dateString) {
    if (dateString) {
      const date = new Date(dateString)
      const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
      }

      const formatter = new Intl.DateTimeFormat('fr-FR', options)
      const formattedDate = formatter
        .format(date)
        .replace(/\b\w/g, (l) => l.toUpperCase())
      return formattedDate
    }

    return dateString
  }

  return <p className={className}>Mise à jour : {formatDate(date)} </p>
})`
  margin-bottom: 10px;
  text-align: center;
  font-size: clamp(8px, 0.8vw, 10px);
  line-height: 100%;
`

const BadgeContainer = styled(({className, children}) => (
  <div className={className}>
    {children}
  </div>
))`
  margin-top: auto;
`

const Badge = styled(({ className, name, image_url }) => (
  <div className={className}>
    <img src={image_url} />
    <div className="infos">
      <span>{name || 'Rédaction'}</span>
      <small>ADMIN</small>
    </div>
  </div>
))`
  border-radius: clamp(15px, 5vw, 30px);
  padding: 5px;
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
      font-size: clamp(12px, 1vw, 14px);
      line-height: 100%;
      font-weight: 600;
    }

    small {
      font-size: clamp(6px, 0.5vw, 7px);
    }
  }
`

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
`

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
`

export default Sidebar

import styled from 'styled-components';

export const Badge = styled(({ className, name, role, imageUrl }) => (
  <div className={className}>
    <img className="profile" src={imageUrl} />
    <div className="infos">
      <span className="name">{name}</span>
      <small className="role">{role}</small>
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

  img.profile {
    border-radius: 100%;
    height: 33px;
  }

  div.infos {
    display: flex;
    flex-direction: column;

    span.name {
      font-size: clamp(14px, 1vw, 16px);
      line-height: 100%;
      font-weight: 600;
    }

    small.role {
      font-size: clamp(8px, 0.5vw, 7px);
      text-transform:uppercase;
    }
  }
`
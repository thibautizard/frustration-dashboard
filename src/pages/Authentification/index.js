import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TextInput, Button, Group } from '@mantine/core'
import Popup from '../../components/Popup/Popup'
import { useAuthentification } from '@hooks'

const Authentification = styled(({ className }) => {
  const { loading, disabled, form, handleLogin } = useAuthentification()

  return (
    <Popup title="Authentification" isClosable={false} className={className}>
      <form onSubmit={handleLogin}>
        <TextInput
          name="email"
          label="Email"
          placeholder=""
          {...form.getInputProps('email')}
        />
        <Group position="center">
          <SubmitButton
            type="submit"
            variant="filled"
            color="dark"
            uppercase
            loading={loading}
            disabled={disabled}
          >
            ✨ Recevoir un magic link
          </SubmitButton>
        </Group>
      </form>
    </Popup>
  )
})`
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
`

const SubmitButton = styled(Button)`
  margin-top: 30px;
`

export default Authentification

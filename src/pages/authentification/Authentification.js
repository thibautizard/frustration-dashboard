import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import Popup from "../../components/Popup/Popup";
import useAuthentification from "../../hooks/useAuthentification";

const Authentification = () => {
  const { loading, disabled, form, handleLogin } = useAuthentification();

  return (
    <Popup title="Authentification" isClosable={false} style="position: absolute;left: 50%;translate: -50% 0;">
      <form onSubmit={handleLogin}>
        <TextInput
          name="email"
          label="Email"
          placeholder=""
          {...form.getInputProps("email")}
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
  );
};

const SubmitButton = styled(Button)`
  margin-top: 30px;
`;

export default Authentification;

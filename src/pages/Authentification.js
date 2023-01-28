import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import styled from "styled-components";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

function Authentification() {
  const [loading, setLoading] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Mail invalide"),
    },
  });

  useEffect(() => setDisabled(!form.isValid("email")), [form]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        ...form.values,
        options: {
          shouldCreateUser: false,
        },
      });
      if (error) throw error;
      alert("Vérifiez le lien à votre adresse e-mail 😉");
    } catch (error) {
      alert(
        "Vous n'êtes pas autorisé à vous connecter à Frustration Dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Authentification</LoginTitle>
      <LoginBody>
        <form onSubmit={handleLogin}>
          <TextInput
            withAsterisk
            name="email"
            label="Email"
            placeholder="your@email.com"
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
      </LoginBody>
    </LoginContainer>
  );
}

const LoginContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 500px;
  margin: auto;
  margin-top: 200px;
  background: white;
  box-shadow: var(--subtle-shadow);
`;

const LoginTitle = styled.h2`
  background: green;
  font-family: Bebas Neue;
  background: #000000;
  color: #fff200;
  padding: 5px 0;
  font-size: 30px;
  text-align: center;
`;

const LoginBody = styled.div`
  padding: 20px 20px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 30px;
`;

export default Authentification;

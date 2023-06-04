import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useForm } from "@mantine/form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useAuthentification() {
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

      toast.success("Vérifiez le lien à votre adresse e-mail 😉", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    } catch (error) {
      console.error(error);
      alert("Vous n'êtes pas autorisé à vous connecter à Frustration Dashboard");
    } finally {
      setLoading(false);
    }
  };

  return { loading, disabled, form, handleLogin };
}

export default useAuthentification;

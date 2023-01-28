import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import styled from "styled-components";

function Account({ session }) {
  // const [loading, setLoading] = useState(null);
  // const [username, setUsername] = useState(null);
  // const [website, setWebsite] = useState(null);
  // const [avatar_url, setAvatarUrl] = useState(null);
  // useEffect(() => {
  //   getProfile();
  // }, [session]);
  // const getProfile = async () => {
  //   try {
  //     setLoading(true);
  //     const { user } = session;
  //     let { data, error, status } = await supabase
  //       .from("profile")
  //       .select(`username, website, avatar_url`)
  //       .eq("id", user.id)
  //       .single();
  //     if (error && status !== 406) {
  //       throw error;
  //     }
  //     if (data) {
  //       setUsername(data.username);
  //       setWebsite(data.website);
  //       setAvatarUrl(data.avatar_url);
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const updateProfile = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const { user } = session;
  //     const updates = {
  //       id: user.id,
  //       username,
  //       website,
  //       avatar_url,
  //     };
  //     let { error } = await supabase.from("profiles").upsert(updates);
  //     if (error) {
  //       throw error;
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // return (
  //   <AccountContainer>
  //     <AccountTitle>Modification du compte</AccountTitle>
  //     <AccountBody>
  //       {loading ? (
  //         "Actualisation du profil..."
  //       ) : (
  //         <form onSubmit={updateProfile}>
  //           <div>Email : {session.user.email} </div>
  //           <div>
  //             <label htmlFor="username">Nom d'utilisateur</label>
  //             <input
  //               type="text"
  //               name="username"
  //               placeholder="username"
  //               value={username || ""}
  //               onChange={(e) => setUsername(e.target.value)}
  //             />
  //           </div>
  //           <div>
  //             <label htmlFor="website">Site internet</label>
  //             <input
  //               type="text"
  //               name="website"
  //               placeholder="website"
  //               value={website || ""}
  //               onChange={(e) => setWebsite(e.target.value)}
  //             />
  //           </div>
  //           <button disabled={loading}>Mettre à jour le profil</button>
  //         </form>
  //       )}
  //       <button type="button" onClick={() => supabase.auth.signOut()}>
  //         Se déconnecter
  //       </button>
  //     </AccountBody>
  //   </AccountContainer>
  // );
}

const AccountContainer = styled.div``;

const AccountTitle = styled.h2``;

const AccountBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Account;

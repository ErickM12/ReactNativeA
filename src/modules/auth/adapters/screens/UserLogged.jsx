import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../../../../kernel/components/Loading";
import Profile from "./Profile";
import UserGuest from "./UserGuest";
export default function UserLogged(props) {
  const { navigation } = props;
  const [session, setSession] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(true);
      } else {
        setSession(false);
      }
    });
  }, []);

  if (session === null) return <Loading visible={true} title="Cargando" />;
  return session ? 
  <Profile navigation={navigation} /> 
  : <UserGuest navigation={navigation} />;
}

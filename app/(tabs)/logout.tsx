import { Redirect } from "expo-router";

export default function Logout() {
    return (
      <Redirect href="../(auth)/login" />
    );
  }
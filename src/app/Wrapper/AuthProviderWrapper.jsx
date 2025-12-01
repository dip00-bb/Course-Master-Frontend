import AuthProvider from "../Contexts/AuthProvider";



export default function AuthProviderWrapper({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

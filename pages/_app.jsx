import "../styles/globals.css"
import { AuthProvider } from "../hooks/useAuth"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      {/* Higher Order Component */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default MyApp

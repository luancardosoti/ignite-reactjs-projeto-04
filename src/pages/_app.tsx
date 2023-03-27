import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { AppContainer, HeaderContainer } from '@/styles/pages/app.styles'
import { Footer } from '@/components/Footer'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <HeaderContainer>
        <Image src={logoImg} alt="" />
      </HeaderContainer>

      <Component {...pageProps} />

      <Footer />
    </AppContainer>
  )
}

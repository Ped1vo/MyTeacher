import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CabecalhoContainer, Logo } from '../src/components/Cabecalho/Cabecalho.style'
import { ThemeProvider } from '@mui/material'
import tema from '../src/themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <CabecalhoContainer>
            <div>
                <Logo src="/imagens/myteacher.png" />
            </div>
            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
        <Component {...pageProps} />
    </ThemeProvider>)
}

export default MyApp

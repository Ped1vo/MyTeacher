import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import { CabecalhoContainer, Logo } from '../src/components/Cabecalho/Cabecalho.style'
import Lista from '../src/components/Lista/Lista'


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Pedro Loiola",
      foto: "https://github.com/ped1vo.png",
      descricao: "Descricao do professor 1",
      valor_hora: 200
    },
    {
      id: 2,
      nome: "Pedro Loiola",
      foto: "https://github.com/ped1vo.png",
      descricao: "Descricao do professor 2",
      valor_hora: 100
    },
    {
      id: 3,
      nome: "Pedro Loiola",
      foto: "https://github.com/ped1vo.png",
      descricao: "Descricao do professor 3",
      valor_hora: 400
    },
    {
      id: 4,
      nome: "Pedro Loiola",
      foto: "https://github.com/ped1vo.png",
      descricao: "Descricao do professor 4",
      valor_hora: 300
    },
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home

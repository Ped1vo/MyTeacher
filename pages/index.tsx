import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useindex'


const Home: NextPage = () => {
  const { listaProfessores } = useIndex();

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={listaProfessores}></Lista>
    </Box>
  )
}

export default Home

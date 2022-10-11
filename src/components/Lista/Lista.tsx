import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { Formatadorservice } from "../../services/FormatadorService";
import { ListaStyled, ItemLista, Foto, Informacoes, Nome, Valor, Descricao, ListaVazia } from "./Lista.style";

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    return(
        <div>
            {props.professores.length > 0 ?(
                <ListaStyled>
                {props.professores.map(professor => (
                    <ItemLista key={professor.id}>
                    <Foto src={professor.foto}></Foto>
                    <Informacoes>
                        <Nome>{professor.nome}</Nome>
                        <Valor>{Formatadorservice.valorMonetario(professor.valor_hora)} por hora</Valor>
                        <Descricao>{Formatadorservice.limitarTexto(professor.descricao, 60)}</Descricao>
                        <Button sx={{ width: '70%'}}>Marcar Aula com Pedro</Button>
                    </Informacoes>
                    </ItemLista>
                ))}
            </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
                
            ) }
        </div>
    )

}

export default Lista;
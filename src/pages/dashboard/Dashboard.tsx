import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina 
            titulo="Página inícial" 
            barraDeferramentas={(
                <FerramentasDaListagem mostrarInputBusca textoBotaoNovo = 'Qualquer coisa'/>
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};
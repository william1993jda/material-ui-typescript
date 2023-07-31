import { FerramentasDeDetalhes } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina 
            titulo="Página inícial" 
            barraDeferramentas={(
                <FerramentasDeDetalhes mostrarBotaoSalvarFechar mostrarBotaoVoltar={false} />
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};
import {
    Box,
    Button,
    Divider,
    Icon,
    Paper,
    Skeleton,
    Typography,
    useMediaQuery,
    useTheme,
    Theme
} from '@mui/material'

interface IFerramentasDeDetalhes {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhes> = ({
    textoBotaoNovo = 'novo',
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar
}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    return (
        <Box
            gap={1}
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            component={Paper}
        >
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&
                (<Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmSalvar}
                    startIcon={<Icon>save</Icon>}
                >
                    <Typography
                        variant='button'
                        whiteSpace='nowrap'
                        textOverflow='ellipsis'
                        overflow='hidden'
                    >
                        Salvar
                    </Typography>
                </Button>
                )}
            {mostrarBotaoSalvarCarregando && (
                <Skeleton width={110} height={60} />
            )}

            {(mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) &&
                (<Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >
                    <Typography
                        variant='button'
                        whiteSpace='nowrap'
                        textOverflow='ellipsis'
                        overflow='hidden'
                    >
                        Salvar e voltar
                    </Typography>
                </Button>
                )}
            {(mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) && (
                <Skeleton width={180} height={60} />
            )}
            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) &&
                (<Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmApagar}
                    startIcon={<Icon>delete</Icon>}
                >
                    <Typography
                        variant='button'
                        whiteSpace='nowrap'
                        textOverflow='ellipsis'
                        overflow='hidden'
                    >
                        Apagar
                    </Typography>
                </Button>
                )}
            {mostrarBotaoApagarCarregando && (
                <Skeleton width={110} height={60} />
            )}
            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && !mdDown) &&
                (<Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    <Typography
                        variant='button'
                        whiteSpace='nowrap'
                        textOverflow='ellipsis'
                        overflow='hidden'
                    >
                        {textoBotaoNovo}
                    </Typography>
                </Button>
                )}
            {(mostrarBotaoNovoCarregando && !smDown && !mdDown) && (
                <Skeleton width={110} height={60} />
            )}

            {
                (mostrarBotaoVoltar &&
                    (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarFechar)
                ) && (
                    <Divider variant='middle' orientation='vertical' />
                )
            }

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&
                (<Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmVoltar}
                    startIcon={<Icon>arrow_back_ios</Icon>}
                >
                    <Typography
                        variant='button'
                        whiteSpace='nowrap'
                        textOverflow='ellipsis'
                        overflow='hidden'
                    >

                        Voltar
                    </Typography>
                </Button>
                )}
            {mostrarBotaoVoltarCarregando && (
                <Skeleton width={110} height={60} />
            )}
        </Box>
    )
}

export default FerramentasDeDetalhes
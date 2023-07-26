import { ReactNode } from "react";
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme, Theme } from "@mui/material";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePagina {
    titulo: string;
    children?: string | JSX.Element | JSX.Element[];
    barraDeferramentas: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({ children, titulo, barraDeferramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 :mdDown ? 8 : 12 )}>
                {
                    smDown && (
                        <IconButton onClick={toggleDrawerOpen}>
                            <Icon>menu</Icon>
                        </IconButton>
                    )
                }
                <Typography
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                >
                    {titulo}
                </Typography>
            </Box>

            {barraDeferramentas && (
                <Box>
                    {barraDeferramentas}
                </Box>
            )}

            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};
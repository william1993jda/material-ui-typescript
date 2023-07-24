import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Icon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material"
import { useDrawerContext } from "../../contexts";

export const MenuLateral: React.FC = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary': 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://avatars.githubusercontent.com/u/34724110?v=4"
                            sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
                        />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>
                                        home
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inícial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};
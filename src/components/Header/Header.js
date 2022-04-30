import logo from '../../logo.png';
import { AppBar, createStyles, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        logo: {
            maxWidth: 40,
            marginRight: '10px',
        },
    })
);

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    href="/"
                >
                    <img src={logo} className={classes.logo} alt="DIS - Orders" />
                </IconButton>
                <Typography variant="h6">DIS - Orders</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

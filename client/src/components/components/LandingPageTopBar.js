import React from 'react';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
    header: {
        position: 'absolute',
        marginTop: '10',
        width: '100%',
    },
    linkList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        listStyle: 'none',
        textDecoration: 'none',
        color: 'white',
    },
    links: {
        margin: '0 1.5rem',
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.6rem',
        fontFamily: "\"Avant Garde\", 'Avantgarde', \"Century Gothic\", 'CenturyGothic', \"AppleGothic\", 'sans-serif",
        textRendering: 'optimizeLegibility',
        fontWeight: '500',
        '&:hover': {
            color: '#2ABBC7',
            transition: 'color .3s ease-in-out'
        }
    }
  });

export default function TopBar() {
    const classes = useStyles();
    return (
    <Box
        className= {classes.header}
        >
        <Fade in={true}>
        <ul className= {classes.linkList}>
                <li> <NavLink to="/home" activeClassName="is-active" className= {classes.links}>Home</NavLink></li>
                <li><NavLink to="/market" activeClassName="is-active" className= {classes.links}>Market</NavLink></li>
                <li><NavLink to="/SignUp" activeClassName="is-active" className= {classes.links}>Sign up</NavLink></li>
                <li> <NavLink to="/LogIn" activeClassName="is-active" exact={true} className= {classes.links}>Log in</NavLink></li>
        </ul>
        </Fade>
        </Box>
)}
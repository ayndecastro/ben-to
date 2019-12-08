import React from 'react';
import '../../styles/components/header.css'
import Icon from '../../styles/components/favicon.png';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
        header: {
                background: '#303030',
                padding: '.1rem 0',
                borderBottom: 'gray 2px solid',
                marginBottom: '1rem',
        },
        iconContainer: {
                position: 'relative',
                margin: 'auto',
                left: '5%'
        },
        icon: {
        },
        linkList: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                margin: '.3rem 0'
        },
        links: {
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.6rem',
                marginRight: '2rem',
                fontStyle: '',
                '&:hover': {
                        color: '#30e8f4'
                }
        }
      });

function Header() {

        const classes = useStyles();
        return (
        <Box
        boxShadow={3}
        className= {classes.header}
        >
        
        <ul className= {classes.linkList}>
                <li className= {classes.iconContainer}>
                        <img  className={classes.icon} src={Icon} alt='Bento'/>
                </li>
                <li> <NavLink to="/home" activeClassName="is-active" exact={true} className= {classes.links}>Home</NavLink></li>
                <li><NavLink to="/market" activeClassName="is-active" className= {classes.links}>Market</NavLink></li>
        </ul>
        </Box>)
}

export default Header;
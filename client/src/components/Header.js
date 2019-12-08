import React from 'react';
import '../styles/components/header.css'
import Icon from '../styles/components/favicon.png';
import Box from '@material-ui/core/Box'

const Header = () => (
        <Box
        boxShadow={3}
        position="static"
        className = "header"
        >
        <div>
        <img src={Icon} alt='Bento' className="header__title.img"/>
        </div>
        </Box>
)

export default Header;
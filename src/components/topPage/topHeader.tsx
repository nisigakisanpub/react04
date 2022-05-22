import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

 const TopHeader: FC = () => {
    return (
        <AppBar position = "static">
            <Toolbar>
                <h2>タイトル</h2>
            </Toolbar>
        </AppBar>
    )
}


export default TopHeader;

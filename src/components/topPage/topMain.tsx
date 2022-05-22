import React, { FC, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';

import pencil from "../../assets/images/pencil1.jpg";
//var pencil = require("../../assets/images/pencil1.jpg");

const useStyle = makeStyles(() =>
    createStyles({
        background: {
            backgroundImage: `url(${pencil})`,
            height: '100vh',
            backgroundSize: 'cover',
        },
        paper: {
            position: 'relative',
            marginLeft: "auto",
            marginRight: "auto",
            top: "33%",
            width: "45%",
        },
    }),
)


const TopMain: FC = () => {
    const [keyword, setKeyword] = useState("");

    const classes = useStyle();
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    }

    const handleSubmit = () => {
        navigate("/search/" + keyword);
    }

    
    return (
        <div className={classes.background}>
            <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
                <IconButton type="submit">
                    <SearchIcon />
                </IconButton>
                <InputBase placeholder="無料素材を検索" onChange={handleChange} />
            </Paper>
        </div>
    )
}

export default TopMain;
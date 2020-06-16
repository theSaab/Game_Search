import React, { Component } from 'react'

// MUI stuff
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

// export default function Gamebox() {
//     const classes = useStyles();

//     function FormRow() {
//         return (
//             <React.Fragment>
//                 <Grid item xs={4}>
//                     <Paper className={classes.paper}>item</Paper>
//                 </Grid>
//                 <Grid item xs={4}>
//                     <Paper className={classes.paper}>item</Paper>
//                 </Grid>
//                 <Grid item xs={4}>
//                     <Paper className={classes.paper}>item</Paper>
//                 </Grid>
//             </React.Fragment>
//         );
//     }

//     return (
//         <div className={classes.root}>
//             <Grid container spacing={1}
//             direction='row'
//             justify='justify'>
//                 <Grid container item xs={12} spacing={0}>Hell
//                 </Grid>
//                 <Grid container item xs={12} spacing={0}>hELLO
//                 </Grid>
//                 <Grid container item xs={12} spacing={0}>Helloe 
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import pacman from '../images/pacman.jpg'
import { requirePropFactory } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function Gamebox() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img}
                                alt="pacman"
                                src='data:image/jpeg;base64,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'
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Name
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Release Date
                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Rating
                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">Something Else</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}



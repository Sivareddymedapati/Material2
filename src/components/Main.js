import React from 'react'
import Grid from '@material-ui/core/Grid';
import css4 from '../pics/css_4-1.png'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from './SignupForm';
import Appbar from './Appbar'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function Main() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
        const classes = useStyles();  
        return (
            <div>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Appbar />
                    <Grid
                        item xs={3}
                        container
                        direction="column"
                        justify="center"
                        alignItems="center" >
                        
                    </Grid>
                </Grid>
                <Grid  
                    item xs={12}
                    container
                    direction="row"
                    justify="left"
                    alignItems="top" >
                <Grid
                    item xs={3}
                    container
                    direction="column"
                    justify="left"
                    alignItems="left" >
                      
                       
                         
                </Grid>

                    <Grid item xs={6}>
                        <div>
                        <Typography variant="h6" className={classes.title}>
                            Signup Form
                        </Typography>
                        </div>
                        <SignupForm />
                        
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
               
                
               
            </Grid>
            </div>
        )
    }




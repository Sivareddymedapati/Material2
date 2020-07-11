import React from 'react'
import {connect} from 'react-redux'
import {sendData} from '../Redux/index'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function UserData(props) {

    const classes = useStyles();

    console.log(props.data)
    const data = props.data
    return (
        <div>
            <Grid 
            item xs={12}
            container
            direction="column"
            justify="left"
            alignItems="center">
                <Grid 
                  item xs={12}
                  container 
                  direction="row"
                  justify="left"
                  alignItems="left">
                      
                    <Grid item xs={5}></Grid>  
                        <Typography variant="h6" className={classes.title}>
                            User Data
                        </Typography>  
                    <Grid item xs={5}></Grid> 
                    <Link to="/"><Button variant="contained" color="primary">Back</Button></Link>
                    
                </Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid 
                item xs={9}
                container
                justify="left"
                alignItems="left">
                    <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Password</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((tabledata) => (
                            <TableRow key={tabledata.index}>
                                <TableCell align="right">{tabledata.firstName}</TableCell>
                                <TableCell align="right">{tabledata.password}</TableCell>
                                <TableCell align="right">{tabledata.email}</TableCell>
                                <TableCell align="right">{tabledata.age}</TableCell>
                                <TableCell align="right">{tabledata.gender}</TableCell>
                                <TableCell align="right">{tabledata.date}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
                
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
     
      return {
          data:state.UserData
      }
}


export default connect (
    mapStateToProps
    )(UserData)

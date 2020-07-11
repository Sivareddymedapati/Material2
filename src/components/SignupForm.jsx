import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import {connect} from 'react-redux'
import {sendData} from '../Redux/index'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  export const mapDispatchToProps = dispatch => {
    return {
      sendData: (values) => dispatch(sendData(values))
    }
}  

function SignupForm (props) {
    const classes = useStyles();
    
    const formik = useFormik({
      initialValues: {
        firstName: '',
        password: '',
        email: '',
        age:"",
        gender:"",
        date:''
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        age: Yup.number()
          .required('Required'),  
        gender: Yup.string()
          .required('Required'),
        date: Yup.date()
          .nullable()
          .required()  
          
      }),
      onSubmit: values => {
        props.sendData(values)
      },
    });


    return (
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        
        <TextField
          
          id="firstName"label="First Name"
          name="firstName"
          type="text"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <br/>
        <TextField
          label="Password"
          id="password"
          name="password"
          type="password"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <br/>
        <TextField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <br/>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
           label="age"
           id="age"
           name="age"
           fullWidth
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.age}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}
        <br/>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
            label="gender"
            id="gender"
            name="gender"
            fullWidth
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
        {formik.touched.gender && formik.errors.gender ? (
          <div>{formik.errors.gender}</div>
        ) : null}
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2017-05-24"
          name="date"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
        }}
      />
       {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
        
        <br/>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    );
  };

  export default connect (null, mapDispatchToProps)(SignupForm)

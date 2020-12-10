import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { validationSchemaOne } from '../validationSchemas';
import { useStyles } from "./style"

const FirstForm = ({ handleNext }: { handleNext: () => void }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      homeAddress: "",
      fullName: "",
      emailAddress: "",
      mobileNumber: "",
      postalCode: ""
    },
    onSubmit: () => {
      handleNext();
    },
    validationSchema: validationSchemaOne
  });
  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}
              size="medium"
              color="primary"
              name="fullName"
              variant="filled"
              fullWidth
              id="fullName"
              label="Full Name*"
              autoFocus
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={
                formik.touched.fullName && Boolean(formik.errors.fullName)
              }
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}
              size="medium"

              variant="filled"
              fullWidth
              id="email"
              label="Email Address*"
              name="emailAddress"
              autoComplete="email"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.emailAddress &&
                Boolean(formik.errors.emailAddress)
              }
              helperText={
                formik.touched.emailAddress && formik.errors.emailAddress
              }

            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}

              size="medium"
              color="primary"
              variant="filled"
              fullWidth
              id="home"
              label="Home Address*"
              name="homeAddress"
              autoComplete="home"
              value={formik.values.homeAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.homeAddress &&
                Boolean(formik.errors.homeAddress)
              }
              helperText={
                formik.touched.homeAddress && formik.errors.homeAddress
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}
              size="medium"
              color="primary"
              variant="filled"
              fullWidth
              name="mobileNumber"
              label="Mobile Number*"
              type="mobileNumber"
              id="mobileNumber"
              autoComplete="current-mobileNumber"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
              helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}
              size="medium"
              color="primary"
              variant="filled"
              fullWidth
              name="postalCode"
              label="Postal Code*"
              type="postalCode"
              id="postalCode"
              autoComplete="current-postalCode"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
              helperText={formik.touched.postalCode && formik.errors.postalCode}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="secondary" disabled checked/>}
              label="Remember Me"
            />
          </Grid>
        </Grid>

        <Button size="large" color="default" variant="outlined" fullWidth type="submit" 
        style={{marginTop: "20px",
        marginBottom: "20px", backgroundColor: "cadetblue", color: "white",
         }}

        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default FirstForm;
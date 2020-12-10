import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import validation schema
import { validationSchemaTwo } from "../validationSchemas/index";

const SecondForm = ({ handleNext }: { handleNext: () => void }) => {
  const formik = useFormik({
    initialValues: {
      loanRequested: "",
      currentSalary: "",
      company: "",
      positionCode: "",
    },
    onSubmit: () => {
      handleNext();
    },
    validationSchema: validationSchemaTwo,
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "70%", margin: "0 auto" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}

              size="medium"
              color="primary"
              variant="filled"
              fullWidth
              id="loanRequested"
              label="Loan Requested*"
              name="loanRequested"
              autoComplete="loanRequested"
              value={formik.values.loanRequested}
              onChange={formik.handleChange}
              error={formik.touched.loanRequested && Boolean(formik.errors.loanRequested)}
              helperText={formik.touched.loanRequested && formik.errors.loanRequested}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}

              type="number"
              size="medium"
              color="primary"
              variant="filled"
              fullWidth
              id="currentSalary"
              label="Current Salary*"
              name="currentSalary"
              autoComplete="currentSalary"
              value={formik.values.currentSalary}
              onChange={formik.handleChange}
              error={formik.touched.currentSalary && Boolean(formik.errors.currentSalary)}
              helperText={formik.touched.currentSalary && formik.errors.currentSalary}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}

              size="medium"
              color="primary"
              variant="filled"
              fullWidth
              id="company"
              label="Company Name*"
              name="company"
              autoComplete="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}

              id="outlined-multiline-static"
              label="Position Code"
              fullWidth
              rows={4}
              size="medium"
              color="primary"
              variant="filled"
              name="positionCode"
              onChange={formik.handleChange}
              value={formik.values.positionCode}
              error={
                formik.touched.positionCode && Boolean(formik.errors.positionCode)
              }
              helperText={
                formik.touched.positionCode && formik.errors.positionCode
              }
            />
          </Grid>
        </Grid>
        <Button
          size="large" color="default" variant="outlined" fullWidth type="submit"
          style={{marginTop: "30px",marginBottom:"20px", backgroundColor: "cadetblue", color: "white" }}
        >
          Contine
        </Button>
      </form>
    </div>
  );
};

export default SecondForm;
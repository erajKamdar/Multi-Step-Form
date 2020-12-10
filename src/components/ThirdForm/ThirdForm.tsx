import React from "react";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import { validationSchemaThree } from "../validationSchemas/index";

const ThirdForm = ({ handleNext }: { handleNext: () => void }) => {
  const formik = useFormik({
    initialValues: {
      BankAccount: '',
      AccountNumber: '',
      CreditCardNumber: '',
      DebitCardNumber: '',
    },
    onSubmit: () => {
      handleNext();
    },

    validationSchema: validationSchemaThree,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit} style={{ width: "70%" }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}

              variant="filled"
              fullWidth
              id="BankAccount"
              label="Enter Name of Bank"
              name="BankAccount"
              autoComplete="BankAccount"
              value={formik.values.BankAccount}
              onChange={formik.handleChange}
              error={
                formik.touched.BankAccount && Boolean(formik.errors.BankAccount)
              }
              helperText={
                formik.touched.BankAccount && formik.errors.BankAccount
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}
              type="number"
              variant="filled"
              fullWidth
              id="AccountNumber"
              label="Account Number"
              name="AccountNumber"
              
              autoComplete="AccountNumber"
              value={formik.values.AccountNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.AccountNumber &&
                Boolean(formik.errors.AccountNumber)
              }
              helperText={
                formik.touched.AccountNumber && formik.errors.AccountNumber
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}

              type="number"
              variant="filled"
              fullWidth
              id="CreditCardNumber"
              label="Credit Card Number"
              name="CreditCardNumber"
              autoComplete="CreditCardNumber"
              value={formik.values.CreditCardNumber}
              onChange={formik.handleChange}
              error={formik.touched.CreditCardNumber && Boolean(formik.errors.CreditCardNumber)}
              helperText={formik.touched.CreditCardNumber && formik.errors.CreditCardNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ border: "1px solid cadetblue", borderRadius: "5px", borderBottom: "transparent" }}

              type="number"
              variant="filled"
              fullWidth
              id="DebitCardNumber"
              label="Debit Card Number"
              name="DebitCardNumber"
              autoComplete="DebitCardNumber"
              value={formik.values.DebitCardNumber}
              onChange={formik.handleChange}
              error={formik.touched.DebitCardNumber && Boolean(formik.errors.DebitCardNumber)}
              helperText={formik.touched.DebitCardNumber && formik.errors.DebitCardNumber}
            />
          </Grid>
        </Grid>
        <Button
          color="default"
          size="large"
          variant="outlined"
          fullWidth
          type="submit"
          style={{ marginBottom: "20px", marginTop: "40px", backgroundColor: "cadetblue", color: "white" }}
        >
          Register Account
        </Button>
      </form>
    </div>
  );
};

export default ThirdForm;
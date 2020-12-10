import * as yup from "yup";

export let validationSchemaOne = yup.object({
  fullName: yup
    .string()
    .required("Please enter your Full Name")
    .min(6, "Full name at least 6 characters"),
  emailAddress: yup
    .string()
    .email()
    .required("Please enter valid email Address"),
  homeAddress: yup
    .string()
    .required("Please enter your Home Address")
    .min(11, "Address should contain atleast 11 characters"),
  mobileNumber: yup
    .string()
    .matches(/(^(03)[0-9]{9}$)/, "Expected format 03000000000 & should be contain 11 digits")
    .required('Please Enter your Mobile Number'),
  postalCode: yup
     .string()
     .matches(/(^$)|(^[0-9]{4}$)/, "Valid Post Code has 4 digits")
    .required('Please Enter Your Postal Code')
});

export let validationSchemaTwo = yup.object({
  loanRequested: yup
  .number()
  .min(5_00_000, "Minimum loan amount is 5,00,000")
  .required("This is a required field"),
  currentSalary: yup 
  .number()
  .positive("A positive value is expected")
  .required("This is a required field")
  .when(
      "loanRequested",
      (loanRequested: number, schema: any) => {
          return schema.moreThan(loanRequested / 10, "Must be more than 10% of requested loan")
      }
  ),
  company: yup
    .string()
    .required("Company Name is Required"),
  positionCode: yup
     .number()
     .min(2, "Position Code must contained at least 2 digits")

});


export let validationSchemaThree = yup.object().shape({
  BankAccount: yup.string().required(),
  AccountNumber: yup
    .string()
    .min(8, "Account Number must contain 8 to 12 digits")
    .max(12, "Account Number must contain 8 to 12 digits")
    .required(),
  CreditCardNumber: yup
    .string()
    .min(16, "Your credit card number must contain 16 or more digits")
    .required("This is a required field"),
  DebitCardNumber: yup
    .string()
    .min(16, "Your debit card number contains 16 digits")
    .max(16, 'Debit card number must be 16 digits')
    .required("This is a required field"),
});
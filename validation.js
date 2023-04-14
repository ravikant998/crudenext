export default function validateInfo(value, cb) {
  let errors = {};

  if (!value.firstname) {
    errors.firstname = "Firstname required";
  } else if (value.firstname.length < 4) {
    errors.firstname = "Firstname must to greater than be 4 characters or more";
  }

  if (!value.lastname) {
    errors.lastname = "Lastname required";
  } else if (value.lastname.length < 4) {
    errors.lastname = "Lastname must to greater than be 4 characters or more";
  }
  if (!value.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "Email address is invalid";
  }
  if (!value.phone) {
    errors.phone = "Phone is required";
  } else if (value.phone.length < 6) {
    errors.phone = "phone needs to be 6 characters or more";
  }
  if (!value.password) {
    errors.password = "Password is required";
  } else if (value.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!value.confirmpassword) {
    errors.confirmpassword = "Confirm Password is required";
  } else if (value.confirmpassword !== value.password) {
    errors.confirmpassword = "Confirm Passwords do not match";
  }
  cb(errors);
  return errors;
}

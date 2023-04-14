import { useState } from "react";

const UseForm = (validateInfo) => {
  const [errors, setErrors] = useState("");
  console.log("errors>>>", errors);
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  console.log("inputData>>>", inputData);
  const handleChange = (event) => {
    setInputData(event.target.value);
    // let name = e.target.name;
    // let value = e.target.value;
    // // console.log("value>>>>", value)
    // setInputData({
    //     ...inputData,
    //     [name]: value
    // })
    // let errorsinput;
    // setErrors(validateInfo(inputData, (errs) => {
    //     console.log("errs>>",errs)
    //     errorsinput = errs
    // }))
  };

  const inputBlurhandler = (event) => {
    console.log("event", event);

    if (inputData === 0) {
      setErrors("required input");
    }
  };
  const handleSubmit = (e) => {
    // console.log("e", e)
    e.preventDefault();
    let errorsinput;
    setErrors(
      validateInfo(inputData, (errs) => {
        errorsinput = errs;
      })
    );
    let data = JSON.parse(localStorage.getItem("signup")) || [];
    // console.log("data>>>", data)
    // console.log("errors", errors.firstname || errors.lastname || errors.email||errors.phone||errors.password)
    let test =
      errorsinput.firstname ||
      errorsinput.lastname ||
      errorsinput.email ||
      errorsinput.phone ||
      errorsinput.password ||
      errorsinput.confirmpassword;
    if (!test) {
      localStorage.setItem(
        "signup",
        JSON.stringify([...data, { id: data.length + 1, ...inputData }])
      );
    }
  };

  return {
    handleSubmit,
    errors,
    inputData,
    handleChange,
    inputBlurhandler,
  };
};

export default UseForm;

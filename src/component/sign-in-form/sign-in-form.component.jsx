import React from "react";
import { useState } from "react";
import {
  signInWithGoolglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.util";
import Form from "../form-input/form-input.conmponent";
import "./sign-in-form.styles.scss";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  //sign in with google
  const singInWithGoogle = async () => {
    await signInWithGoolglePopup();
  };

  //Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  //Handle change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already Have an Account?</h2>
      <span>Sign in with your email and password</span>
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <Form
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <Form
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={singInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

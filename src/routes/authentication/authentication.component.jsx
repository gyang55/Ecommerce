import SignUpForm from "../../component/signUpForm/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

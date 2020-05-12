import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { Auth } from "aws-amplify";
import swal from "sweetalert";
import { useAppContext } from "../../libs/contextLib";
import LoaderButton from "../../components/LoaderButton/LoaderButton";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      swal("Welcome", "You logged in", "success");
      history.push("/open-bounties");
    } catch (e) {
      swal(e.message, "", "error");
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
    <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <FormGroup controlId="email" bssize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </form>
    </div>
  );
}

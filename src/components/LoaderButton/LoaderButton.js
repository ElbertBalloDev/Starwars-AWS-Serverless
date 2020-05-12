import React from "react";
import { Button } from "react-bootstrap";
import "./LoaderButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <FontAwesomeIcon icon={faJedi} className="fa-spin spinning"/>}
      {props.children}
    </Button>
  );
}

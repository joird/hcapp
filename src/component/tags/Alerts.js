import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert';

export const AlertSuccess = (props) => {
  const [show, setShow] = useState(null);
  
  /*eslint-disable */
  useEffect(() => { 
    setShow(true);
    setTimeout(function(){ setShow(false); }, 5000);
  }, [props.show]);
  /*eslint-disable */

  return (
    <Alert variant="success" show={show} onClose={() => setShow(false)} dismissible>
      {props.message}
    </Alert>
  );
}

export const AlertWarning = (props) => {
  const [show, setShow] = useState(null);
  
  /*eslint-disable */
  useEffect(() => { 
    setShow(true);
    setTimeout(function(){ setShow(false); }, 5000);
  }, [props.show]);
  /*eslint-disable */

  return (
    <Alert variant="warning" show={show} onClose={() => setShow(false)} dismissible>
      {props.message}
    </Alert>
  );
}
export const AlertSecondary = (props) => {
  const [show, setShow] = useState(null);
  
  /*eslint-disable */
  useEffect(() => { 
    setShow(true);
    setTimeout(function(){ setShow(false); }, 5000);
  }, [props.show]);
  /*eslint-disable */

  return (
    <Alert variant="secondary" show={show} onClose={() => setShow(false)} dismissible>
      {props.message}
    </Alert>
  );
}
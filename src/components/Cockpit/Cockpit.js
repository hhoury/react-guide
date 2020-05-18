import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
const CockPit = (props) => {
  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);
  useEffect(() => {
    console.log("[CockPit.js] useEffect");
    toggleBtnRef.current.click();
    return () => {
      console.log("[CockPit.js] cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("[CockPit.js] 2nd useEffect");
    return () => {
      console.log("[CockPit.js] 2nd cleanup");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // ['red', 'bold'] was inside below button => altStyle={this.state.showPersons}
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
     
        <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(CockPit);

import React, { Component } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";
// import styled from "styled-components";

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Login</p>
        )}

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          // ref={(inputEL)=>{this.inputElement = inputEL}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          c
        />
      </Aux>

      // <StyledDiv>
      //   <p onClick={this.props.click}>
      //     I'm {this.props.name} and I am {this.props.age} years old
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input type="text" onChange={this.props.changed} value={this.props.name} />
      // </StyledDiv>
    );
  }
}
Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  click: PropTypes.func,
};
export default withClass(Person, classes.Person);

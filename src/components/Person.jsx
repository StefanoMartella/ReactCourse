import React from "react";

// function Person(props) {
// function Person({ name, age }) {
//   return (
//     <>
//       <h1>Nome: {name}</h1>
//       <h1>Età: {age}</h1>
//     </>
//   );
// }

class Person extends React.Component {
  render() {
    const { name, age, children } = this.props;

    return (
      <>
        <h1>Nome: {name}</h1>
        <h1>Età: {age}</h1>
        {/* <h2 style={{ color: "red" }}>
          {age >= 18 ? "Maggiorenne" : "Minorenne"}
        </h2> */}
        {age >= 18 ? (
          <h1 style={{ color: "blue" }}>Maggiorenne</h1>
        ) : (
          <h2 style={{ color: "red" }}>Minorenne</h2>
        )}
        {children}
      </>
    );
  }
}

export default Person;

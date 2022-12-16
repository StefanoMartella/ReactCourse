import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      value2: "stringa",
      isVisible: true,
    };

    // this.decrease = this.decrease.bind(this);
  }

  // La funzione sotto richiede il bind nel costruttore
  // decrease() {
  //   this.setState((oldState) => ({ counter: oldState.counter - 1 }));
  // }

  decrease = () => {
    this.setState(
      (oldState) => ({ counter: oldState.counter - 1 }),
      () => {
        console.log(this.state.counter);
      }
    );
    // Questo non funziona perché il setState è asincrono
    // console.log(this.state.counter);
  };

  render() {
    const { counter, value2, isVisible } = this.state;

    return (
      <div>
        {isVisible && (
          <>
            <h1>{counter}</h1>
            <h2>{value2}</h2>
            <button
              onClick={() =>
                this.setState((oldState) => ({ counter: oldState.counter + 1 }))
              }
            >
              Incrementa
            </button>
            {/* <button onClick={() => this.decrease()}>Decrementa</button> */}
            <button onClick={this.decrease}>Decrementa</button>
          </>
        )}
        <button
          onClick={() =>
            this.setState((oldState) => ({
              isVisible: !oldState.isVisible,
            }))
          }
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default Counter;

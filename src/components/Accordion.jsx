import React from "react";
import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpen: null,
    };
  }

  onItemClick = (id) => {
    this.setState((oldState) => ({
      currentOpen: oldState.currentOpen === id ? null : id,
    }));
  };

  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            onClick={() => this.onItemClick(item.id)}
            selected={this.state.currentOpen === item.id}
          />
        ))}
      </div>
    );
  }
}

export default Accordion;

import React from "react";

class ShowMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingMore: false,
    };
  }

  processText() {
    const { isShowingMore } = this.state;
    const { children, maxLength = 20 } = this.props;

    if (children.length <= maxLength) {
      return [false, children];
    }

    const textToShow = isShowingMore
      ? children
      : `${children.slice(0, maxLength)}...`;

    return [true, textToShow];
  }

  render() {
    const { isShowingMore } = this.state;
    const [mustBeTruncated, textToShow] = this.processText();

    return (
      <>
        <span>{textToShow} </span>
        {mustBeTruncated && (
          <span
            onClick={() =>
              this.setState((oldState) => ({
                isShowingMore: !oldState.isShowingMore,
              }))
            }
            style={{ color: "red", cursor: "pointer" }}
          >
            {isShowingMore ? "Nascondi" : "Mostra altro"}
          </span>
        )}
      </>
    );
  }
}

export default ShowMore;

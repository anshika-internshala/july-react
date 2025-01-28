import React from "react";

class SearchClassBased extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      count: 0,
      count1: 0,
    };
  }

  componentDidMount() {
    console.log("Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component is updated");
  }

  componentWillUnmount() {
    console.log("Component is unmounted");
  }

  render() {
    console.log("component is rendered");
    function updateCount() {
      this.setState({ count: this.state.count + 1 });
    }

    return (
      <>
        <h1>Search Class Based Component</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.state.count}</h2>
        <h3>{this.state.count1}</h3>
        <button onClick={updateCount.bind(this)}>Update</button>
      </>
    );
  }
}

export default SearchClassBased;

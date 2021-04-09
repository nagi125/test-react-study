import React, { Component } from 'react';

// 関数コンポーネント
const App = () => {

  return (<Counter></Counter>)
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0}
  }

  render() {
    return (
        <React.Fragment>
          <div>counter: {this.state.count}</div>
          <button>+1</button>
          <button>-1</button>
        </React.Fragment>
    )

  }
}

export default App;

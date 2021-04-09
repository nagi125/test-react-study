import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor={"bar"}>bar</label>
        <input type={"text"} onClick={() => { console.log('hoge');}} />
      </div>
    )
  }
}

export default App;

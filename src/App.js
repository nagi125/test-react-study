import React from 'react';

// クラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor={"bar"}>bar</label>
//         <input type={"text"} onClick={() => { console.log('hoge');}} />
//       </React.Fragment>
//     )
//   }
// }

// 関数コンポーネント
const App = () => {
  return (
      <div>
        <User name={"Taro"} />
      </div>
  )
}

const User = (props) => {

  return <div>Hi, I am {props.name}</div>
}

export default App;

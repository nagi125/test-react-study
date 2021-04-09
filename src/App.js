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

  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 }
  ]

  return (
      <div>
        {
          profiles.map((profile) => {
            return <User name={profile.name} age={profile.age} />
          })
        }
      </div>
  )
}

const User = (props) => {

  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

export default App;

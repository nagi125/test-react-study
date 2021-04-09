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
    { name: "Hanako", age: 5 },
    { name: "NoName"}
  ]

  return (
      <div>
        {
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index}/>
          })
        }
      </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

// 入力されてなかった場合に自動で入力してくれる。
User.defaultProps = {
  age: 1
}

export default App;

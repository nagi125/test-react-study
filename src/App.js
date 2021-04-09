import React from 'react';
import PropTypes from 'prop-types';

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

// Propsの型を定義してあげる。
User.propTypes = {
  name: PropTypes.string,
  age:  PropTypes.number.isRequired
}

export default App;

import {Component} from 'react'
import './App.css'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

// 클래스 컴포넌트

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent />
//         <ClassComponent />
//       </ul>
//     )
//   }
// }

// 함수 컴포넌트

export default function App() {
  return (
    <ul>
      <ArrowComponent href="http://google.com" text="go to Google" />
      <ArrowComponent href="http://google.com" text="go to Google" />
    </ul>
  )
}

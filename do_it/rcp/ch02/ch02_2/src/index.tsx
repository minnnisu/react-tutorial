import ReactDOM from 'react-dom/client'
import * as D from './data'

const children = [
  <li>
    <a href="http://www.google.com" target="_blank" rel="noreferrer">
      <p>go to Google</p>
    </a>
  </li>,
  <li>
    <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
      <p>go to Facebook</p>
    </a>
  </li>,
  <li>
    <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
      <p>go to Twitter</p>
    </a>
  </li>
]

// const children = [0, 1, 2].map((n: number) => <h3>Hello world! {n}</h3>)

// const children = D.makeArray(10).map((notUsed, index) => (
//   <div key={index}>
//     <p>{D.randomId()}</p>
//     <p>{D.randomName()}</p>
//     <p>{D.randomJobTitle()}</p>
//     <p>{D.randomSentence()}</p>
//     <img src={D.randomAvatar()} width={100} height={100} alt="아바타" />
//   </div>
// ))

const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)

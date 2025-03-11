// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './NotFound'

function App() {
  const titleh1 = 'Welcome to your New React Blog'
  const likes = 50
  const array=['tessa', 'lilo', 'gaby']
  const person = {name:'yoshi', age:30}

  const dynamicLink = "http://www.google.com"
  return (
    <Router>
      <div className="App">
        <Navbar /> 

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
         

          <hr></hr>
          <hr></hr>
          <hr></hr>
          <h1>Learning React</h1>
          <h2>Calling Dynamic Values from logic ABOVE inside this component</h2>
          <h3>{titleh1}</h3>
          <p>Liked {likes} times</p>
          <p>{person.name}</p>
          <p>{array}</p>

          <h2>Dynamic Values directly inside curly brakcets</h2>
          <p>{10}</p>
          <p>{'hello ninjas'}</p>
          <p>{[1,2,3,4,5]}</p>
          <p>{25+5}</p>
          <p>{Math.random()*10}</p>

          <h2>Using DYNAMIC VALUES as Attribute Values in Element Tags</h2>
          <a href={dynamicLink}>Google Site</a>
        </div>

      </div>
    </Router>
  );
}

export default App;


//---------DELETED CODE ------------
// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
import Users from "./Components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route


} from "react-router-dom";
import Posts from "./Components/posts/Posts";
import './App.css'


export default function App() {
  return (
       <Router>
           <div>

               <div className={'link'}>
               <Link to={'/'}>no</Link>
               <Link to={'/users'}>getUsers</Link>
               <Link to={'/posts'}>getPost</Link>
               </div>

                     <div>
                         <Route  path={'/users'} component={Users}/>
                     </div>
                 <div> <Route path={'/posts'} component={Posts}/></div>

       </div>
      </Router>
  );
}



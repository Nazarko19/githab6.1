
import {useEffect, useState} from "react";
import {getUsers} from "../../servises/users.servis";
import User from "./User";
import {Route} from "react-router-dom";
import UserDeteilApp from "./UserDeteilApp";
import './Users.css'




export default function Users(props) {
  let {match:{url},history}=props
  // console.log(url)
  let [users,setUsers] = useState([])

  useEffect(()=>{
    getUsers().then(value => setUsers([...value]))
  },[])
  return (
    <div className={'wrap'}>
      <div className={'users'}>
      {
        users.map(value => <User key={value.id} history={history}  item={value}/>)

      }
      </div>

      <div className={'detailuser'}>
      <Route path={`${url}/:id`} render={(props)=>{
        return <UserDeteilApp {...props}/>
      }}/>
      </div>
    </div>
  );
}
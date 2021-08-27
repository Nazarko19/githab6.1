import {useEffect, useState} from "react";
import {getPosts} from "../../servises/users.servis";
import Post from "./Post";
import {Route} from "react-router-dom";
import PostDetails from "./PostDetails";
import './Posts.css'

export default function Posts(props) {
    let {match:{url}}=props
    let [posts,setPosts] = useState([])
    useEffect(()=>{
        getPosts().then(value => setPosts([...value]))
    },[])
  return (
    <div className={'wrapPosts'}>
        <div className={'posts'}>
            {
                posts.map(value => <Post key={value.key} item={value} />)
            }
        </div>


        <div className={'postDetails'}>
        <Route path={`${url}/:id`} render={(props) => {
            return <PostDetails {...props}/>
        }}/>
        </div>

    </div>
  );
}
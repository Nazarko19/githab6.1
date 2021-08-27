import {
  BrowserRouter as Router,
      Switch,
      Link,
      Route


} from "react-router-dom";


export default function Post({item}) {
  return (
    <div className={'post'}>

      {item.title} <br/> <div className={'linkPost'}><Link to={{pathname:`/posts/${item.id}`,state:item}}>details post</Link></div>

    </div>
  );
}
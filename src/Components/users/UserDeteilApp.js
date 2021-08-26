import {useEffect, useState} from "react";
import {getUser} from "../../servises/users.servis";


export default function UserDeteilApp(props) {
    console.log(props);


    let {match: {params: {id}}} = props
    let [user, setUser] = useState([])


    useEffect(() => {
        const x = async () => {
            await getUser(id).then(value => setUser({...value}));
        }

        x();
    }, [id])
    return (
        <div>

            <h2>{user.name}-{user.username}</h2>
            <h3>{user.email}</h3>
            {
                user.address && <>
                    <ul>Address:
                        <li>{user.address.street}</li>
                        <li>{user.address.suite}</li>
                        <li>{user.address.city}</li>
                        <li>{user.address.zipcode}</li>
                    </ul>
                    <h2>{user.address.geo.lat}</h2>
                    <h2>{user.address.geo.lng}</h2></>
            }


        </div>
    );
}
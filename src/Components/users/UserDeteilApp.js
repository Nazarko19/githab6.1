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

            <h4>{user.name}-{user.username}</h4>
            <h4>{user.email}</h4>
            {
                user.address && <>
                    <ul>Address:
                        <li>{user.address.street}</li>
                        <li>{user.address.suite}</li>
                        <li>{user.address.city}</li>
                        <li>{user.address.zipcode}</li>
                    </ul>
                    <ul>>Geo:
                    <li>{user.address.geo.lat}</li>
                    <li>{user.address.geo.lng}</li>
                </ul></>
            }
            <h4>{user.phone}</h4>
            <h4>{user.website}</h4>
            {user.company && <> <ul>Company:
            <li>{user.company.name}</li>
            <li>{user.company.catchPhrase}</li>
            <li>{user.company.bs}</li></ul> </>}


        </div>
    );
}
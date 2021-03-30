import React, {useState,useEffect} from 'react';

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form>
            
            <input className="width" type="text" value={user.name} name="name" onChange={handleChange} />
            <br/>
            <input className="width" type="text" value={user.username} name="username" onChange={handleChange} /><br/>
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;
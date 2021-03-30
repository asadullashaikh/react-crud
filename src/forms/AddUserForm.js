import React, {useState} from 'react';

const AddUserForm = (props) => {

    const init = {id:null, name:'',username:''}

    const [user, setUser] = useState(init);

    const add = e =>{
        const{name,value} = e.target;
        setUser({...user, [name]:value})
    }

    const submitt = e =>{
        e.preventDefault()
        if(user.name && user.username){
            add(e, props.addUser(user))
        }
          
    }


    return (
        <form>
            <input type="text" name="name" onChange={add}/> <br/>
            <input type="text" name="username" onChange={add}/> <br/>
            <button className="button" onClick={submitt}>Add User</button>
        </form>
    )
}

export default AddUserForm;
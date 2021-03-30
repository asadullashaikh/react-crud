import React, {useState} from 'react'
import './style.css'
import userList from './data.js';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {



  const [users, setUsers] = useState(userList)

  const [editing, setEditing] = useState(false);

const initialUser = {id: null, name: '', username: ''};

const [currentUser, setCurrentUser] = useState(initialUser);
 const addUser = s =>{
   s.id = users.length + 1;
   setUsers([...users, s]);
 }

 function deleteUser(id){
   setUsers(users.filter(function(user){
     return user.id !== id
   }))
 }

 const editUser = (id, user) => {
  setEditing(true);
  setCurrentUser(user);
}
const updateUser = (newUser) => {
  setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
}

  return (
    <div className="main">
      <div className="container">
        <p>React App with Hook</p>
      </div>
      <div className="row">
      { editing ? (
            <div className="add">
              <h2>Edit user</h2>
              <EditUserForm 
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
      <div className="add">
        <p>Add User</p>
        <AddUserForm addUser={addUser}/>
      </div>
          )}
      <div className="view">
        <p>View users</p>
        <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>
      </div>
    </div>
  )
}

export default App

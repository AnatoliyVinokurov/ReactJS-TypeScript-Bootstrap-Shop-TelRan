import React, { useState } from 'react'
import EditUser from './EditUser';

const UpdateUser = () => {
  const [updateAction, setUpdateAction] = useState('');
  
  switch(updateAction){
    case 'editUser':
      return <EditUser close={()=>setUpdateAction('')}/>
      default:
        return(
          <div>
            <p>Defoult -_-</p>
            <button onClick={()=>setUpdateAction('editUser')}>Edit User</button>
          </div>
        )
  }
}

export default UpdateUser
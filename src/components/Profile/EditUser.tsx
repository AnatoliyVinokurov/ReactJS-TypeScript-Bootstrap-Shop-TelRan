import React from 'react'

interface Props{
  close:()=>void
}

const EditUser = ({close}:Props) => {
  return (
    <div>EditUser
      <button onClick={()=>close()}>Close</button>
    </div>
  )
}

export default EditUser
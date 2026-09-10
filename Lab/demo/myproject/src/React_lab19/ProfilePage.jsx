import React from 'react'

function ProfilePage({currentUser,handleLogout}) {
  return (
    <div>
      <h1>This is Profile Page</h1>
      <h1>User Name:{currentUser}</h1>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default ProfilePage

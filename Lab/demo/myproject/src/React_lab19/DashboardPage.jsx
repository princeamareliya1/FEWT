import React from 'react'
import ProfilePage from './ProfilePage'

function DashboardPage({currentUser,handleLogout}) {
  return (
    <div>
      <h1>This is Dashboard Page</h1>
        <ProfilePage currentUser={currentUser} handleLogout={handleLogout}/>
    </div>
  )
}

export default DashboardPage

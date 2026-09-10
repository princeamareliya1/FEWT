import React, { useState } from 'react'
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';

function AppContent() {
    const [currentUser,setCurrentUser] = useState(null);
    const handleLogin = (user)=>{
      setCurrentUser(user);
    }
    const handleLogout=()=>{
      setCurrentUser(null);
    }
  return (
    <div>
      {currentUser ?
      (<DashboardPage currentUser={currentUser} handleLogout={handleLogout}/>):
      (<LoginPage handleLogin={handleLogin}/>)}
    </div>
  )
}

export default AppContent

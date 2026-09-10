import React from 'react'

function EventHandling() {
    function handleckick(){
        alert("Button Clicked");
    }
  return (
    <>
        <button onClick={handleckick}>Click Me</button>
    </>
  )
}

export default EventHandling

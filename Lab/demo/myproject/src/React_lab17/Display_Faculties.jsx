import React from 'react'

function Display_Faculties() {
    const facutly = [
        {
            name: "abcBVF",
            id: 12354,
            age: 32
        },
        {
            name:"uvdvfdh",
            id: 65354,
            age: 78
        },
        {
            name:"fjbCSen",
            id: 54233,
            age: 56
        }];
  return (
    <div>
      <table border={2}>
        <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Age</th>
        </tr>
        {facutly.map((faculty,index)=>(
            <tr>
                <td key={index}>{faculty.name}</td>
                <td key={index}>{faculty.id}</td>
                <td key={index}>{faculty.age}</td>
            </tr>
        ))}
      </table>
    </div>
  )
}

export default Display_Faculties

import React from 'react'

function Display_Student() {
    const student = [
        {
            name:"Rahul Sharma",
            age:20,
            gender:"Male",
            email:"rahul@example.com",
            phone:5115343414,
            course:"Computer Science",
            year: 2,
            rollNo: 12
        },
                {
            name:"Rahul Sharma",
            age:20,
            gender:"Male",
            email:"rahul@example.com",
            phone:5115343414,
            course:"Computer Science",
            year: 2,
            rollNo: 12
        },
                {
            name:"Rahul Sharma",
            age:20,
            gender:"Male",
            email:"rahul@example.com",
            phone:5115343414,
            course:"Computer Science",
            year: 2,
            rollNo: 12
        },
                {
            name:"Rahul Sharma",
            age:20,
            gender:"Male",
            email:"rahul@example.com",
            phone:5115343414,
            course:"Computer Science",
            year: 2,
            rollNo: 12
        }
    ]
  return (
    <div>
        <table border={2}>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>gender</th>
                <th>email</th>
                <th>phone</th>
                <th>course</th>
                <th>year</th>
                <th>rollNO</th>
            </tr>
        {student.map((student,index)=>(
            <tr>
                <td key={index}>{student.name}</td>
                <td key={index}>{student.age}</td>
                <td key={index}>{student.gender}</td>
                <td key={index}>{student.email}</td>
                <td key={index}>{student.phone}</td>
                <td key={index}>{student.course}</td>
                <td key={index}>{student.year}</td>
                <td key={index}>{student.rollNo}</td>
            </tr>
        ))}
        </table>
    </div>
  )
}

export default Display_Student

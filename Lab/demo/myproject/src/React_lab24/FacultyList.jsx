import React, { useEffect, useState } from 'react'
import "./FacultyList.css"

function FacultyList() {
    const [facultyList, setFaculty] = useState([]);
    const api_URL = "https://6aaa88edff4dd5698b4ea745.mockapi.io/Faculty";
    useEffect(() => {
        fetch(api_URL).then((res) => res.json()).then((res) => setFaculty(res));
    }, []);

    return (
        <div className='faculty-container'>
            <h1>Faculty List</h1>
            <div className='card-container'>
                {
                    facultyList.map((faculty) => (
                        <div className='faculty-card' key={faculty.FacultyID}>
                            <img src={faculty.FacultyImage} alt={faculty.FacultyName} className='faculty-image' />
                            <div className='faculty-details'>
                                <h2>{faculty.FacultyName}</h2>
                                <p>
                                    <strong>ID:</strong> {faculty.FacultyID}
                                </p>
                                <p>
                                    <strong>Experience:</strong>{faculty.FacultyExp}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FacultyList

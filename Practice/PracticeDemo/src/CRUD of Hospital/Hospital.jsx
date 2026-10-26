import { useState, useEffect } from 'react';

function Hospital() {
    const apiURL = "https://api.com/hospitals";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then(res => res.json)
            .then(res => setData(res))
    });

    function deleteHospital(id) {
        fetch(apiURL + "/" + id, { method: "DELETE" })
            .then(() => setData(data.filter(h => h.HospitalId !== id)))
    }

    function insertHospital(newHospital) {
        fetch(apiURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newHospital)
        });
    }

    return (
        <table>
            <tr>
                <th>HospitalId</th>
                <th>HospitalName</th>
                <th>HospitalMobile</th>
                <th>HospitalAddress</th>
                <th>HospitalCity</th>
                <th>Action</th>
            </tr>
            {data.map(h => (
                <tr key={h.HospitalId}>
                    <td>{h.HospitalId}</td>
                    <td>{h.HospitalName}</td>
                    <td>{h.HospitalMobile}</td>
                    <td>{h.HospitalAddress}</td>
                    <td>{h.HospitalCity}</td>
                    <tr>
                        <button onClick={() => deleteHospital(h.HospitalId)}>
                            Delete
                        </button>
                    </tr>
                </tr>
            ))}
        </table>
    )
}

export default Hospital;
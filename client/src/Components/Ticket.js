import React, { useEffect, useState } from 'react';

const Ticket = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/Ticket")
            .then((res) => res.json()) // Parse the response as JSON
            .then((responseData) => {
                setData(responseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Add an empty dependency array to useEffect to run it only once

    return (
        <div className="container text-center mt-4">
            <div className="border border-dark p-4 " style={{ width: "1000px" }}>
                <h2>Ticket Information</h2>
                <div className="row">
                    {data.map((item) => (
                        <>
                        <div key={item._id} className="col-md-6 col-12 ml-0">
                            <p><strong>Bus ID:</strong> {item._id}</p>
                            <p><strong>Name:</strong> {item.Name}</p>
                            <p><strong>Gender:</strong> {item.Gender}</p>
                            <p><strong>Age:</strong> {item.Age}</p>
                            <p><strong>Email:</strong> {item.Email}</p>
                        </div>
                        <div className="col-md-6 col-12 ">
                            <div >
                                <p><strong>Mobile No:</strong> {item.MobileNo}</p>
                                <p><strong>From Date:</strong> {item.FromDate}</p>
                                <p><strong>Seats:</strong> {item.Seats}</p>
                                <p><strong>Price:</strong> {item.Price}</p>
                            </div>
                    </div>
                       </> 
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ticket;

// import React, { useState,useEffect } from 'react';

// import "./Developer.scss";

// const Developer=()=>{


//  const [jobs, setJobs] = useState([]);

    
//     useEffect(() => {
//         const fetchData = async () => {
//             const baseUrl = "http://localhost:7070/api/users"; // Correct API endpoint
//             try {
//                 const response = await fetch(baseUrl);

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }

//                 const responseData = await response.json();

//                 // Extract data from responseData
//                 const data = responseData.map(job => ({
//                     id: job.id,
//                     title: job.title,
//                     description: job.description,
//                     domain: job.domain,
//                     rating: job.rating,
//                     price: job.price,
//                     img: job.img
//                 }));

//                 setJobs(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error.message);
//             }
//         };

//         fetchData();
//     }, []);
//     return(
//         <div className="container-fluid bg-dark">
//             <div className="row py-5 ">
//                     {jobs.map(job => (
//                         <div key={job.id} className="col-md-3 mb-3">
//                             <div className="card bg-black text-white card-rest">
                               
//                                 <img src="..." className="card-img-top card-image-job img-fluid" alt="Job Thumbnail" />
//                                 <div className="card-body bg-black text-white">
//                                     <h5 className="card-title domain">{job.title}</h5>
//                                     <p className="card-text desc">{job.description}</p>
//                                 </div>
//                                 <ul className="list-group list-group-flush">
//                                     <li className="list-group-item name bg-black text-white">{job.domain}</li>
//                                     <li className="list-group-item rating bg-black text-white">
//                                         Rating: {job.rating} 
//                                         {[...Array(Math.floor(job.rating))].map((_, index) => (
//                                             <i key={index} className="bi bi-star-fill stars mx-1 start"></i>
//                                         ))}
//                                     </li>
//                                     <li className="list-group-item price bg-black text-white">Price: {job.price}</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//         </div>
//     )
// }

// export default Developer


import React, { useState, useEffect } from 'react';
import "./Developer.scss";

const Developer = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = "http://localhost:7070/api/users"; // Correct API endpoint
            try {
                const response = await fetch(baseUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const responseData = await response.json();

                // Extract data from responseData
                const data = responseData.map(job => ({
                    id: job.id,
                    title: job.title,
                    description: job.description,
                    domain: job.domain,
                    rating: job.rating,
                    price: job.price,
                    img: job.img
                }));

                setJobs(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container-fluid bg-dark">
            <div className="row py-5">
                {isLoading ? (
                    <div className="text-white">Loading...</div>
                ) : (
                    jobs.map(job => (
                        <div key={job.id} className="col-md-3 mb-3">
                            <div className="card bg-black text-white card-rest">
                                <img src={job.img} className="card-img-top card-image-job img-fluid" alt="Job Thumbnail" />
                                <div className="card-body bg-black text-white">
                                    <h5 className="card-title domain">{job.title}</h5>
                                    <p className="card-text desc">{job.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item name bg-black text-white">{job.domain}</li>
                                    <li className="list-group-item rating bg-black text-white">
                                        Rating: {job.rating}
                                        {[...Array(Math.floor(job.rating))].map((_, index) => (
                                            <i key={index} className="bi bi-star-fill stars mx-1 start"></i>
                                        ))}
                                    </li>
                                    <li className="list-group-item price bg-black text-white">Price: {job.price}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Developer;

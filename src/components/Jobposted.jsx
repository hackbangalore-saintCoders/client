// import React,{ useState } from "react";
// import "./Jobposted.scss";
// import img from "./voiceover.webp";
// import img2 from "./bookcovers.webp"
// const Jobposted = () => {
//     // Sample data for testing
//     const jobsposted = [
//         {
//             id: 1,
//             title: "Job 1",
//             name: "Aman",
//             // Add other properties as needed
//         },
//         {
//             id: 2,
//             title: "Job 2",
//             name: "John",
//             // Add other properties as needed
//         },
//         {
//             id: 3,
//             title: "Job 3",
//             name: "Alice",
//             // Add other properties as needed
//         },
//         {
//             id: 4,
//             title: "Job 4",
//             name: "Emma",
//             // Add other properties as needed
//         },
//         {
//             id: 5,
//             title: "Job 5",
//             name: "David",
//             // Add other properties as needed
//         },
//         {
//             id: 6,
//             title: "Job 6",
//             name: "Sophia",
//             // Add other properties as needed
//         },
//         {
//             id: 7,
//             title: "Job 7",
//             name: "Oliver",
//             // Add other properties as needed
//         },
//         {
//             id: 8,
//             title: "Job 8",
//             name: "Charlotte",
//             // Add other properties as needed
//         },
//         {
//             id: 9,
//             title: "Job 8",
//             name: "Charlotte",
//             // Add other properties as needed
//         },
//         {
//             id: 10,
//             title: "Job 8",
//             name: "Charlotte",
//             // Add other properties as needed
//         },
//         {
//             id: 11,
//             title: "Job 8",
//             name: "Charlotte",
//             // Add other properties as needed
//         },
//         {
//             id: 12,
//             title: "Job 8",
//             name: "Charlotte",
//             // Add other properties as needed
//         },
//     ];
   
    
//     const applicantData = [
//         {
//             id: 1,
//             name: "Applicant 1",
//             img: img,
//             rating: 4.5, // Sample rating
//             // Add other properties as needed
//         },
//         {
//             id: 2,
//             name: "Applicant 2",
//             img: img2,
//             rating: 4.0, // Sample rating
//             // Add other properties as needed
//         },
//         {
//             id: 3,
//             name: "Applicant 3",
//             img: "applicant_image_url",
//             rating: 4.2, // Sample rating
//             // Add other properties as needed
//         },
//         {
//             id: 4,
//             name: "Applicant 4",
//             img: "applicant_image_url",
//             rating: 3.8, // Sample rating
//             // Add other properties as needed
//         },
//         {
//             id: 5,
//             name: "Applicant 5",
//             img: "applicant_image_url",
//             rating: 4.7, // Sample rating
//             // Add other properties as needed
//         },
//         {
//             id: 6,
//             name: "Applicant 6",
//             img: "applicant_image_url",
//             rating: 4.1, // Sample rating
//             // Add other properties as needed
//         },
//         {
//             id: 7,
//             name: "Applicant 7",
//             img: "applicant_image_url",
//             rating: 3.9, // Sample rating
//             // Add other properties as needed
//         },
//         {
//             id: 8,
//             name: "Applicant 8",
//             img: "applicant_image_url",
//             rating: 4.4, // Sample rating
//             // Add other properties as needed
//         },
//     ];


// const [selectedJobId, setSelectedJobId] = useState(1);

// const handleJobClick = (jobId) => {
//     setSelectedJobId(jobId);
// };

// const applicantsForSelectedJob = selectedJobId
//     ? applicantData.filter(applicant => applicant.jobId === selectedJobId)
//     : [];
    
//     return (
//         <div className="container-fluid bg-black py-5">
//         <div className="row  justify-content-center jobhosted">
//             <div className="col-md-3 sticky-top  left bg-dark text-white overflow-auto rounded-4 p-3" style={{ maxHeight: "calc(100vh - 100px)" }}>
//                 <h2 className="pb-3 px-3">Job Posted</h2>
//                 <div className="job-list">
//                     {jobsposted.map(job => (
//                         <div className="job-item" key={job.id} onClick={() => handleJobClick(job.id)}>
//                             <h5 className="jobtitle">{job.title}</h5>
//                             <hr />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="col-md-5 right bg-dark text-white sticky-top overflow-auto p-3" style={{ top: 0, maxHeight: "calc(100vh - 100px)" }}>
//                 <div className="applicant-details">
//                 {applicantsForSelectedJob.map((applicantItem, index) => (
//                         <div className="applicant-profile" key={index}>
//                             <img className="img-fluid applicantimg" src={applicantItem.img} alt="" />
//                             <div>
//                                 <h5>{applicantItem.name}</h5>
//                                 <div className="clientbtns my-2">
//                                     <button style={{fontWeight:"500"}}  className="p-2 mx-1 rounded cliendbtn  cv checkCV">Download CV <i style={{fontWeight:"600"}} class="text-white bi bi-arrow-down-square-fill"></i></button>
//                                     <button style={{fontWeight:"500"}}  className="p-2 mx-1 rounded cliendbtn  chat chatnow">Chat Now <i  style={{fontWeight:"600"}} class="text-white bi bi-chat-left-dots-fill"></i></button>
//                                     <button style={{fontWeight:"500"}}  className="p-2 mx-1 rounded cliendbtn    meeting">Meeting <i      style={{fontWeight:"600"}} class="text-white bi bi-camera-video-fill"></i></button>
//                                 </div>
//                             </div>
//                             <p className="rating">
//                                 Rating: {Array(Math.max(0, Math.floor(applicantItem.rating))).fill().map((_, index) => (
//                                     <i key={index} className="bi bi-star-fill stars mx-1"></i>
//                                 ))}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Jobposted;



// import React, { useState } from "react";
// import "./Jobposted.scss";
// import img from "./voiceover.webp";
// import img2 from "./bookcovers.webp";

// const Jobposted = () => {
//     // Sample data for testing
//     const jobsposted = [
//         {
//             id: 1,
//             title: "Job 1",
//             name: "Aman",
//             // Add other properties as needed
//         },
//         {
//             id: 2,
//             title: "Job 2",
//             name: "John",
//             // Add other properties as needed
//         },
//         {
//             id: 3,
//             title: "Job 3",
//             name: "Alice",
//             // Add other properties as needed
//         },
//         // Add more jobs as needed
//     ];

//     const applicantData = [
//         {
//             id: 1,
//             jobId: 1,
//             name: "Applicant 1",
//             img: img,
//             rating: 4.5, // Sample rating
//             // Add other properties as needed
//         },
//         {
//             id: 2,
//             jobId: 1,
//             name: "Applicant 2",
//             img: img2,
//             rating: 4.0, // Sample rating
//             // Add other properties as needed
//         },
//         // Add more applicants as needed
//     ];

//     const [selectedJobId, setSelectedJobId] = useState(null);

//     const handleJobClick = (jobId) => {
//         setSelectedJobId(jobId);
//     };

//     const applicantsForSelectedJob = selectedJobId
//         ? applicantData.filter(applicant => applicant.jobId === selectedJobId)
//         : [];

//     return (
//         <div className="container-fluid bg-black py-5">
//             <div className="row justify-content-center jobhosted">
//                 <div className="col-md-3 sticky-top left bg-dark text-white overflow-auto rounded-4 p-3" style={{ maxHeight: "calc(100vh - 100px)" }}>
//                     <h2 className="pb-3 px-3">Job Posted</h2>
//                     <div className="job-list">
//                         {jobsposted.map(job => (
//                             <div className="job-item" key={job.id} onClick={() => handleJobClick(job.id)}>
//                                 <h5 className="jobtitle">{job.title}</h5>
//                                 <hr />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-md-5 right bg-dark text-white sticky-top overflow-auto p-3" style={{ top: 0, maxHeight: "calc(100vh - 100px)" }}>
//                     <div className="applicant-details">
//                         {applicantsForSelectedJob.map((applicantItem, index) => (
//                             <div className="applicant-profile" key={index}>
//                                 <img className="img-fluid applicantimg" src={applicantItem.img} alt="" />
//                                 <div>
//                                     <h5>{applicantItem.name}</h5>
//                                     <div className="clientbtns my-2">
//                                         <button style={{ fontWeight: "500" }} className="p-2 mx-1 rounded cliendbtn  cv checkCV">Download CV <i style={{ fontWeight: "600" }} class="text-white bi bi-arrow-down-square-fill"></i></button>
//                                         <button style={{ fontWeight: "500" }} className="p-2 mx-1 rounded cliendbtn  chat chatnow">Chat Now <i style={{ fontWeight: "600" }} class="text-white bi bi-chat-left-dots-fill"></i></button>
//                                         <button style={{ fontWeight: "500" }} className="p-2 mx-1 rounded cliendbtn    meeting">Meeting <i style={{ fontWeight: "600" }} class="text-white bi bi-camera-video-fill"></i></button>
//                                     </div>
//                                 </div>
//                                 <p className="rating">
//                                     Rating: {Array(Math.max(0, Math.floor(applicantItem.rating))).fill().map((_, index) => (
//                                         <i key={index} className="bi bi-star-fill stars mx-1"></i>
//                                     ))}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Jobposted;



import React, { useState } from "react";
import "./Jobposted.scss";
import img from "./voiceover.webp";
import img2 from "./bookcovers.webp"

const Jobposted = () => {
    // Sample data for testing
    const jobsposted = [
        {
            id: 1,
            title: "Job 1",
            name: "Aman",
            // Add other properties as needed
        },
        {
            id: 2,
            title: "Job 2",
            name: "John",
            // Add other properties as needed
        },
        {
            id: 3,
            title: "Job 3",
            name: "Alice",
            // Add other properties as needed
        },
        {
            id: 4,
            title: "Job 4",
            name: "Emma",
            // Add other properties as needed
        },
        {
            id: 5,
            title: "Job 5",
            name: "David",
            // Add other properties as needed
        },
        {
            id: 6,
            title: "Job 6",
            name: "Sophia",
            // Add other properties as needed
        },
        {
            id: 7,
            title: "Job 7",
            name: "Oliver",
            // Add other properties as needed
        },
        {
            id: 8,
            title: "Job 8",
            name: "Charlotte",
            // Add other properties as needed
        },
        {
            id: 9,
            title: "Job 8",
            name: "Charlotte",
            // Add other properties as needed
        },
        {
            id: 10,
            title: "Job 8",
            name: "Charlotte",
            // Add other properties as needed
        },
        {
            id: 11,
            title: "Job 8",
            name: "Charlotte",
            // Add other properties as needed
        },
        {
            id: 12,
            title: "Job 8",
            name: "Charlotte",
            // Add other properties as needed
        },
    ];
   
    const applicantData = [
        {
            id: 1,
            jobId: 1, // Added jobId for each applicant
            name: "Applicant 1",
            img: img,
            rating: 4.5, // Sample rating
            // Add other properties as needed
        },
        {
            id: 2,
            jobId: 1, // Added jobId for each applicant
            name: "Applicant 2",
            img: img2,
            rating: 4.0, // Sample rating
            // Add other properties as needed
        },
        {
            id: 3,
            jobId: 2, // Added jobId for each applicant
            name: "Applicant 1 for Job 2",
            img: "applicant_image_url",
            rating: 4.2, // Sample rating
            // Add other properties as needed
        },
        {
            id: 4,
            jobId: 2, // Added jobId for each applicant
            name: "Applicant 2 for Job 2",
            img: "applicant_image_url",
            rating: 3.8, // Sample rating
            // Add other properties as needed
        },
        // Add more applicants as needed
    ];
    

    const [selectedJobId, setSelectedJobId] = useState(1); // Set default jobId to 1

    const applicantsForSelectedJob = applicantData.filter(applicant => applicant.jobId === selectedJobId);
    
    return (
        <div className="container-fluid bg-black py-5">
            <div className="row  justify-content-center jobhosted">
                <div className="col-md-3 sticky-top  left bg-dark text-white overflow-auto rounded-4 p-3" style={{ maxHeight: "calc(100vh - 100px)" }}>
                    <h2 className="pb-3 px-3">Job Posted</h2>
                    <div className="job-list">
                        {jobsposted.map(job => (
                            <div className="job-item" key={job.id} onClick={() => setSelectedJobId(job.id)}>
                                <h5 className="jobtitle">{job.title}</h5>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-5 right bg-dark text-white sticky-top overflow-auto p-3" style={{ top: 0, maxHeight: "calc(100vh - 100px)" }}>
                    <div className="applicant-details">
                        {applicantsForSelectedJob.map((applicantItem, index) => (
                            <div className="applicant-profile" key={index}>
                                <img className="img-fluid applicantimg" src={applicantItem.img} alt="" />
                                <div>
                                    <h5>{applicantItem.name}</h5>
                                    <div className="clientbtns my-2 d-flex justify-content-between">
                                        <div>
                                        <button style={{fontWeight:"500"}}  className="p-2 mx-1 rounded cliendbtn  cv checkCV">Download CV <i style={{fontWeight:"600"}} class="text-white bi bi-arrow-down-square-fill"></i></button>
                                        </div>
                                        <div>
                                        <button style={{fontWeight:"500"}}  className="mx-3 rounded cliendbtn  rightsidecliendbtn chat chatnow"><i  style={{fontWeight:"600"}} class="text-white bi bi-chat-left-dots-fill"></i></button>
                                        <button style={{fontWeight:"500"}}  className="mx-3 rounded cliendbtn  rightsidecliendbtn   meeting"> <i      style={{fontWeight:"600"}} class="text-white bi bi-camera-video-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <p className="rating">
                                    Rating: {Array(Math.max(0, Math.floor(applicantItem.rating))).fill().map((_, index) => (
                                        <i key={index} className="bi bi-star-fill stars mx-1"></i>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobposted;

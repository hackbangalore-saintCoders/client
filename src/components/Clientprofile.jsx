import "./Clientprofile.scss"
import React from "react";
import img from  "./bookcovers.webp"

const Clientprofile=()=>{
    return(
        <div className="container-fluid bg-black">
            <div className="row justify-content-center">
                <div className="col-md-9 bg-dark text-white d-flex flex-column clientpp justify-content-center">
                    <img src={img} alt="" />
                    <h3 className="text-center">Mritunjay Singh</h3>
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-around">
                            <div className="active">
                                Active
                            </div>
                            <div className="respondto">
                                Responds to
                            </div>
                            <div className="respondin">
                                Responds in
                            </div>
                            <div className="conversation">
                                Convertations
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientprofile;
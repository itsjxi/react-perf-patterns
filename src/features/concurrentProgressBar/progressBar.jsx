import React from "react";


const ProgressBar = ({task}) => {
    const {id , percentage, status, speed} = task

    return(
        <div>
            <div className="progress-bar">
                <div className="progress"
                    style={{width:`${percentage}%`}}>

                </div>
            </div>
            <span>{status}:- </span>
            <span>    {percentage}%</span>
        </div>
    )
}

export default ProgressBar
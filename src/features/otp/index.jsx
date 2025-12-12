import React, { useState } from "react";

export const OTPInput = (otpLength) => {
    const [value, setValue] = useState(Array.from(otpLength || 4))
    
    return (
        <div>
            {value.map((item, index)=> {
                return (
                    <input 
                        type="number"
                        key={index} 
                        value={item}/>
                )
            })}
        </div>
    )
}


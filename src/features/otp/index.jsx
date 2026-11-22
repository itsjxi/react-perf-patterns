import React, { useEffect, useRef, useState } from "react";      


const OTPComponent = ({otpLength = 6}) => {

    const [otpInputs, setOtpInputs] = useState(new Array(otpLength).fill(""))

   const otpRefs  = useRef([])

   console.log(otpRefs)

    const handleKeyDown = (e, index) => {

        const key = e.key
        if(key === 'Backspace'){
            if(index < 0) {
                return
            }
            const cloneOtpInput = [...otpInputs]
            cloneOtpInput[index] = ''
            setOtpInputs(cloneOtpInput)
            index > 0 && otpRefs.current[index -1].focus()
        }
        if(isNaN(key)){
            return
        }
        

        const cloneOtpInput = [...otpInputs]
        cloneOtpInput[index] = key
        setOtpInputs(cloneOtpInput)
        index < otpInputs.length && otpRefs.current[index +1].focus()

    }

    const handlePaste = (e, index) => {
    //    const value =  e.clipboardData.getData("text")
    //    if(isNaN(value)){
    //         return
    //    }
    //    const pasteOtp = value.toString().split("").map(Number)
    //    const cloneOtpInput = [...otpInputs]
    //    cloneOtpInput.splice(index, 0, ...pasteOtp);
    //    console.log(cloneOtpInput)
    // }
        e.preventDefault();

        const value = e.clipboardData.getData("text").trim();

        if (!/^\d+$/.test(value)) {
            return;
        }

        const pasteOtp = value.split("").map(Number);
        const cloneOtpInput = [...otpInputs];

        pasteOtp.forEach((digit, i) => {
            if (index + i < cloneOtpInput.length) {
            cloneOtpInput[index + i] = digit;
            }
        });
        const nextIndex = Math.min(
            index + pasteOtp.length,
            otpRefs.current.length - 1
        );

        otpRefs.current[nextIndex]?.focus();

        setOtpInputs(cloneOtpInput);
    };

    useEffect(()=>{
        otpRefs.current[0].focus()
    },[])

    return (
        <div className="otp-container">
            {otpInputs.map((value,index) =>{
                return <input
                    type="text"
                    key={index}
                    value={value}
                    ref = {(currentValue) => otpRefs.current[index] = currentValue}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={(value) => handlePaste(value,index)}
                />
            })}
        </div>
    )
}

export default OTPComponent
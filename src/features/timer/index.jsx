import React, { useState } from "react";

const Timer = () =>{
    const [time, setTime] = useState(10)
    return (
        <div>
            <h3>timer count down</h3>

            <button>Pause</button>
            <button>Play</button>
            <button>Reset</button>
        </div>
    )
}

export default Timer;
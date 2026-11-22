import React, { useEffect, useState } from "react";
import ProgressBar from "./progressBar";
import { useScheduler } from "./useScheduler";


const TASK = [{
    id: 1,
    status: 'pending',
    percentage: 30,
    speed: 10
}]

const ConcurrentProgressBar = () => {
    // const [tasks, setTasks] = useState(TASK)
    const{tasks, addTask} = useScheduler()


    return(
        <div className="concurrent-progress-bars">
            <h3>
                Concurrent Progress Bar
            </h3>
            <button onClick={addTask}>Add Task</button>
            {tasks.map((task,index) => {
                return (
                    <ProgressBar key={task.id} task={task}/>
                )
            })}
        </div>
    )
}

export default ConcurrentProgressBar
import { startTransition, useCallback, useEffect, useRef, useState } from "react"


const MAX_CONCURRENCY = 3


export const useScheduler = () => {
    const [tasks, setTasks] = useState([])
    const taskId = useRef(1)

    const addTask = () => {
        setTasks((prev)=>{
            return [...prev, {
                id: taskId.current++,
                status: 'queued',
                percentage: 0,
                speed: Math.max(Math.random()*10, 5)
            }]

        })
    }

    const startTask = useCallback((task) => {
        setTasks((prev) => prev.map((current) => {
               return current.id === task.id ? {...current, status: 'running'} : current
            })
        )

       let timer =  setInterval(()=> {
            setTasks((prev) => prev.map((current) => {
                if(current.id !== task.id){
                    return current
                }
                if(current.status === 'running'){
                    const newPercentage = current.percentage + current.speed
                    if(newPercentage >= 100){
                        clearInterval(timer)
                        return {
                            ...current,
                            status: 'completed',
                             percentage: 100
                        }
                    }
                    return {
                        ...current,
                        percentage: newPercentage
                    }
                }
            }))
        }, 100)

    },[])

    useEffect(()=>{
        const queuedTasks = tasks.filter(task => task.status === 'queued')
        const runningTasks = tasks.filter(task => task.status === 'running')
        const availableSlots = MAX_CONCURRENCY - runningTasks.length
        queuedTasks.slice(0, availableSlots).forEach(startTask)
    },[tasks, startTask])



    return{
        tasks,
        addTask,
        // startTask
    }
}
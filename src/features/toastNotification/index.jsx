import React, { useEffect, useRef, useState } from "react"
import './toast-notification.css'

const toastMessage = [
    {
        id: 1,
        label: 'Success',
        type: 'success',
        message: 'this task has been successful'

    },
    {
        id: 2,
        type: 'info',
        label: 'Info',
        message: 'this the info toast message'

    },
    {
        id: 3,
        type: 'warning',
        label: 'Warning',
        message: 'this is warning toast message'

    },
    {
        id: 1,
        type: 'error',
        label: 'Error',
        message: 'this is error toast message'

    },
]



const ToastContainer = ({}) => {

    const [toastList, setToastList] = useState([])

    const timerRef = useRef({})

    const handleToastButtonClick = (item) => {
        const id = new Date()
        setToastList((prev)=> [...prev, {...item, id}])
        const newtimer =  setTimeout(() => {
                                handleCloseToast(id)
                            }, 5000)

       timerRef.current[id] = newtimer

    }


    const handleCloseToast = (id) => {
    
         setToastList((prev) => {
            const newToastList = prev.filter((item,index) => item.id !== id)
            return newToastList
         })
             clearTimeout(timerRef.current[id])
        delete timerRef.current[id]

    }

    return (
        <div className="container">
            <div className="toast-container">
            {toastList.map((item,index)=>(
                <div className={`toast toast-${item.type}`} key={item.label}>
                    <span>{item.message}</span>
                    <span onClick={()=> handleCloseToast(item.id)}>x</span>
                </div>
            ))}

            </div>
            <div className="toast-buttons">
                {toastMessage.map((item,index) => (
                    <button className=  {`toast-button-${item.type}`}
                        onClick={() => handleToastButtonClick(item)}
                        key={item.type}
                    >
                        {item.label}
                    </button>
            ))}
            </div>
          
        </div>
    )
}

export default ToastContainer
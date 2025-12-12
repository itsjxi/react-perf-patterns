import React from "react"
import './my-input.css'


export const MyInput = (props) => {

    const { value, onChange, type } = props

    return (
        <div className="my-input">
            <input
                type={type} 
                value={value} 
                onChange={onChange}/>
        </div>
    )

}
import React, { useCallback, useEffect, useState } from "react"
import { MyInput } from "../../components/input/my-input"
import { fetchAutoSuggestData, myDebounce } from "./utils"

const AutoSuggest = () => {
    const [value, setValue ] = useState('')
    const [suggestedData, setSuggestedData] = useState(null)

    const handleInputChange = (e) => {
        setValue(e.target.value)
        debounceData(e.target.value)
    }

    const fetchData  = async (value) =>{
        const response = await fetchAutoSuggestData(value)
        // console.log(response)

        if(value !== '' && value !== null){
            setSuggestedData(response.data)
        } else{
            setSuggestedData(null)
        }
    }

    const debounceData = useCallback(
           myDebounce((val) => fetchData(val), 1000)
    ,[])

    const renderSuggestedData = (data) => {

        return data.map((item, index)=>{
            return(
                <div key={`${item}-${index}`}>
                    <p>{item}</p>
                </div>
            )

        })

    }
    return (
        <div>
            <MyInput
                value = {value}
                type   = 'text'
                onChange = {(e) =>{ handleInputChange(e)}}
            />
            {suggestedData && renderSuggestedData(suggestedData)

            }

        </div>
    )
}

export default AutoSuggest
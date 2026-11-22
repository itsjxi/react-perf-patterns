import React, { useState } from "react";
import {fetchSuggestions} from './fetchSuggestions'
import { UseSearchQuery } from "./useSearchQuery";
import { UseDebounce } from "./useDebounce";

const AutoComplete = () => {
    const [query , setQuery] = useState('')
    const debounceQuery = UseDebounce(query, 500)
    const { data, status, error } = UseSearchQuery(debounceQuery, fetchSuggestions)

    const handleQueryChange = (e) => {
        const value = e.target.value
        setQuery(value)
    }

    return(
        <div>
            <h3>AutoComplete</h3>
            <input
                type = 'text'
                placeholder="sercah for query"
                onChange={(e)=> handleQueryChange(e)}
            />
            
            <ul>
                {data.length > 0 ? data.map(item => <li key ={item.id}>{item.name}</li>) : 
                status === 'LOADING' ? <li>Loading...</li> : ''}
            </ul>

        </div>
    )
}

export default AutoComplete;
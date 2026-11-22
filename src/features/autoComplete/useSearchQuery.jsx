import React, { useEffect, useState } from "react";
import { fetchSuggestions } from "./fetchSuggestions";


const STATUS = {
    IDEL: 'IDEAL',
    LOADING: 'LOADING',
    ERROR: "ERROR",
    SUCCESS: "SUCCESS"

}


export const UseSearchQuery = (query, fetchSuggestions) => {

    const [data, setData] = useState([])
    const [status, setStatus] = useState(STATUS.IDEL)
    const [error, setError] = useState(null)

    useEffect(() => {

        if(!query) {
            setData([])
            setStatus(STATUS.IDEL)
            setError(null)
            return;
        }

        setStatus(STATUS.LOADING)
        setError(null);
        const controller = new AbortController()


        async function fetchData(){

            try{
                const result = await fetchSuggestions(query, {signal: controller.signal})
                setData(result)
                setStatus(STATUS.SUCCESS)
            } catch(err) {
                if(err.name === 'AbortError'){
                    return
                }
                setError(err)
            }

        }

        fetchData()

        return (() => controller.abort())

    }, [query, fetchSuggestions])


    return {
        data,
        status,
        error
    }
 }
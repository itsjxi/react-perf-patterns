
import React, { useState, useEffect } from 'react'

export function useDebounce(value, delay = 500){
    const [debounceQuery, setDebounceQuery] = useState(value)


    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebounceQuery(value)
        }, delay)
        return () => clearTimeout(timerId)
    }, [value, delay])



    return debounceQuery
}
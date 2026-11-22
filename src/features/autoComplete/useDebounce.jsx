import React, { useEffect, useState } from "react";


export const UseDebounce = (query, delay = 500) => {
    const [debounceQuery, setDebounceQuery] = useState(query)


    useEffect(()=>{

        let timerId = setTimeout(()=>{
            setDebounceQuery(query)
        }, delay)

        return () => clearTimeout(timerId)

    }, [query, delay])


    return debounceQuery
}
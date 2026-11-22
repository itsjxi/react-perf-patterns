import React, { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce'

const TestDebounce = () => {

  const [value, setValue] = useState()
  const debouncedValue = useDebounce(value)



  const handleChange = (e) => {
    const value = e.target.value
    setValue(value)
  }
   const fetchApi = (value) => {
    console.log('API call with', value)
  }

  useEffect(()=>{
    fetchApi(debouncedValue)
  }, [debouncedValue])


  return (
    <div>
        <input 
          type='text' 
          placeholder= 'Type Something...' 
          value={value}
          onChange = {(e) => handleChange(e)} />
    </div>
  )
}

export default TestDebounce
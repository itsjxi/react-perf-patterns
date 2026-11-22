import {SEARCH_DATA} from './data'

export const fetchSuggestions = (query, {signal}) => {
    return new Promise((resolve,reject) => {
        const timerId = setTimeout(()=>{
            const result = SEARCH_DATA.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
            resolve(result)
        }, 1000)

       signal.addEventListener('abort', () => {
        clearTimeout(timerId)
        const error = new Error('Request aborted')
        error.name = 'AbortError'
        reject(error)
       })
    })
}
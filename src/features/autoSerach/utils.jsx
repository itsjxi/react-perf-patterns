import { FOOD_NAMES } from "./data"


export const fetchAutoSuggestData = (value) => {
    return new Promise(( resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
                data: filteredData(FOOD_NAMES, value)
            })
        }, 300)
    })
}

export const filteredData  = (data ,value) => {

    return data.filter((item) => item.toLowerCase().includes(value.toLowerCase()))

}

export const myDebounce = (fn, delay) => {
    let timerId;
    return function(...args){
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            fn.apply(this,args)
        }, delay)
    }
}
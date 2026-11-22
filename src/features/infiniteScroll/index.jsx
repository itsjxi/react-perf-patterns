import React, { useEffect, useRef, useState } from "react";

const PAGE_SIZE = 10;

const InfiniteScroll = ( ) => {
    const [page, setPage]  = useState(1)
    const [albumData, setAlbumData] = useState([])
    const [status, setStatus] = useState("idle")
    const [hasMore, setHasmore] = useState(true)

    const observerRef = useRef()
     const observerRef2 = useRef()

    const fetchAlbums = async () => {

        try{
            setStatus('loading')
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${PAGE_SIZE}`)
            const data = await response.json()
            if(data.length === 0){
                setHasmore(false)
            }

            setAlbumData((prev) => [...prev, ...data])
        } catch(err){
            console.log(err)
            setStatus('idle')
        } finally {
            setStatus('idle')
        }

    }

    useEffect(()=>{
        fetchAlbums()
    }, [page])

    useEffect(()=>{

        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && status !== 'loading' && hasMore){
                setPage(prev => prev + 1)
            }
        })

        if(observerRef.current){
            observer.observe(observerRef.current)
        }


        return () => observer.disconnect()

    },[albumData, status])

    return(
        <div className="infinite-scroll">
            <h3>Infinite Scroll</h3>
            <div>
                <ul>
                    {albumData.length > 0 &&
                        albumData.map((item, index) => <li key={item.id} ref={index === albumData.length - 1 ? observerRef : null}>
                            <bold>{index + 1}. </bold><h4>{item.title}</h4>
                            </li>)}
                    {status === 'loading' ? <div>Loading...</div> : null}
                </ul>
            </div>
            

        </div>
    )
}

export default InfiniteScroll
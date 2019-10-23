import React, { useState, useEffect } from 'react'
import getRaw from '../../services/getRaw'
import axiosWithAuth from '../../utils/axios'

// import RightSidebar from '../sidebar/RightSidebar'

export default () => {
    const [ data, setData ] = useState({})

    useEffect(() => {
        getRaw()
        .then(res => {
            console.log(res)
            setData(res.data)
        })
    }, [])

    return(
        <>
            <h1>hello</h1>
            <pre>{JSON.stringify(data, null, 10)}</pre>
        </>

    )
}
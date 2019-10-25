import React, { useState, useEffect, useContext } from 'react'
import ControlsContext from '../../contexts/ControlsContext'
import axios from '../../utils/axios'
import { getter, post } from '../../services/queryBackend'

export default () => {

    const { history, setHistory } = useContext(ControlsContext)
    const [ localHistory, setLocalHistory ] = useState([]) 

    useEffect (() => {
        getter()
        .then(res => console.log('RES',res))
    })

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     post(`query`, { 'queries': 'dakotah' })
    //     .then(res => {
    //         console.log('POST: ',res)
    //         setHistory([
    //             ...history, res.data
    //         ])
    //     })
    // }
    
    return (
        <ControlsContext.Consumer>
            {() => {
                return (
                    <>
                        <h1>{history}</h1>
                        <button onClick={console.log('post test, handle submit goes here')}>post test</button>
                    </>
                )
            }}
        </ControlsContext.Consumer>
    )
}
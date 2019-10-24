import React, { useEffect, useContext } from 'react'
import ControlsContext from '../../contexts/ControlsContext'
import axios from '../../utils/axios'

export default () => {

    const { history, setHistory } = useContext(ControlsContext)

    useEffect (() => {
        axios()
        .get('/history')
        .then(res => setHistory(res))
        .catch(err => console.log(err))
    })
    
    return (

        <ControlsContext.Consumer>
            {() => {
                return (
                    <h1>{history}</h1>
                )
            }}
        </ControlsContext.Consumer>

    )
}
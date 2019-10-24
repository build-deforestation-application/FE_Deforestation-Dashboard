import React from 'react'


export default ({ country, code, year }) => {
    // year = array of tuples 
    // country & code = values

    return (
        <table>
            <thead>
                {year.map(year => {
                    return <th>{year[0]}</th>
                })}
            </thead>
            <tbody>
                <tr>
                    {year.map(year => {
                        return <td>{year[1]}</td>
                    })}
                </tr>
            </tbody>
        </table>
    )
}
import React, { useState } from 'react'

const Dummy = ({ props }) => {
    console.log("props>>>", props)
    const [hideData, setHideData] = useState(false)
    console.log("hideData", hideData)
    const [select, setSelect] = useState(false)
    console.log("select", select)

    const checkme = () => {
        setSelect(true)
    }
    const handleClickhide = () => {
        setHideData(true)
    }
    return (
        <div>
            {
                !hideData ?
                    <li>
                        <input type="checkbox" onClick={checkme} />
                        {props}
                        {
                            select ?
                                <input type="checkbox" onClick={handleClickhide} /> : null
                        }
                    </li> : ''
            }
        </div>
    )
}

export default Dummy
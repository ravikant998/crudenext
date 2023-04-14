import React, { useEffect } from 'react'
import Dummy from './Dummy';

const ListingData = () => {
    const data = ['dummy', 'test', 'hello','demo','data'];
    // console.log(data)

    useEffect(() => {

    }, [])
    return (
        <div>
            <ul>
                {
                    data.map((element, index) => {
                        return (
                            <Dummy props={element} key={index} />

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListingData
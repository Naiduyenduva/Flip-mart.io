

import React from 'react'
import {speakerData} from '../data/speaker'

const Speaker = () => {
    const firstfiveImages = speakerData.slice(0,5)
    return (
        <>
        <h2>Speakers</h2>
         <div className='proSection'>
            {
                firstfiveImages.map((item)=>{
                    return(
                        <div className='imageBox'>
                            <img className='proImage' src={item.image} alt=''/>
                            <h2>{item.model}</h2>
                        </div>
                    )
                })
            }
        </div>
        </>
      )
    }

export default Speaker
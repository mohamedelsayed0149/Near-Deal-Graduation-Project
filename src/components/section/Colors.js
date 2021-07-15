import React from 'react'

function Color({colors}) {
    const prodColors = colors;
    return (
        <div className="colors">
        {
            prodColors.map((color,index) =>(
                <button key={index} style={{background: color}}></button>
            ))
        }
    </div>
    )
}

export default Color

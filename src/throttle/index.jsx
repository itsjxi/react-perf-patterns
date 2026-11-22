


import React from 'react'

function TestThrottle() {
  const mousePosition = useRef({x: null, y: null})

  const handleMouseMove = (e)
  return (
    <div>
        <div style= {{
            width: '300px',
            height: '300Px',
            border: '1px solid black'
        }}
         onMousemove = {(e) => handleMouseMove(e)}
        >

        </div>
    </div>
  )
}

export default TestThrottle
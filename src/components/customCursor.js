import React, {useEffect, useState} from "react"
import {Cursor} from "../styles/globalStyles"

//hooks
import {useGlobalStateContext} from "../context/globalContext"

const CustomCursor = () => {
    const {cursorType} = useGlobalStateContext()
    const [mousePosition,setMousePostion] = useState({
        x:400,
        y:400,
    })

    const onMouseMove = event => {
        const {pageX: x , pageY: y } = event;
        setMousePostion({x,y})
    }

    useEffect(() => {
       document.addEventListener('mousemove', onMouseMove)
        return () => {
           document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    return (
        <>
        <Cursor
        className={`${!!cursorType ? 'hovered' : ''} ${cursorType}`}
        style={{left: `${mousePosition.x}px`, top:`${mousePosition.y}px`}}
        />
        </>
    )
}

export default CustomCursor
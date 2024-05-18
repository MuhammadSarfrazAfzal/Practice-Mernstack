import { useState } from "react";
function Usestatehook() {
    const [color, setcolor] = useState('Red')
    return (
        <>
            <h1>Color is changed by Usestate hook:{color}</h1>
            <button onClick={() => {
                setcolor('Green')
            }}>Click Me:</button>
        </>
    )
}
export default Usestatehook;
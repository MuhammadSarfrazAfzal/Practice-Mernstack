export function Mappractice() {
    let arr1 = ["PUT", "UOG", "UOS", "IIIU"]
    return (
        <>
            <h3>List of University</h3>
            <ul>
                {arr1.map((items) => {
                    return <li>{items}</li>
                })}
            </ul>
        </>
    )
}
export function Filter(){
    let arr2 = [10, 3, 5, 6]
    return (
        <>
        <h3>I am trying to get elements by itrative methods</h3>
        <ul>
            {arr2.filter((el)=>{
                return <li>{el}</li>
            })}
        </ul>
        </>
    )
}
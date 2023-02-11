import React from "react"
import Header from "./Header"
import Travel from "./Travel"
import myDataArray from "./Data"


const App = () => {
    //console.log(myDataArray)
    const dataElement = myDataArray.map((item) => {
        return <Travel
        key ={item.id}
        {...item}
        />
    })


    return (
        <div>
            {/* <h1>Hello World</h1> */}
            <Header />
            {dataElement}

        </div>


    )
}
export default App
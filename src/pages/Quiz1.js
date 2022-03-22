import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Quiz1 = ({data,addPoints}) => {

    let randomNumbers = getRandomIntArray()
    let solutionInt = getRandomIntSolution()
    
    // const [point, setPoint] = useState(0)
    









    function getRandomIntArray() {

        let arrayNumber = []

        while(true) {
            let number = Math.floor(Math.random() * 250);

            if(!arrayNumber.includes(number)){
                arrayNumber.push(number)
            }

            if(arrayNumber.length == 5) {
               return arrayNumber
            }
        }
    }


    function getRandomIntSolution() {

        let number = Math.floor(Math.random() * 5);
        return randomNumbers[number]


    }
    
    

    function checkSolution(e) {
        if(e.target.className.replace('option',"") == solutionInt) {
            const optionClicked = document.querySelector("div."+e.target.className)
            optionClicked.style = "background-color:green;"
            removeClick()
            // setPoint(1)
            // addPoints()
            // console.log(point)
            const next = document.createElement('button')
            next.textContent = 'Next'
            const container = document.querySelector(".link1")
            container.appendChild(next)
        }
        else{
            const optionClicked = document.querySelector("div."+e.target.className)
            optionClicked.style = "background-color:red;"
            const rightOption = document.querySelector("div.option"+solutionInt)
            rightOption.style = "background-color:green;"
            removeClick()
            // setPoint(-1)
            // console.log(point)
            const next = document.createElement('button')
            next.textContent = 'Next'
            const container = document.querySelector(".link2")
            container.appendChild(next)
            
        }



    }



    function removeClick() {
        const options = document.querySelectorAll('p')
        options.forEach((option)=>{
            // option.replaceWith(option.cloneNode(true))
            option.style = "pointer-events:none"
        })

        // const title = document.querySelector('h2')
        // title.replaceWith(title.cloneNode(true))
    }
    

    return ( 
        <div className="quiz-container">
            {/* <h1>ciao</h1> */}
            {(data)? <h2>{data[solutionInt].capital} is the capital of:</h2> : null}
            {/* {(data)? data[randomNumbers[0]].altSpellings[1] : null} */}
            
            {(data)? randomNumbers.map((number,index)=>{return <div className={"option" + number}>
                <p className={"option" + number} onClick={(e)=>{checkSolution(e)}}>{data[randomNumbers[index]].name.common}</p>
            </div>}) : null}
            <Link to="/2" className="link1" onClick={addPoints}></Link>
            <Link to="/points" className="link2"></Link>
            
        </div>
     );
}
 
export default Quiz1;
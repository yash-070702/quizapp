import React, { useState } from 'react'
import questions from "./Data";
import {toast} from "react-hot-toast";
import "./quiz.css"
const Quiz = () => {

const [isDisabled, setIsDisabled] = useState(false);
const [name,setName]=useState("");
const [index,setIndex]=useState(0);
const [selectedValue, setSelectedValue] = useState(false);
const [checkedOption,setCheckedOption]=useState(null);
const [result,setResult]=useState(false);
const [score,setScore]=useState(0);

    let question=questions[index];

    function nameHandler(e){
e.preventDefault();
setName(e.target.elements.inputName.value);
console.log(name);
    }

    function resetHandler(){
      setResult(false);
      setScore(0);
      setIndex(0);
      setIsDisabled(false);
      setSelectedValue(false);
    }

    function printHandler(e){
      if(e.target.value===question.ans){
      console.log(true);
   setIsDisabled(true);
   toast.success("Correct Answer");
   setScore(score+1);
    }
      

      else{
      console.log(false);
      toast.error(`Wrong Answer The correct answer is ${question.ans}`);
      setIsDisabled(true);
  
      }
setCheckedOption(e.target.id);
    }

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
  };

    function rightquesHandler()
    {
  
      setIsDisabled(false);
       setIndex(index+1);
       
    }

  function displayHandler(){
    setResult(true);
    console.log(score);
  }  
  return (
    <div className='container h-[100vh] flex flex-col justify-center items-center relative  w-[100vw]'>
       <h1 className='md:text-4xl lg:text-8xl text-4xl absolute top-5 text-white font-semibold mx-auto'>Quiz App</h1>

{
  (name.length>0)?(
    <div className='flex'>
    {result?(<div className='flex mx-5   flex-col border-4 rounded-xl justify-center items-center gap-10 '><p className='text-white  xs:text-2xl lg:text-3xl font-semibold p-8 '>{name} You Scored {score} out of {questions.length}</p> 
    <button className='border-white text-white font-semibold text-xl  mb-6 px-10 py-3  border-4 rounded-lg' onClick={resetHandler}>Reset</button></div>
 )
 :
 (<div className=' bg-yellow-900 container2 border-4 left-16 text-white font-semibold absolute top-36  rounded-lg' >
    
   
    <div className="main flex mt-[100px] gap-[50px]"> 
   
    <div className="  w-[700px] p-4 flex flex-col gap-3">

    <h1>Question {question.id}</h1>
    <p>{question.question}</p>
    
    <div className="option flex flex-col mt-10 gap-3">
    
    <div>
    <input type="radio" id="ques1.1" name="ques1"  checked={selectedValue === `${question.opt1}`}  disabled={isDisabled}  value={question.opt1} onChange={handleChange} onClick={printHandler}/>
        <label htmlFor="ques1.1" className="ml-2">{question.opt1}.</label>
    </div>
       
    <div>
    <input type="radio" id="ques1.2" name="ques1"  disabled={isDisabled}  value={question.opt2} checked={selectedValue === `${question.opt2}`} onChange={handleChange} onClick={printHandler}   />
        <label htmlFor="ques1.2" className="ml-2">{question.opt2}.</label>
    </div>

<div>
  <input type="radio" id="ques1.3" name="ques1"  disabled={isDisabled} value={question.opt3} checked={selectedValue === `${question.opt3}`} onChange={handleChange}  onClick={printHandler} />
<label htmlFor="ques1.3" className="ml-2">{question.opt3}.</label>
     </div>
     
        
    <div >
    <input type="radio" id="ques1.4" name="ques1"  disabled={isDisabled}  value={question.opt4} checked={selectedValue === `${question.opt4}`} onChange={handleChange}  onClick={printHandler} />
        <label htmlFor="ques1.4" className="ml-2">{question.opt4}.</label>
    </div>
    
    </div>
    </div>
    
    </div>

    <center className=''> 
         {
            (index>(questions.length-2))?(<button  className="  button py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400" onClick={displayHandler} >Finish</button>):(<button  className="button py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400" onClick={rightquesHandler}>Next</button>)
        }
        </center>

<center><p className='my-5'>{question.id} out of {questions.length} Questions</p></center>

</div>)}
</div>):(
<div>
  <center><form className='form-container' onSubmit={nameHandler}>
    <input type='text' name='inputName'  placeholder='Enter Your Name'/>
  </form></center>
  </div>)
}
<footer className="footer absolute bottom-1 text-white font-bold lg:text-2xl">
        <center><p>&copy; 2024 Yash Aggarwal . All Rights Reserved.</p></center>
    </footer>
    </div>
  )
}

export default Quiz

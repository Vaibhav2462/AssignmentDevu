import React, { useState } from 'react'

function Main() {
    const dropdown = [18,19,20,21,22,23,24,25,26,27,28,29,30]
    const [name,changeName] = useState("N/A")
    const [age,changeAge] = useState("N/A")
    const [gender,changeGender] = useState("N/A")
    const [isClicked,changeClick] = useState(false)
    const [gen,changeGen] = useState("N/A")
    function getGender(e){
        changeGender(e.target.value)
    }
    function getDetails(){
        let name = document.getElementById("name").value
        let age = document.getElementById("age").value
        changeName(name)
        changeAge(age)
        changeGen(gender)
        changeClick(true)
    }
  return (
    <>
    <div className='main'>
    <div className='form'>
        <div className='field'>
            <span>Name :</span>
            <input id= "name" type="text" className='textIP' placeholder='Enter Your Name ...'/>
        </div>
        <div className='field'>
        <span>Track :</span>
            <input type="text"  className='textIP'  placeholder='Enter Your Track ...'/>
        </div>
        <div className='field'>
            <span>Age :</span>
            <select name="age" id="age" className='selectAge'>
                {
                    dropdown.map((val)=>{
                        return <option value={val}>{val}</option>
                    })
                }
            </select>
        </div>
        <div className='field'>
            <span>Gender :</span>
            <div className= 'radioBTN'>
            <div >
           <input type="radio" id="male" name="gender" value="Male" onChange={getGender} />
           <label for="male">Male</label>
           </div>
           <div>
           <input type="radio" id="female" name="gender" value="Female" onChange={getGender}/>
           <label for="female">Female</label>
           </div>
           <div>
           <input type="radio" id="other" name="gender" value="Other" onChange={getGender}/>
           <label for="other">Other</label>
           </div>
           </div>
        </div>
        <button onClick={getDetails} className='btn'>Submit</button>
    </div>
    {isClicked?<>
        <div className='form'>
            <div className='field'>
            <span>Name :</span>
            <span className='details'>{name}</span>
            </div>
            <div className='field'>
            <span>Age :</span>
            <span className='details'>{age}</span>
            </div>
            <div className='field'>
            <span>Gender :</span>
            <span className='details'>{gen}</span>
            </div>
        </div>
    </>:<>
        <div className='form'>
            <div className='field'>
            <span>Name :</span>
            <span className='details'>{name}</span>
            </div>
            <div className='field'>
            <span>Age :</span>
            <span className='details'>{age}</span>
            </div>
            <div className='field'>
            <span>Gender :</span>
            <span className='details'>{gen}</span>
            </div>
        </div>
    </>}
    </div>
    </>
  )
}

export default Main
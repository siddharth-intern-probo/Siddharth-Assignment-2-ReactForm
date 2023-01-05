import React, {useState} from 'react';

function Form() {
	const [userName , setUserName] = useState('');
	const [name , setName] = useState('');
	const [phone , setPhone] = useState('');
	const [password , setPassword] = useState('');
	const [confPassword , setConfPassword] = useState('');

	// function to update state of userName with
	// value enter by user in form
	const handleUserNameChange =(e)=>{
	    setUserName(e.target.value);
	}
	// function to update state of name with value
	// enter by user in form
	const handleNameChange =(e)=>{
	    setName(e.target.value);
	}
	// function to update state of phone with value
	// enter by user in form
	const handlePhoneChange =(e)=>{
	    setPhone(e.target.value);
	}
	// function to update state of password with
	// value enter by user in form
	const handlePasswordChange =(e)=>{
	    setPassword(e.target.value);
	}
	// function to update state of confirm password
	// with value enter by user in form
	const handleConfPasswordChange =(e)=>{
	    setConfPassword(e.target.value);
	}
	// below function will be called when user
	// click on submit button .
	const handleSubmit=(e)=>{
        if(password!=confPassword)
        {
            // if 'password' and 'confirm password'
            // does not match.
            alert("password Not Match");
        }
        else{
            // display alert box with user
            // 'name' and 'email' details .
            alert('A form was submitted with UserName: "' + userName + '", Name: "'+name +'" and Phone: "' + phone + '"');
        }
        e.preventDefault();
	}

return(
	<div className="Form">
	    <form style={{padding: "250px 0"}} onSubmit={(e) => {handleSubmit(e)}}>
	        {/*when user submit the form , handleSubmit() function will be called .*/}
            <label >
            User Name:
            </label><br/>
            <input type="text" value={userName} required onChange={(e) => {handleUserNameChange(e)}} /><br/>
                { /*when user writea in username input box, handleUserNameChange() function will be called. */}
            <label >
            Name:
            </label><br/>
            <input type="text" value={name} required onChange={(e) => {handleNameChange(e)}} /><br/>
                { /*when user write in name input box, handleAgeChange() function will be called. */}
            <label>
            Phone:
            </label><br/>
            <input type="text" value={phone} required onChange={(e) => {handlePhoneChange(e)}} /><br/>
                {/* when user write in phone input box, handlePhoneChange() function will be called.*/}
            <label>
            Password:
            </label><br/>
            <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} /><br/>
                {/* when user write in password input box, handlePasswordChange() function will be called.*/}
            <label>
            Confirm Password:
            </label><br/>
            <input type="password" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}} /><br/>
                {/* when user write in confirm password input box, handleConfPasswordChange() function will be called.*/}
            <input type="submit" value="Submit"/>
	    </form>
	</div>
);
}

export default Form;

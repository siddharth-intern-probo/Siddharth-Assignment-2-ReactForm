import React from 'react';

function Form() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const userName = e.target.userName.value;
		const fullName = e.target.fullName.value;
		const phone = e.target.phone.value;
		const password = e.target.password.value;
		const confPassword = e.target.confPassword.value;
		if(password !== confPassword)
        {
            // if 'password' and 'confirm password' does not match.
            alert("password Not Match");
        }
        else{
            // display alert box with username, name and phone details .
            alert('A form was submitted with UserName: "' + userName + '", Name: "'+ fullName +'" and Phone: "' + phone + '"');
        }
	};

return(
	<div className="Form">
	    <form style={{padding: "250px 0"}} onSubmit={handleSubmit}>
	        {/*when user submit the form , handleSubmit() function will be called .*/}
            <label >
            	User Name:
            </label><br/>
            <input type="text" name="userName" required/><br/>
            <label >
            	Name:
            </label><br/>
            <input type="text" name="fullName" required/><br/>
            <label>
            	Phone:
            </label><br/>
            <input type="text" name="phone" required/><br/>
            <label>
           		Password:
            </label><br/>
            <input type="password" name="password" required /><br/>
            <label>
            	Confirm Password:
            </label><br/>
            <input type="password" name="confPassword" required/><br/>
            <input type="submit" value="Submit"/>
	    </form>
	</div>
);
}

export default Form;

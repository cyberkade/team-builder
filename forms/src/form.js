import React, {useState} from 'react';
// import {render} from 'react-dom';

const Form = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        role: '',
    });
    
    const [team, setTeam] = useState([]);

    const changeHandler = (e) => {
        setFormValues({  ...formValues, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        let newMember =[...team, {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role
        }]
        console.log(newMember);
        setTeam(newMember)
        setFormValues({name: '',email: '', role: ''})   
    }

    return (
        <div>
            <h1>Build a Team!</h1>
            {team.map((team, index) => (
                <div key={index} >
                    {console.log(team)}
                    Name: {team['name']}
                    Email: {team.email}
                    Role: {team.role}
                </div>
            ))}
            <form onSubmit={submit} >
                <label>
                    Name
                    <input
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    Email
                    <input
                        type='text'
                        name='email'
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    Role
                    <select name='role' onChange={changeHandler} value={formValues.role}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Front-End Engineer'>Front-End Engineer</option>
                        <option value='Back-End Engineer'>Back-End Engineer</option>
                        <option value='UX Designer'> UX Designer</option>
                        <option value='UI Designer'>UI Designer</option>
                    </select>
                </label>
                
                <input type='submit' value='Build It' />
            </form>
        </div>
    )   
}

export default Form;
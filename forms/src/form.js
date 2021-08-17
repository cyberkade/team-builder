import React, {useState} from 'react';
// import {render} from 'react-dom';

const Form = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        role: '',
    });
    const [team, setTeam] = useState([]);
    const [error, setError]= useState(null);

    const changeHandler = (e) => {
        setFormValues({  ...formValues, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        let newMembers =[...team, {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role
        }]
 
        if (!formValues.name || !formValues.email || !formValues.role){
            setError("Fill Out Every Field Please!");
            return;
        }
        console.log(team);
        setTeam(newMembers)
        setFormValues({name: '',email: '', role: ''}) 
        setError(null);  
    }

    return (
        <div>
            <h1>Build a Team!</h1>
            {error && <h2>{error}</h2>}
            <div className="teamCont">
                {team.map((team, index) => (
                    <div className="member" key={index} >
                        <h2>{team.role}</h2>
                        <h3>{team['name']}</h3>
                        <h4>{team.email}</h4>
                    </div>
                ))}
            </div>
            <form onSubmit={submit} >
                <label>
                    Name
                    <input
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={changeHandler}
                        placeholder="Enter Your Name"
                    />
                </label>
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={changeHandler}
                        placeholder="Enter Your Email"
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
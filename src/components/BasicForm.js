import { useRef, useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const nameChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const lastNameChangeHandler = e => {
    setEnteredLastName(e.target.value);
  };

  const emailChangeHandler = e => {
    setEnteredEmail(e.target.value);
  };


  const submitHandler = e => {
    e.preventDefault();

    const form = {
        enteredName,
        enteredLastName,
        enteredEmail
      };
    console.log(form);

    // Clear inputs
    setEnteredName('');
    setEnteredLastName('');
    setEnteredEmail('');
  };

  return (
    <form 
      onSubmit={submitHandler}
    >
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name'
            onChange={lastNameChangeHandler} 
            value={enteredLastName}
          />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
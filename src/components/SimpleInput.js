import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameRef = useRef();

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();

    if(!enteredName) return;
    console.log(enteredName);

    const enteredValue = nameRef.current.value;
    console.log(enteredValue);

    // Clear input
    setEnteredName('');
  };

    return (
      <form onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Your Name</label>
          <input 
            ref={nameRef}
            type='text' 
            id='name' 
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;
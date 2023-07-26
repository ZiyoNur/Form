import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  useEffect(() => {
    if(enteredNameIsValid){
      console.log("Name Input is Valid");
    }
  }, [enteredNameIsValid]);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();

    setEnteredNameIsTouched(true);

    // if(!enteredName) return;
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    };

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameRef.current.value;
    console.log(enteredValue);

    // Clear input
    setEnteredName('');
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={submitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input 
            ref={nameRef}
            type='text' 
            id='name' 
            onChange={nameChangeHandler}
            value={enteredName}
          />
          {nameInputIsValid && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;
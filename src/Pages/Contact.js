import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Contact() {
    const [name , setName] = useState('')
    const [list , setLinst] =useState([])
    const [check1, setcheck1] = useState(false);
    const [check2, setcheck2] = useState(false);
    const [check3, setcheck3] = useState(false);
    const navigate = useNavigate()

  const changeHnadler2 = () => {
    setcheck2(true);
  };
  const changeHnadler3 = () => {
    setcheck3(true);
  };
    const changeHandler = (event) =>{
        setcheck1(true);
        setName(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        if (check1 && check2 && check3) {
            navigate("/success");
            setLinst([...list , name])
            // alert(`Hello ${name} Thank You for Your Response`)
          } else {
            alert("please provide information");
        }
    }
  return (
    <div className="container my-5">
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={changeHandler}
            className="form-control"
            placeholder="Your Full Nmae"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control"
            onChange={changeHnadler2}
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={changeHnadler3}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Feedback</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button onClick={submitHandler} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

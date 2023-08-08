import React, { useState } from "react";
import "./SignUpForm.css";

function SignUpForm() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    location: "",
  });

  const [records, setRecords] = useState([]);
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://submit.free.beeceptor.com/v1/submit", {
      method: "POST",
      body: JSON.stringify({
        input: input,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      
    // console.log("below promise");
  };

  return (
    <>
      <div className="main_div">
        <form className="form" onSubmit={handleSubmit}>
          <h3>Let's get you started</h3>
          <label htmlFor="fullname">FullName</label>

          <input
            type="text"
            placeholder="Ade Tiger"
            onChange={handleInput}
            value={input.fullname}
            name="fullname"
            className="fullname"
            autoComplete="off"
          />

          <label htmlFor="email">Email address</label>

          <input
            type="email"
            placeholder="yourname@email.com"
            onChange={handleInput}
            value={input.email}
            className="email"
            name="email"
            autoComplete="off"
          />

          <label htmlFor="phone">Phone number</label>

          <input
            type="text"
            placeholder="9848******"
            onChange={handleInput}
            value={input.phone}
            className="phone"
            name="phone"
            autoComplete="off"
          />

          <label htmlFor="password">Create Password</label>

          <input
            type="password"
            placeholder=" *****"
            onChange={handleInput}
            value={input.password}
            className="password"
            name="password"
            autoComplete="off"
          />
          <p>
            Password must contain a minimum of 8 characters <br />
            Password must contain at least one symbol e.g. @, !
          </p>

          <label htmlFor="location">Location</label>

          <input
            type="text"
            placeholder="Select Location"
            onChange={handleInput}
            value={input.location}
            className="location"
            name="location"
            autoComplete="off"
          />

          <button className="sign-up">Sign Up</button>
          <p className="login">
            Already a user ?<span className="log">login</span>
          </p>
        </form>

        <div className="text">
          <nav>
            <li>Home</li>
            <li>Contact</li>
          </nav>
          <div className="quote">
            <h1 className="written-text">
              “Creativity is intelligence having fun”
            </h1>
            <h5>-Albert Einstein</h5>
          </div>
        </div>
      </div>
      <div>
        {records.map((curElem) => {
          return (
            <div className="mapp" key={curElem.id}>
              <p>{curElem.fullname}</p>
              <p>{curElem.email}</p>
              <p>{curElem.phone}</p>
              <p>{curElem.password}</p>
              <p>{curElem.location}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SignUpForm;

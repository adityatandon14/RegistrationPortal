import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react';




export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      
    `);
    
    event.preventDefault();
  }

  return (
    <div className="poora">
    <div className="p1">
    <form onSubmit={handleSubmit}>
      <h1>Coding</h1>
      
      <label>
        Name:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      <label>
        Hackerrank Id:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      
      

      


      <button>Submit</button>
    </form>
    </div>
<div classname="p2">
    <form onSubmit={handleSubmit}>
      <h1>Registration</h1>

      <label>
        Name:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      
      <label>
        Registration number:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
      <label>
        Learners Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      <h4> Select ur fields </h4>
      

      

     

      <button>Submit</button>
    </form>
    </div>
    </div>

  );
}

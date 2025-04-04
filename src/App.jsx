import React from "react";

const App = () => {
  const todo = { text: 'A brand new task', done: true }

  const mySkills = [
    { text: 'Learn JavaScript', done: true, comfort: 9, frontEnd: true, backend: true },
    { text: 'Learn JSX', done: false, comfort: 7, frontEnd: true, backend: false },
    { text: 'Learn HTML', done: true, comfort: 10, frontEnd: true, backend: false },
    { text: 'Learn CSS', done: true, comfort: 8, frontEnd: true, backend: false },
    { text: 'Master React', done: false, comfort: 7, frontEnd: true, backend: false },
    { text: 'Improve Modern JavaScript (ES6+)', done: true, comfort: 8, frontEnd: true, backend: true },
    { text: 'Deepen React Knowledge', done: false, comfort: 7, frontEnd: true, backend: false },
    { text: 'Practice Flexbox & Grid', done: true, comfort: 8, frontEnd: true, backend: false },
    { text: 'Learn Node.js', done: true, comfort: 7, frontEnd: false, backend: true },
    { text: 'Master Express.js', done: false, comfort: 7, frontEnd: false, backend: true },
    { text: 'Work with MongoDB & Mongoose', done: false, comfort: 7, frontEnd: false, backend: true },
    { text: 'Build RESTful APIs', done: true, comfort: 7, frontEnd: true, backend: true },
    { text: 'Enhance Git & GitHub Skills', done: true, comfort: 8, frontEnd: true, backend: true },
    { text: 'Practice CLI (Command Line)', done: true, comfort: 7, frontEnd: true, backend: true },
    { text: 'Deploy a Project on AWS EC2', done: false, comfort: 6, frontEnd: false, backend: true }
  ];

  const todos = [
    { text: 'Manufactura', done: true},
  ];

  const containerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    margin: '0 auto',
    maxWidth: '800px',
    textAlign: 'center'
  };

  const headerStyle = {
    fontSize: '36pt',
    marginBottom: '10px',
    textShadow: '2px 2px 5px #ccc'
  };

  const subheaderStyle = {
    fontSize: '24pt',
    marginBottom: '10px',
    textShadow: '2px 2px 5px #ccc'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  };

  const listItemStyle = {
    padding: '10px',
    backgroundColor: '#333',
    borderRadius: '10px',
    margin: '10px 0'
  };

  const paragraphStyle = {
    fontSize: '18pt',
    marginBottom: '20px'
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '5px solid #fff',
    margin: '20px 0'
  };

  return (
    <div style={containerStyle}>
      <img src="https://picsum.photos/200" alt="Profile Picture" style={imageStyle} />
      <h1 style={headerStyle}>Diana Wilson</h1>
      <p style={paragraphStyle}>Software Developer</p>

      <h2 style={subheaderStyle}>My Skills</h2>
      <ul style={listStyle}>
        {mySkills.map((todo, index) =>
          <li key={index} style={listItemStyle}>
            {todo.text}
          </li>
        )}
      </ul>

      <h2 style={subheaderStyle}>My Experience</h2>
      <ul style={listStyle}>
        {todos.map((todo, index) =>
          <li key={index} style={listItemStyle}>
            {todo.done ? `System Administrator - ${todo.text}` : todo.text}
          </li>
        )}
      </ul>

      <h2 style={subheaderStyle}>Education</h2>
      <p style={paragraphStyle}>{todo.done ? `Liceum 3 ` : todo.text }</p>
      <p style={paragraphStyle}>{todo.done ? `Software Engineering Bootcamp - General Assembly ` : todo.text }</p>
    </div>
  );
}

export default App;

// var React = require('react');
// var ReactDom = require('react-dom');
// ReactDom.render('what to show','where to show','call back function')
// ReactDom.render(<h1>Hello Aman!!</h1>,document.getElementById('root'))

// import React from 'react';
// import ReactDom from 'react-dom';
// ReactDom.render(<h1>Hello Aman!<br></br> How are you???</h1>, document.getElementById('root'));

// how browser understand above code
// import React from 'react';
// import ReactDom from 'react-dom';
// ReactDom.render(
//     React.createElement("h1",null,"Hello Aman!! How are you??"),document.getElementById("root")
// );


// by using pure js
let h1 = document.getElementById("h1");
h1.innerHTML = "Hello Aman!!How are you";
document.getElementById("root").appendChild(h1);
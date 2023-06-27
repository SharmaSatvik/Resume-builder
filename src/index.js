import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <div style={{textAlign: 'center'}} className='header-text'>Resume Data</div>
    <App number = {1} names="Satvik Sharma" phone={9569457217} companyname="Google LLC" duration="Jun 29 → Present " add="San Fransisco, USA" social="Instagram, LinkedIn" rank="Software Engineer" degreepg='MCA' degreeug='BCA' collegepg='IIT Bombay' collegeug="Lucknow University" schoolnames="CBSE _ 12th and 10th" school='G.S.V.M'/>
    <App number = {2} names="May Sharma" phone={9569457217} companyname="Google LLC" duration="Jun 2 → Present " add="San Fransisco, USA" social="Instagram, LinkedIn" rank="Software Engineer" degreepg='MCA' degreeug='BCA' collegepg='IIT Bombay' collegeug="Lucknow University" schoolnames="CBSE _ 12th and 10th" school='G.S.V.M'/>
    <App number = {3} names="Satvik Sharma" phone={9569457217} companyname="Google LLC" duration="Jun 29 → Present " add="San Fransisco, USA" social="Instagram, LinkedIn" rank="Software Engineer" degreepg='MCA' degreeug='BCA' collegepg='IIT Bombay' collegeug="Lucknow University" schoolnames="CBSE _ 12th and 10th" school='G.S.V.M'/>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

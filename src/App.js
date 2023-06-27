import './App.css';

function App({number, names, add, social, phone, companyname, duration, rank, degreepg = "Post Graduation:", collegepg, degreeug = "Under Graduation:", collegeug, school = "School Name:", schoolnames}) {
  return (
  <div className='container'>
    <h2><u>Resume - {number}</u></h2>
    <ul>
      <li>
        <strong>Personal Details: </strong>
        <ul>
          <li><u>Name:</u> {names}</li>
          <li><u>Contact Number:</u> {phone}</li>
          <li><u>Address:</u> {add}</li>
          <li><u>Social Network:</u> {social}</li>
        </ul>
      </li>
      <li>
      <strong>Experience Details: </strong><br /><br />
        <span><em><strong>{companyname} - {rank}</strong></em></span> 
        <br />
        {duration}
      </li>
      <li>
      <strong>Education Details: </strong>
        <ul>
          <li><u>{degreepg}</u> → {collegepg}</li>
          <li><u>{degreeug}</u> → {collegeug}</li>
          <li><u>{school}</u> → {schoolnames}</li>
        </ul>
      </li>
      
    </ul>
  </div>
  );
}

export default App;

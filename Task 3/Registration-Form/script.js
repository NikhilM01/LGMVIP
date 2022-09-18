const enrolledStudents = document.querySelector(".record");
const studentList = [];

const generateStudentCard = (details) => {
  enrolledStudents.insertAdjacentHTML(
    "afterbegin",
    `<div class="student-card">
      <img alt="Avatar" height="225px" src="https://joeschmoe.io/api/v1/random" width="225px" style="border: solid 2px black;background-color: #FA9494;  margin: 10px;" /> 
        
         <div class="form-group" style="padding:0;">
         <label> Name</label>
        <h3> ${details.name} </h3>
         </div>
      <div class="form-group" style="padding:0;">
      <label> Gender</label>
    <h3>  ${details.gender} </h3>
  </div>
      <div class="form-group" style="padding:0;">
      <label> Email</label>
    <h3>  ${details.email} </h3>
  </div>
      <div class="form-group" style="padding:0;">
       <label>College Name</label>
       <h3>  ${details.collegeName} </h3>
      </div>
      <div class="form-group" style="padding:0;">
                    <label> Skills</label>
                  <h3>  ${details.skills} </h3>
      </div>
    </div>`
  );
};

const studentAdded = (e) => {
  e.preventDefault();
  const details = {
    id: `${Date.now()}`,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    collegeName: document.getElementById("collegeName").value,
    gender: document.querySelector("input[name='gender']:checked").value,
    skills: document.querySelector("input[name='skills']:checked").value,
  };

  generateStudentCard(details);

  studentList.push(details);
  localStorage.setItem("studentList", JSON.stringify(studentList));
};

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", studentAdded);

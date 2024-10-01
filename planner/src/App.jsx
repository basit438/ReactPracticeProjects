import React, { useState, useEffect } from "react";
import SubjectForm from "./components/SubjectForm";
import ScheduleList from "./components/ScheduleList";
import "./App.css";

function App() {
  const [subjects, setSubjects] = useState([]);

  // Retrieve data from local storage on load
  useEffect(() => {
    const savedSubjects = JSON.parse(localStorage.getItem("subjects"));
    if (savedSubjects) {
      setSubjects(savedSubjects);
    }
  }, []);

  // Save data to local storage whenever subjects change
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = (subjectName, hours) => {
    setSubjects([...subjects, { name: subjectName, hours }]);
  };

  const updateHours = (index, change) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].hours += change;
    if (updatedSubjects[index].hours < 0) updatedSubjects[index].hours = 0; // Prevent negative hours
    setSubjects(updatedSubjects);
  };

  return (
    <div className="App">
      <h1>Education Planner</h1>
      <SubjectForm addSubject={addSubject} />
      <ScheduleList subjects={subjects} updateHours={updateHours} />
    </div>
  );
}

export default App;

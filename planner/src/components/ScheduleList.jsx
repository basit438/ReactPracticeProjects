import React from "react";

const ScheduleList = ({ subjects, updateHours }) => {
  return (
    <div>
      <h2>Study Schedule</h2>
      <ul>
        {subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <li key={index}>
              <span>{subject.name}: {subject.hours} hours</span>
              <button onClick={() => updateHours(index, -1)}>-</button>
              <button onClick={() => updateHours(index, 1)}>+</button>
            </li>
          ))
        ) : (
          <p>No subjects added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ScheduleList;

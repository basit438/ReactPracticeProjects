import React, { useState } from "react";

const SubjectForm = ({ addSubject }) => {
  const [subjectName, setSubjectName] = useState("");
  const [hours, setHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subjectName && hours >= 0) {
      addSubject(subjectName, parseInt(hours));
      setSubjectName("");
      setHours(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Study Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          required
          min="0"
        />
      </div>
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default SubjectForm;

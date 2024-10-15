import { useState } from "react";
import EmployeeListJson from "./Components/data.js";
import "./App.css";
import EmployeeList from "./Components/EmployeeList/EmployeeList.jsx";
import TeamList from "./Components/TeamList/TeamList.jsx";
function App() {
  const masterData = {
    EmployeeListData: EmployeeListJson,
    TeamListData: [],
    averageAge: 0,
  };

  const dispath = (action) => {
    //Add to team lsit
    if (action === "Add_to_team_list") {
      console.log("Add to team list");

      //Remove from team list


    } else if (action === "Remove_from_team_list") {
      console.log("Remove from team list");

      //Calculate average age
    } else if (action === "Calculate_average_age") {
      console.log("Calculate average age");

      //Sort by age

    } else if (action === "Sort_by_age") {
      console.log("Sort by age");
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center m-5">Employee Directory</h1>
      <div className="app-container flex flex-row gap-4 justify-center mt-5">
        {" "}
        {/* Style the container */}
        <EmployeeList 
        dispath={dispath}
        data={masterData.EmployeeListData } />
        <TeamList 
        dispath={dispath}
        data={masterData.TeamListData} />
      </div>
    </>
  );
}

export default App;

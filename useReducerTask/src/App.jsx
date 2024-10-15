import { useReducer, useState } from "react";
import EmployeeListJson from "./Components/data.js";
import "./App.css";
import EmployeeList from "./Components/EmployeeList/EmployeeList.jsx";
import TeamList from "./Components/TeamList/TeamList.jsx";
function App() {
  // const masterData = {
  //   EmployeeListData: EmployeeListJson,
  //   TeamListData: [],
  //   averageAge: 0,
  // };
  const reducerfn = (masterData , action) => {
    console.log(masterData, action);
    //Add to team lsit
    if (action.action === "Add_to_team_list") {
      // masterData.TeamListData.push(payload);
      return{
        ...masterData,
        TeamListData : [...masterData.TeamListData , action.payload]
      }
      //Remove from team list


    } else if (action.action === "Remove_from_team_list") {
      console.log("Remove from team list");

      //Calculate average age
    } else if (action.action === "Calculate_average_age") {
      console.log("Calculate average age");

      //Sort by age

    } else if (action.action === "Sort_by_age") {
      console.log("Sort by age");
    }
  };
  const [masterData , dispatch] = useReducer( reducerfn, {
    EmployeeListData: EmployeeListJson,
    TeamListData: [],
    averageAge: 0,
  });

  
  return (
    <>
      <h1 className="text-3xl font-bold text-center m-5">Employee Directory</h1>
      <div className="app-container flex flex-row gap-4 justify-center mt-5">
        {" "}
        {/* Style the container */}
        <EmployeeList 
        dispatch={dispatch}
        data={masterData.EmployeeListData } />
        <TeamList 
        dispatch={dispatch}
        data={masterData.TeamListData} />
      </div>
    </>
  );
}

export default App;

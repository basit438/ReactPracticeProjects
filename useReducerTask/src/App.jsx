import { useReducer, useState } from "react";
import EmployeeListJson from "./Components/data.js";
import "./App.css";
import EmployeeList from "./Components/EmployeeList/EmployeeList.jsx";
import TeamList from "./Components/TeamList/TeamList.jsx";

function App() {
  // Initialize masterData with employee data and an empty team list
  const initialState = {
    EmployeeListData: EmployeeListJson,
    TeamListData: [],
    averageAge: 0,
  };

  // Reducer function to handle actions
  const reducerfn = (state, action) => {
    switch (action.type) {
      // Add employee to the team list
      case "Add_to_team_list":
        return {
          ...state,
          TeamListData: [...state.TeamListData, action.payload],
        };
      // Remove employee from the team list
      case "Remove_from_team_list":
        return {
          ...state,
          TeamListData: state.TeamListData.filter(
            (member) => member.id !== action.payload.id
          ),
        };
      // Calculate average age of team members
      case "Calculate_average_age":
        const totalAge = state.TeamListData.reduce((acc, member) => acc + member.age, 0);
        const averageAge = state.TeamListData.length > 0 ? totalAge / state.TeamListData.length : 0;
        return {
          ...state,
          averageAge: averageAge,
        };
      // Sort the team list by age
      case "Sort_by_age":
        const sortedTeam = [...state.TeamListData].sort((a, b) => a.age - b.age);
        return {
          ...state,
          TeamListData: sortedTeam,
        };
      default:
        return state;
    }
  };

  // useReducer hook to manage the state and dispatch actions
  const [state, dispatch] = useReducer(reducerfn, initialState);

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-5">Employee Directory</h1>
      <div className="app-container flex flex-row gap-4 justify-center mt-5">
        {/* Employee List component */}
        <EmployeeList
          dispatch={dispatch}
          data={state.EmployeeListData}
        />

        {/* Team List component */}
        <TeamList
          dispatch={dispatch}
          data={state.TeamListData}
          averageAge={state.averageAge}
        />
      </div>
    </>
  );
}

export default App;

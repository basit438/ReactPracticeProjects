import { useReducer } from "react";
import EmployeeListJson from "./Components/data.js";
import "./App.css";
import EmployeeList from "./Components/EmployeeList/EmployeeList.jsx";
import TeamList from "./Components/TeamList/TeamList.jsx";

// Function to load the team list from localStorage
const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Function to save the team list to localStorage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

function App() {
  // Initial state with employee data and team list from localStorage
  const initialState = {
    EmployeeListData: EmployeeListJson,
    TeamListData: loadFromLocalStorage("teamListData"), // Load from local storage
    averageAge: 0,
  };

  // Reducer function to handle actions and update local storage
  const reducerfn = (state, action) => {
    switch (action.type) {
      // Add employee to the team list and remove from employee list
      case "Add_to_team_list":
        const updatedEmployeeList = state.EmployeeListData.filter(
          (employee) => employee.id !== action.payload.id
        );
        const updatedTeamListAdd = [...state.TeamListData, action.payload];
        saveToLocalStorage("teamListData", updatedTeamListAdd); // Save to local storage
        return {
          ...state,
          EmployeeListData: updatedEmployeeList,
          TeamListData: updatedTeamListAdd,
        };

      // Remove employee from the team list and add back to employee list
      case "Remove_from_team_list":
        const updatedTeamListRemove = state.TeamListData.filter(
          (member) => member.id !== action.payload.id
        );
        const updatedEmployeeListAdd = [...state.EmployeeListData, action.payload];
        saveToLocalStorage("teamListData", updatedTeamListRemove); // Save updated team list to local storage
        return {
          ...state,
          EmployeeListData: updatedEmployeeListAdd,
          TeamListData: updatedTeamListRemove,
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

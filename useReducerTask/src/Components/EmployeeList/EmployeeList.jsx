import React from "react";

function EmployeeList(props) {
  return (
    <div className="employeeList-card flex flex-col gap-2 p-4 mt-3 mb-3 w-2/5 rounded-lg shadow-md bg-gray-100">
      <h1 className="text-2xl text-center font-extrabold">Employee List</h1>
      {props.data.map((employee) => (
        <div
          className="employee-card flex items-center p-3 rounded-md bg-white border border-gray-200 shadow-sm hover:shadow-lg"
          key={employee.id}
        >
          <div className="flex-grow">
            <h3 className="text-lg font-medium text-gray-800">{`${employee.first_name} ${employee.last_name}`}</h3>
            <p className="text-gray-600 truncate">{employee.email}</p>
          </div>
          <button
            onClick={() => props.dispatch({ type: "Add_to_team_list", payload: employee })}
            className="text-blue-500 font-bold border border-blue-500 px-2 py-1 rounded-md ml-auto"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;

import React from 'react'

function TeamList(props) {
  return (
    <div className="teamList-card flex flex-col gap-2 p-4 mt-3 mb-3 w-2/5 rounded-lg shadow-md bg-gray-100">
      <h1 className='text-2xl  text-center font-extrabold'>Team List</h1>
      <div className='w-full bg-gray-200 flex justify-between p-3'>
      <button onClick={()=>{props.dispath("Calculate_average_age")}}>Calculate Average Age</button>
        <p>Average age:</p>
        <button onClick={()=>{props.dispath("Sort_by_age")}}>Sort By Age</button>
      </div>
      {props.data.map((employee) => (
        <div className="employee-card flex items-center p-3 rounded-md bg-white border border-gray-200 shadow-sm hover:shadow-lg" key={employee.id}>
          <div className="flex-grow"> {/* Allow data content to expand */}
            <h3 className="text-lg font-medium text-gray-800">{`${employee.first_name} ${employee.last_name}`}</h3>
            <p className="text-gray-600 truncate">{employee.email}</p>
          </div>
          <button onClick={() => props.dispath("Remove_from_team_list")} className="text-blue-500 font-bold border border-blue-500 px-2 py-1 rounded-md ml-auto">+</button>
        </div>
      ))}
    </div>
  )
}

export default TeamList

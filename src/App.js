import "./index.css";
import Employee from "./components/employee";
import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
function App() {
  // const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alexa",
      role: "Developer",
      img: "https://rb.gy/qbg78z",
    },
    {
      id: 2,
      name: "Melnsa",
      role: "Developer",
      img: "https://rb.gy/wayn80",
    },
    {
      id: 3,
      name: "ChunLee",
      role: "Developer",
      img: "https://rb.gy/qbg78z",
    },
    {
      id: 4,
      name: "Breksha",
      role: "Developer",
      img: "https://rb.gy/wh5mlh",
    },
    {
      id: 5,
      name: "Komugi",
      role: "Developer",
      img: "https://rb.gy/2u7lx5",
    },
    { id: 6, name: "Chenny", role: "Developer", img: "https://rb.gy/qbg78z" },
  ]);
  function updateEmp(id, newName, newRole) {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id == id) {
        return { ...emp, name: newName, role: newRole };
      }
      return emp;
    });
    setEmployees(updatedEmployees);
  }

  let empAccess = true;
  return (
    <div className="App">
      {empAccess ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((emp) => {
              return (
                <Employee
                  id={emp.id}
                  key={emp.id}
                  name={emp.name}
                  role={emp.role}
                  img={emp.img}
                  updateEmp={updateEmp}
                />
              );
            })}
          </div>
          {/* <div className="flex justify-center">
            <button className="my-[10px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              +New Employee
            </button>
          </div> */}
        </>
      ) : (
        <p>Access denied</p>
      )}
    </div>
  );
}

export default App;

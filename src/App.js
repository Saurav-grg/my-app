import "./index.css";
import Employee from "./components/employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  let empAccess = true;
  return (
    <div className="App bg-red-300">
      {empAccess ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Saurav" role="intern" />
          <Employee name="Gaurav" />
          <Employee name="Manish" role={role} />
        </>
      ) : (
        <p>Access denied</p>
      )}
    </div>
  );
}

export default App;

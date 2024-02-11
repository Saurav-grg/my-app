import EditEmp from "./EditEmp";

function Employee(props) {
  return (
    <div className="min-w-[150px] max-w-[350px] py-8 px-8 max-w-sm m-1 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        //class="object-cover w-24 block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        className="object-cover rounded-full h-[90px] w-[90px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">{props.role}</p>
        </div>
        <EditEmp
          id={props.id}
          updateEmp={props.updateEmp}
          name={props.name}
          role={props.role}
        />
      </div>
    </div>
  );
}

export default Employee;

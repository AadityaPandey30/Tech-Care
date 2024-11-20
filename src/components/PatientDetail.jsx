
import BP from "./BP.jsx"
import DiagnosticList from "./DiagnosticList.jsx";
import RTH from "./RTH.jsx";



const PatientDetail = () => {
 

  return (
    <div className="">
    <div className="bg-white rounded-[16px] p-4 mx-2 -my-1">
      <BP />
        <RTH />  
    </div>
    <div className="bg-white rounded-[16px] p-4 mx-2 mt-5">
        <DiagnosticList />
    </div>
    </div>
  );
};

export default PatientDetail;

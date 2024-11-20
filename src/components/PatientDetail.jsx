
import data from "../assets/Jessica.json";
import BP from "./BP.jsx"



const PatientDetail = () => {
 

  return (
    <div className="bg-white rounded-[16px] h-[78vh] overflow-y-scroll p-4 mx-2 -my-1">
      <div className="patient-info">
        <h2 className="text-xl font-bold">{data.name}</h2>
        <img
          src={data.profile_picture}
          alt="Jessica Taylor"
          className="rounded-full w-20 h-20"
        />
        <p>Gender: {data.gender}</p>
        <p>Age: {data.age}</p>
        <p>Date of Birth: {data.date_of_birth}</p>
        <p>Phone: {data.phone_number}</p>
        <p>Emergency Contact: {data.emergency_contact}</p>
        <p>Insurance: {data.insurance_type}</p>
      </div>
      
      <BP />
    </div>
  );
};

export default PatientDetail;

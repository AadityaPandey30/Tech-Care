
import data from "../assets/Jessica.json";
import sch from "../assets/sch.svg"
import fem from "../assets/fem.svg";
import pho from "../assets/pho.svg";
import protect from "../assets/protect.svg"
import LabResults from "./LabResults";


const PatientDetail1 = () => {
 

  return (
    <div>
    <div className="bg-white rounded-[16px] p-4 mx-2 -my-1">

      <div className="patient-info text-center">
        <img
          src={data.profile_picture}
          alt="Jessica Taylor"
          className="rounded-full h-[20vh] text-center m-auto my-3"
        />
        <h2 className="text-xl font-bold">{data.name}</h2>
        <div className="text-left mb-3 mt-6 ml-2">
            <div className="flex">
                <div className="size-10 bg-gray-100 rounded-full mr-3 my-1">
                    <img src={sch} className="relative top-3 left-3"/>
                </div>
                <div>
                    <p className="">Date of Birth</p>
                    <p className="text-[#072635] font-semibold">{data.date_of_birth}</p>
                </div>
            </div>

            <div className="flex my-3">
                <div className="size-10 bg-gray-100 rounded-full mr-3 my-1">
                    <img src={fem} className=""/>
                </div>
                <div>
                    <p className="">Gender</p>
                    <p className="text-[#072635] font-semibold">{data.gender}</p>
                </div>
            </div>

            <div className="flex my-3">
                <div className="size-10 bg-gray-100 rounded-full mr-3 my-1">
                    <img src={pho} className=""/>
                </div>
                <div>
                    <p className="">Contact Info.</p>
                    <p className="text-[#072635] font-semibold">{data.phone_number}</p>
                </div>
            </div>
            <div className="flex my-3">
                <div className="size-10 bg-gray-100 rounded-full mr-3 my-1">
                    <img src={pho} className=""/>
                </div>
                <div>
                    <p className="">Emergency Contacts</p>
                    <p className="text-[#072635] font-semibold">{data.emergency_contact}</p>
                </div>
            </div>
            <div className="flex my-3">
                <div className="size-10 bg-gray-100 rounded-full mr-3 my-1">
                    <img src={protect} className=""/>
                </div>
                <div>
                    <p className="">Insurance Provider</p>
                    <p className="text-[#072635] font-semibold">{data.insurance_type}</p>
                </div>
            </div>
        </div>
        <button className="rounded-[41px] text-center bg-[#01F0D0] px-4 py-2 mt-5 mb-2 font-semibold">Show All Information</button>
      </div>
    </div>

    <LabResults />
    </div>
  );
};

export default PatientDetail1;

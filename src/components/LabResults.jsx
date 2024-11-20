import downl from "../assets/downl.svg"

const LabResults = () => {
  const labResults = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
  ];

  return (
    <div className="bg-white my-5 mx-2 rounded-[16px] p-4 ">
      <h2 className="text-2xl font-bold mb-3">Lab Results</h2>
      <ul className=" list-inside p-4 rounded-lg list-none shadow-sm overflow-y-scroll max-h-[30vh]">
        {labResults.map((result, index) => (
          <li key={index} className="text-gray-700 text-lg mb-2">
            <div className="flex justify-between">{result}<img src={downl} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;

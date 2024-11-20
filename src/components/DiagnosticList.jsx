
const DiagnosticList = () => {
  const diagnosticList = [
    {
      name: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      name: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      name: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
    {
      name: "Osteoarthritis",
      description: "Degenerative joint disease",
      status: "Untreated",
    },
  ];

  return (
    <div >
      <h2 className="text-2xl font-bold mt-1 mb-5">Diagnostic List</h2>
      <div className="max-h-[30vh] overflow-y-scroll w-full">

      <table className="w-full text-left border-collapse">
        <thead className="bg-[#F6F7F8] rounded-[24px]">
          <tr className="text-sm tracking-wider text-[#072635]">
            <th className="px-4 py-3">Problem/Diagnosis</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticList.map((item, index) => (
            <>
            <tr
              key={index}
            >
              <td className="px-4 py-3 text-[#072635]">{item.name}</td>
              <td className="px-4 py-3 text-[#072635]">{item.description}</td>
              <td className="px-4 py-3 text-[#072635]">{item.status}</td>
            </tr>
              <hr className=" border-gray-100"/>
            </>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DiagnosticList;

import { useState, useEffect } from 'react';
import PatientList from './PatientList';
import PatientDetail from './PatientDetail';
import PatientDetail1 from './PatientDetail1';


const Home = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const credentials = btoa('coalition:skills-test');
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', {
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched Data:', data);

        if (Array.isArray(data)) {
          setPatients(data);
        } else if (data.patients) {
          setPatients(data.patients);
        } else {
          console.error('Unexpected API response structure');
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className=''>
    <div className="flex">
      <div className="w-1/5">
        <PatientList patients={patients} onSelectPatient={handleSelectPatient} />
      </div>
      <div className="w-[55%] p-4 pr-0 ml-5">
        <PatientDetail patient={selectedPatient} />
      </div>
      <div className="w-1/4 p-4">
        <PatientDetail1 patient={selectedPatient} />
      </div>
    </div>
    </div>
  );
};

export default Home;

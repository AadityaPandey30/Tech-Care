import PatientCard from './PatientCard';
import PropTypes from 'prop-types';
import search from '../assets/search.svg'

const PatientList = ({ patients, onSelectPatient }) => {
  if (!patients.length) {
    return <p>Loading patients...</p>;
  }

  return (
    <div className='bg-white rounded-[16px] relative w-[60%] mx-5 my-3 p-1'>
        <div className='flex justify-between m-4'>
            <h2 className='text-2xl font-bold'>Patients</h2>
            <img src={search} alt='search'/>
        </div>
    <div className='max-h-[68vh] overflow-y-scroll'>
      {patients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
          onSelect={() => onSelectPatient(patient)}
        />
      ))}
    </div>
    </div>
  );
};

PatientList.propTypes = {
    patients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        gender: PropTypes.string.isRequired,
      })
    ).isRequired,
    onSelectPatient: PropTypes.func.isRequired,
  };
  

export default PatientList;

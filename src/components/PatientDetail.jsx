import PropTypes from 'prop-types';

const PatientDetail = ({ patient }) => {
  if (!patient) {
    return <p>Select a patient to see details</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold">{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Date of Birth: {patient.date_of_birth}</p> {/* Add other fields as necessary */}
    </div>
  );
};

PatientDetail.propTypes = {
  patient: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    date_of_birth: PropTypes.number.isRequired, // Optional field
  }),
};

export default PatientDetail;

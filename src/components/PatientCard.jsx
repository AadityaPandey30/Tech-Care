import PropTypes from 'prop-types';
import dot from "../assets/dot.svg";

const PatientCard = ({ patient, onSelect }) => {
  return (
    <li
            key={patient.name}
            className="flex items-center space-x-4 p-2 hover:bg-[#D8FCF7] cursor-pointer rounded-md justify-between"
      onClick={onSelect}
    >
        <div className='flex'>
        <img
              src={patient.profile_picture}
              alt={patient.name}
              className="w-10 h-10 rounded-full mr-2"
            />
       <div>
              <p className="font-medium">{patient.name}</p>
              <p className="text-sm text-gray-600">{patient.gender}, {patient.age}</p>
        </div>
        </div>
        <img src={dot} alt='pic'/>

    </li>

    
  );
};

PatientCard.propTypes = {
  patient: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    profile_picture: PropTypes.string.isRequired
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PatientCard;

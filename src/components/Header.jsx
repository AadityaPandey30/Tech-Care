import logo from "../assets/Testlogo.svg"
import home from "../assets/home.svg";
import patients from "../assets/pat.svg";
import schedule from "../assets/sch.svg";
import message from "../assets/mes.svg";
import transaction from "../assets/tran.svg";
import sett from "../assets/sett.svg";
import men from "../assets/men.svg"
import doc from "../assets/doc/doc2.png"


const Header = () => {
  return (
    <header className="bg-white shadow-sm m-4 rounded-[70px]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo} 
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          
          <span className="flex">
            <img src={home} alt="home" className="mr-2" />
            <p className="font-semibold">Overview</p>
          </span>

          <span className="flex">
            <img src={patients} alt="patients" className="mr-2" />
            <p className="font-semibold">Patients</p>
          </span>

          <span className="flex">
            <img src={schedule} alt="Schedule" className="mr-2" />
            <p className="font-semibold">Schedule</p>
          </span>

          <span className="flex">
            <img src={message} alt="message" className="mr-2" />
            <p className="font-semibold">Message</p>
          </span>

          <span className="flex">
            <img src={transaction} alt="transaction" className="mr-2" />
            <p className="font-semibold">Transaction</p>
          </span>
          
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center px-2 py-1">
          
          <div><img src={doc} alt="doctor" className="mr-3"/></div>
          <div className="border-r-2 pr-2"><p className="font-bold">Dr. Jose Simmons</p><p className="text-gray-500">General Practitioner</p></div>
          
          <img src={sett} alt="settings" className="mx-3" />
          <img src={men} alt="menu" className="mr-3" />

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center text-gray-600">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;

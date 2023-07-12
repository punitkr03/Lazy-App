import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function Info() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/gigs');
  };

  return (
    <>
    <div className="bg-gray-900">
        <div className="grid grid-cols-2 gap-6 w-full h-screen p-5">
            <div className="bg-gray-800 rounded-xl">
            <h1 className="text-green-500 text-center font-bold text-4xl mt-2 p-2">Profile</h1>
            </div>
            {/*Info section*/}
            <div className="flex flex-col gap-4">
                <div className="bg-gray-700 rounded-xl flex flex-col text-center justify-center h-full">
                    Hello there
                </div>
                <div className="bg-gray-700 rounded-xl flex flex-col text-center justify-center h-full">
                    Hello there
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

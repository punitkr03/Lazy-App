import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer"

export default function HomePage() {
    const navigate = useNavigate();

    function navigateToAllGigs() {
        navigate('/gigs');
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-screen font-semibold text-6xl bg-gray-900">
                <div className="text-center space-y-5">
                    <h1 className="text-green-500">Welcome to</h1>
                    <h2 className="text-purple-500">Lazy App</h2>
                </div>
                <div className="text-center">
                    <button onClick={navigateToAllGigs} className="text-xl bg-green-600 w-25 h-10 my-10 px-3 rounded-xl hover:bg-amber-500">Start</button>
                </div>
            </div>
            <Footer />
        </>
    )
}
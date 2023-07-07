export default function HomePage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-screen font-semibold text-6xl bg-gray-900">
                <div className="text-center">
                    <h1 className="text-green-500">Welcome to</h1>
                    <h2 className="text-purple-500">Lazy App</h2>
                </div>
                <div className="text-center">
                    <button className="text-xl bg-green-600 w-fit h-8 px-3 rounded-xl hover:bg-rose-500">Start</button>
                </div>
            </div>
        </>
    )
}
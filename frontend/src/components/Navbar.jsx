export default function Navbar() {
    return (
      <div className="w-full absolute top-0">
        <ul className="flex justify-center p-4 bg-gray-900">
          <li> <button className="mx-16 bg-green-500 p-2 rounded-lg hover:bg-purple-500 active:bg-purple-700 font-bold">All Gigs</button></li>
          <li> <button className="mx-16 bg-green-500 p-2 rounded-lg hover:bg-purple-500 active:bg-purple-700 font-bold">My Gigs</button></li>
        </ul>
      </div>
    )
  }
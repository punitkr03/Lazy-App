import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import CreatedCard from "../../components/CreatedCard";
import AcceptedCard from "../../components/AcceptedCard";
import CompletedCard from "../../components/CompletedCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { database } from "../../appwrite/appwriteConfig";

export default function Gigs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const [allCards, setAllCards] = useState();

  const getAllCards = async () => {
    try {
      const promise = await database.listDocuments(
        import.meta.env.VITE_DB_ID,
        import.meta.env.VITE_CARD_COLLECTION_ID
      );
      const data = promise.documents;
      setAllCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  function createGig() {
    navigate("/create");
  }

  //Get current user from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  //Filter the cards
  const activeCards = allCards?.filter((card) => card.isTakenUserId === null);
  const myCards = allCards?.filter(
    (card) => card.isTakenUserId === user.id && card.isCompleted === false
  );
  const createdCards = allCards?.filter((card) => card.creatorId === user.id);
  const completedCards = allCards?.filter(
    (card) => card.isCompleted === true && card.isTakenUserId === user.id
  );

  //Get cards based on active tab
  const getCards = () => {
    if (activeTab === 1) {
      return (
        <>
          {activeCards?.map((card) => (
            <Card
              key={card.$id}
              payout={card.payout}
              username={card.username}
              description={card.description}
              category={card.category}
              postedBy={card.postedBy}
              cardId={card.$id}
              creatorId={card.creatorId}
              userId={user.id}
            />
          ))}
        </>
      );
    } else if (activeTab === 2) {
      return (
        <>
          {myCards?.map((card) => (
            <AcceptedCard
              key={card.$id}
              payout={card.payout}
              username={card.username}
              description={card.description}
              postedBy={card.postedBy}
              category={card.category}
              id={card.$id}
              creatorPhone={card.creatorPhone}
            />
          ))}
        </>
      );
    } else if (activeTab === 3) {
      return (
        <>
          {createdCards?.map((card) => (
            <CreatedCard
              key={card.$id}
              payout={card.payout}
              username={card.username}
              postedBy={card.postedBy}
              description={card.description}
              category={card.category}
              id={card.$id}
            />
          ))}
        </>
      );
    } else if (activeTab === 4) {
      return (
        <>
          {completedCards?.map((card) => (
            <CompletedCard
              key={card.$id}
              payout={card.payout}
              username={card.username}
              postedBy={card.postedBy}
              description={card.description}
              category={card.category}
            />
          ))}
        </>
      );
    }
  };

  return (
    <>
      <div className="h-14">
        <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
      <motion.div className="bg-gray-900 flex flex-col min-h-screen">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          className="grid lg:grid-cols-4 justify-evenly gap-2 m-4 sm:grid-cols-1 md:grid-cols-2"
        >
          {getCards()}
        </motion.div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-5 right-5 w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-full text-white text-4xl flex justify-center items-center z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={createGig}
      >
        <span className="-mt-[7px]">+</span>
        {isHovered && (
          <div className="bg-gray-800 w-20 text-green-500 font-medium text-sm mb-20 p-1 absolute rounded-md">
            Create gig
          </div>
        )}
      </motion.button>
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import Error from "../../components/ErrorPage";
import PropTypes from "prop-types";
import { IoMdSend } from "react-icons/io";

import { getUser, auth, firebase } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../../components/Loader";

const firestore = firebase.firestore();

const Chatroom = () => {
  const user = getUser();
  const dummy = useRef();

  const messagesRef = firestore.collection("messages");
  // const query = messagesRef.orderBy("createdAt").limit(25);
  const query = messagesRef.orderBy("createdAt").limit(100);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  //spinner
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    { loading ? 
          <Loader/> : <>      {user ? (
            <>
              <div className="bg-[#111827] md:px-24 h-9/10 w-full">
                <main className="py-12 px-40 space-y-0 overflow-y-scroll no-scrollbar flex flex-col">
                  {messages &&
                    messages.map((msg, index) => (
                      <ChatMessage key={`${msg.uid}-${msg.createdAt?.seconds || index}`} message={msg} />
                    ))}
                  <span ref={dummy}></span>
                </main>
                <div className="mt-4 w-full max-w-screen flex justify-center items-center ">
                  <div className="h-10vh fixed bottom-0 bg-white rounded-2xl w-full max-w-screen-md flex justify-center items-center ">
                    <form
                      onSubmit={sendMessage}
                      className="h-10vh w-full max-w-screen-md flex items-center justify-center"
                    >
                      <input
                        value={formValue}
                        onChange={(e) => setFormValue(e.target.value)}
                        placeholder="say something nice"
                        // className="w-full h-full px-4 text-lg bg-gray-700 text-white outline-none"
                        className=" rounded-2xl max-w-screen bg-gray-100 py-3 px-5 w-full outline-none"
                      />
    
                      <button
                        type="submit"
                        disabled={!formValue}
                        className="bg-blue-600 text-white px-6 py-4 rounded-tl-none rounded-tr-2xl rounded-br-2xl"
                      >
                        <IoMdSend />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Error />
          )}</>}

    </>
  );
};

function msgTime(createdAt) {
  if (!createdAt){ const currentDate = new Date();
    return currentDate.toLocaleTimeString(); }// 

  const date = new Date(createdAt.seconds * 1000);
  const istOffset = 5.5 * 60; 
  const istDate = new Date(date.getTime() + (istOffset + date.getTimezoneOffset()) * 60 * 1000);
  
  const day = String(istDate.getDate()).padStart(2, '0');
  const month = String(istDate.getMonth() + 1).padStart(2, '0'); 
  const year = String(istDate.getFullYear()).slice(-2); 
  const hours = String(istDate.getHours()).padStart(2, '0');
  const minutes = String(istDate.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  return `${day}/${month}/${year} ${hours % 12 || 12}:${minutes} ${ampm}`;
}

function ChatMessage(props) {
  const { text, uid, photoURL,createdAt} = props.message;

  return (
    <>
      <div
        className={` flex items-center overflow-hidden ${
          uid === auth.currentUser.uid ? "flex flex-row-reverse self-end" : ""
        }`}
      >
        <img
          src={photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"}
          className="logo-img rounded-full mt-2"
          width={40}
          height={40}
        />
        <p
          className={`py-1 px-4 ${
            uid === auth.currentUser.uid
              ? "mt-2 rounded-lg mr-2 flex flex-row-reverse bg-blue-500 text-white self-end"
              : "mt-2 rounded-lg ml-2 bg-gray-300 text-black"
          }`}
        >
          {text}
          <span className={`py-1 px-4 ${
            uid === auth.currentUser.uid
              ? "text-xs text-gray-900"
              : "text-xs text-gray-500"
          }`}>
            {msgTime(createdAt)} 
          </span>
        </p>
      </div>
    </>
  );
}


ChatMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    createdAt: PropTypes.object.isRequired, 
  }).isRequired,
};


export default Chatroom;

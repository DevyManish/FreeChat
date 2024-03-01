import React, { useState, useRef } from "react";
import Error from "../../components/ErrorPage";

import { IoMdSend } from "react-icons/io";

import { auth, firebase } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const Chatroom = ({ isAuthenticated }) => {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

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

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="bg-[#111827] md:px-10 h-150">
            <main className="p-4 h-100vh overflow-y-scroll flex flex-col">
              {messages &&
                messages.map((msg) => (
                  <ChatMessage key={msg.id} message={msg} />
                ))}
              <span ref={dummy}></span>
            </main>
            <div className="h-10vh bg-gray-800 w-full max-w-screen-md flex justify-items-center ">
              <form
                onSubmit={sendMessage}
                className="h-10vh  bg-gray-800 w-full max-w-screen-md flex items-center justify-center"
              >
                <input
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="say something nice"
                  // className="w-full h-full px-4 text-lg bg-gray-700 text-white outline-none"
                  className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
                />

                <button
                  type="submit"
                  disabled={!formValue}
                  className="bg-blue-600 text-white px-4 py-3 rounded-2xl"
                >
                  <IoMdSend />
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  return (
    <>
      <div
        className={` flex items-center overflow-hidden ${
          uid === auth.currentUser.uid ? "flex flex-row-reverse  self-end" : " "
        }`}
      >
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          className="logo-img rounded-full mt-2"
          width={40}
          height={40}
        />
        <p
          className={`py-1 px-4 " ${
            uid === auth.currentUser.uid
              ? "mt-2 rounded-lg mr-2 flex flex-row-reverse bg-blue-500 text-white self-end"
              : "mt-2 rounded-lg ml-2 bg-gray-300 text-black"
          }`}
        >
          {text}
        </p>
      </div>
    </>
  );
}

export default Chatroom;

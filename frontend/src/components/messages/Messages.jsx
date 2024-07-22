import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import { getRandomEmoji } from "../../utils/emojis";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">
          It&apos;s Looking Empty, send a message for the Bash{getRandomEmoji()}
        </p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((messages) => (
          <div key={messages._id} ref={lastMessageRef}>
            <Message message={messages} />
          </div>
        ))}
    </div>
  );
};

export default Messages;

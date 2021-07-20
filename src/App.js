import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import "./assets/styles/style.css";
import AnswersList from "./components/Answers/AnswersList";
import Data from "./Dataset";
import ChatList from "./components/Chats/ChatList";
function App() {
  const [Chats, setChats] = useState([
    { text: Data.init.question, type: "question" },
  ]);
  const [Dataset, setDataset] = useState(Data.init);
  const [Open, setOpen] = useState(false);

  const displayNextQuestion = useCallback(
    (question, nextId) => {
      setDataset(Data[nextId]);
      setChats((prevChats) => {
        return [...prevChats, question];
      });
    },
    [setChats]
  );
  const addChats = useCallback(
    (chat) => {
      setChats((prevChats) => {
        return [...prevChats, chat];
      });
    },
    [setChats]
  );

  const SelectAnswerHandler = (nextId, text) => {
    switch (true) {
      case nextId === "contact":
        window.open(`mailto:yusukey7grizi@gmail.com?subject=問い合わせ&body=`);
        break;
      case /^https:*/.test(nextId):
        const a = document.createElement("a");
        a.href = nextId;
        a.target = "_blank";
        a.click();
        break;

      default:
        addChats({ text: text, type: "answer" });
        setTimeout(() => {
          displayNextQuestion(
            {
              text: Data[nextId].question,
              type: "question",
            },
            nextId
          );
        }, 400);
        break;
    }
  };
  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });
  return (
    <section className="c-section">
      <div style={{ backgroundColor: "#F0F8FF" }} className="c-box">
        <ChatList Chats={Chats} />
        <AnswersList Dataset={Dataset} select={SelectAnswerHandler} />
      </div>
    </section>
  );
}

export default App;

import { useState } from "react";
import { data } from "./data";
import "./styles.css";
import { FaPlus, FaTimes } from "react-icons/fa";
export const Accordion = () => {
  const [single, setSingle] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multi, setMulti] = useState([]);
  const handleSingle = (id) => {
    setSingle(id === single ? null : id);
  };
  const handleMulti = (id) => {
    let copyMulti = [...multi];
    const indexOfMulti = copyMulti.indexOf(id);
    if (indexOfMulti === -1) {
      copyMulti.push(id);
      setMulti(copyMulti);
    } else {
      copyMulti.splice(indexOfMulti, 1);
      setMulti(copyMulti);
    }
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      {data.map((item) => (
        <div key={item.id} className="item">
          <div
            className="question"
            onClick={
              enable ? () => handleMulti(item.id) : () => handleSingle(item.id)
            }
          >
            <span>{item.question}</span>
            {enable ? (
              multi.indexOf(item.id) !== -1 ? (
                <FaTimes color={"white"} />
              ) : (
                <FaPlus color={"white"} />
              )
            ) : single !== null && single === item.id ? (
              <FaTimes color={"white"} />
            ) : (
              <FaPlus color={"white"} />
            )}
          </div>
          {enable
            ? multi.indexOf(item.id) !== -1 && (
                <div className="answer">{item.answer}</div>
              )
            : single !== null &&
              single === item.id && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

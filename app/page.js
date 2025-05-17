"use client";
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const handleAction = () => {
    if (userInput.trim() !== "") {
      if (editIndex !== null) {
        const updatedList = list.map((item, index) =>
          index === editIndex ? { ...item, value: userInput } : item
        );
        setList(updatedList);
        setEditIndex(null);
      } else {
        const newItem = {
          id: Math.random(),
          value: userInput,
        };
        setList([...list, newItem]);
      }
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const startEdit = (index) => {
    setUserInput(list[index].value);
    setEditIndex(index);
  };

  return (
    <div
      style={{
        fontFamily: "Arial,sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}>
      <div
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "green",
        }}>
        Sujal Agrawal's Powered By :
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}>
        TODO LIST
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <input
          style={{
            fontSize: "1.2rem",
            padding: "10px",
            marginRight: "10px",
            flexGrow: "1",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          placeholder={editIndex !== null ? "Edit item..." : "Add item..."}
          value={userInput}
          onChange={(e) => updateInput(e.target.value)}
        />
        <button
          style={{
            fontSize: "1.2rem",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={handleAction}>
          {editIndex !== null ? "Update" : "ADD"}
        </button>
      </div>
      <div
        style={{ background: "green", padding: "20px", borderRadius: "8px" }}>
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}>
              <span
                style={{ fontSize: "1.2rem", flexGrow: "1", color: "white" }}>
                {item.value}
              </span>
              <span>
                <button
                  style={{
                    padding: "10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
                <button
                  style={{
                    padding: "10px",
                    backgroundColor: "#2196f3",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => startEdit(index)}>
                  Edit
                </button>
              </span>
            </div>
          ))
        ) : (
          <div
            style={{ textAlign: "center", fontSize: "1.2rem", color: "#fff" }}>
            No items in the list
          </div>
        )}
      </div>
    </div>
  );
}

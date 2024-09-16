import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear input and result
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  // Handle scientific operations
  const calculateScientific = (operation) => {
    try {
      switch (operation) {
        case "√":
          setResult(Math.sqrt(eval(input))); // Square root
          break;
        case "sin":
          setResult(Math.sin(eval(input))); // Sine function
          break;
        case "cos":
          setResult(Math.cos(eval(input))); // Cosine function
          break;
        case "tan":
          setResult(Math.tan(eval(input))); // Tangent function
          break;
        case "log":
          setResult(Math.log10(eval(input))); // Logarithm base 10
          break;
        case "ln":
          setResult(Math.log(eval(input))); // Natural logarithm
          break;
        case "^":
          setInput((prev) => prev + "**"); // Exponentiation (using ** in JavaScript)
          break;
        default:
          setResult("Error");
      }
    } catch (error) {
      setResult("Error");
    }
  };

  // Calculate the result for basic operations
  const calculateResult = () => {
    try {
      setResult(eval(input)); // Use eval carefully (replace in production)
    } catch (error) {
      setResult("Error");
    }
  };

  const buttonStyle = {
    padding: "20px",
    margin: "5px",
    backgroundColor: "#d4d4d2",
    borderRadius: "5px",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const scientificButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#c0c0c0",
  };

  const operatorButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ff9500",
    color: "#fff",
  };

  return (
    <div
      style={{
        width: "320px",
        margin: "100px auto",
        padding: "20px",
        backgroundColor: "#333333",
        borderRadius: "10px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "24px",
            textAlign: "right",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#222222",
            color: "#fff",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            textAlign: "right",
            fontSize: "18px",
            marginTop: "10px",
            color: "#aaa",
            height: "24px",
          }}
        >
          {result}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        {/* Scientific operations */}
        <button style={scientificButtonStyle} onClick={() => calculateScientific("sin")}>
          sin
        </button>
        <button style={scientificButtonStyle} onClick={() => calculateScientific("cos")}>
          cos
        </button>
        <button style={scientificButtonStyle} onClick={() => calculateScientific("tan")}>
          tan
        </button>
        <button style={scientificButtonStyle} onClick={() => calculateScientific("√")}>
          √
        </button>
        <button style={scientificButtonStyle} onClick={() => calculateScientific("^")}>
          ^
        </button>

        <button style={buttonStyle} onClick={() => handleClick("7")}>
          7
        </button>
        <button style={buttonStyle} onClick={() => handleClick("8")}>
          8
        </button>
        <button style={buttonStyle} onClick={() => handleClick("9")}>
          9
        </button>
        <button style={operatorButtonStyle} onClick={() => handleClick("/")}>
          ÷
        </button>
        <button style={buttonStyle} onClick={clearInput}>
          C
        </button>

        <button style={buttonStyle} onClick={() => handleClick("4")}>
          4
        </button>
        <button style={buttonStyle} onClick={() => handleClick("5")}>
          5
        </button>
        <button style={buttonStyle} onClick={() => handleClick("6")}>
          6
        </button>
        <button style={operatorButtonStyle} onClick={() => handleClick("*")}>
          ×
        </button>
        <button style={scientificButtonStyle} onClick={() => calculateScientific("log")}>
          log
        </button>

        <button style={buttonStyle} onClick={() => handleClick("1")}>
          1
        </button>
        <button style={buttonStyle} onClick={() => handleClick("2")}>
          2
        </button>
        <button style={buttonStyle} onClick={() => handleClick("3")}>
          3
        </button>
        <button style={operatorButtonStyle} onClick={() => handleClick("-")}>
          −
        </button>
        <button style={scientificButtonStyle} onClick={() => calculateScientific("ln")}>
          ln
        </button>

        <button style={buttonStyle} onClick={() => handleClick("0")}>
          0
        </button>
        <button style={buttonStyle} onClick={() => handleClick(".")}>
          .
        </button>
        <button style={operatorButtonStyle} onClick={calculateResult}>
          =
        </button>
        <button style={operatorButtonStyle} onClick={() => handleClick("+")}>
          +
        </button>
      </div>
    </div>
  );
};

export default Calculator;

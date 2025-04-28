import { useRouteError } from "react-router";
const Error = ({ message = "Something went wrong." }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#ffe5e5",
  };

  const boxStyle = {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
  };

  const headingStyle = {
    color: "#e53935",
    fontSize: "1.8rem",
    marginBottom: "1rem",
  };

  const messageStyle = {
    color: "#333",
    marginBottom: "1.5rem",
  };

  const buttonStyle = {
    backgroundColor: "#e53935",
    color: "#ffffff",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  };
  const err = useRouteError();
  console.error(err);
  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={headingStyle}>Error</h1>
        <p style={messageStyle}>{message}</p>
        <button style={buttonStyle} onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>
    </div>
  );
};

export default Error;

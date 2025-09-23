import { Link } from "react-router-dom";

function Sidebar() {
  const sidebarStyle = {
    width: "250px",
    height: "100vh",
    backgroundColor: "#f8f8f8",
    paddingTop: "20px",

  };

  const linkStyle = {
    padding: "12px 20px",
    display: "block",
    color: "black",
    textDecoration: "none",
    fontSize: "18px",
    transition: "all 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "#333",
    color: "#fff",
  };

  return (
    <div>
      <div style={sidebarStyle}>
        <Link
          to="/products"
          style={linkStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
            e.target.style.color = linkHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "black";
          }}
        >
          All Products
        </Link>
       
      </div>
    </div>
  );
}

export default Sidebar;

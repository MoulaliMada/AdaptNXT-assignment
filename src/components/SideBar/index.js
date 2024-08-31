import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const onclickNavItem = (event) => {
    setActiveTab(event.target.innerText);
  };

  return (
    <div className="sidbar-container">
      <Link to="/" className="nav-link">
        <p
          className={activeTab === "Dashboard" ? "active-nav-item" : "nav-Item"}
          onClick={onclickNavItem}
        >
          Dashboard
        </p>
      </Link>
      <Link to="/" className="nav-link">
        <p
          className={activeTab === "Inventory" ? "active-nav-item" : "nav-Item"}
          onClick={onclickNavItem}
        >
          Inventory
        </p>
      </Link>
      <Link to="/" className="nav-link">
        <p
          className={activeTab === "Returns" ? "active-nav-item" : "nav-Item"}
          onClick={onclickNavItem}
        >
          Returns
        </p>
      </Link>
      <Link to="/" className="nav-link">
        <p
          className={activeTab === "Customers" ? "active-nav-item" : "nav-Item"}
          onClick={onclickNavItem}
        >
          Customers
        </p>
      </Link>
      <Link to="/" className="nav-link">
        <p
          className={activeTab === "Shipping" ? "active-nav-item" : "nav-Item"}
          onClick={onclickNavItem}
        >
          Shipping
        </p>
      </Link>
      <Link to="/" className="nav-link">
        <p
          className={activeTab === "Channel" ? "active-nav-item" : "nav-Item"}
          onClick={onclickNavItem}
        >
          Channel
        </p>
      </Link>
      <Link to="/" className="nav-link">
        <p
          className={
            activeTab === "Integration" ? "active-nav-item" : "nav-Item"
          }
          onClick={onclickNavItem}
        >
          Integration
        </p>
      </Link>
      <select className="select-tag">
        <option className="options">Calculator</option>
        <option className="options">Calculator1</option>
        <option className="options">Calculator2</option>
      </select>
      <select className="select-tag">
        <option className="options">Reports</option>
        <option className="options">Reports1</option>
        <option className="options">Reports2</option>
      </select>
      <select className="select-tag">
        <option className="options">Account</option>
        <option className="options">Account1</option>
        <option className="options">Account2</option>
      </select>
    </div>
  );
};
export default SideBar;

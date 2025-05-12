import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.jsx";
import axios from "axios";

const Sidebar = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/menu");
        if (res.status === 200 && Array.isArray(res.data)) {
          setItems(res.data);
        } else {
          setStatus({ loading: false, error: "Invalid data format" });
        }
      } catch (err) {
        setStatus({
          loading: false,
          error: err.response?.data?.message || "Failed to load menu items",
        });
      } finally {
        setStatus((prev) => ({ ...prev, loading: false }));
      }
    };
    
    fetchData();
  }, []);

  if (status.loading) {
    return (
      <div className="sidebar">
        <p>Loading menu...</p>
      </div>
    );
  }

  if (status.error) {
    return (
      <div className="sidebar error">
        <p>{status.error}</p>
      </div>
    );
  }

  return (
    <div className="sidebar">
      {items.map((item, i) => (
        <SidebarItem key={item.id || item.name || i} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;

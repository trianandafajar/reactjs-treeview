import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.jsx";
import axios from "axios";

const Sidebar = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    axios
      .get("/menu")
      .then((res) => setItems(res.data))
      .catch(() => setStatus({ loading: false, error: "Failed to load menu items" }))
      .finally(() => setStatus((prev) => ({ ...prev, loading: false })));
  }, []);

  if (status.loading) return <div className="sidebar">Loading...</div>;
  if (status.error) return <div className="sidebar error">{status.error}</div>;

  return (
    <div className="sidebar">
      {items.map((item, i) => (
        <SidebarItem key={item.id || item.name || i} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;

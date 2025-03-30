import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.jsx";
import axios from "axios";

const Sidebar = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/menu");
        setItems(response.data);
      } catch (err) {
        setError("Failed to load menu items");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div className="sidebar">Loading...</div>;
  if (error) return <div className="sidebar error">{error}</div>;

  return (
    <div className="sidebar">
      {items?.map((item) => (
        <SidebarItem key={item.id || item.name} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;

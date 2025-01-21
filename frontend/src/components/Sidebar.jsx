import { useCallback, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.jsx";
import axios from "axios";

const Sidebar = () => {
  const [items, setItems] = useState([]);

  const getData = useCallback(async () => {
    const result = await axios.get("/menu");
    return result.data;
  }, []);

  useEffect(() => {
    getData().then((data) => setItems(data));
  }, [getData]);

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;

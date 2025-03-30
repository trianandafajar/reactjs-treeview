import { useState } from "react";
import PropTypes from "prop-types";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.childrens?.length);

  return (
    <div className={`sidebar-item ${open ? "open" : ""}`}>
      <div className="sidebar-title">
        <span>
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </span>
        {hasChildren && (
          <button
            className="toggle-btn icon-item"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={`Toggle ${item.title}`}
          >
            <i className="bi-chevron-left"></i>
          </button>
        )}
      </div>
      {hasChildren ? (
        <div className="sidebar-content">
          {item.childrens.map((child) => (
            <SidebarItem key={child.id || child.title} item={child} />
          ))}
        </div>
      ) : (
        <a href={item.path || "#"} className="sidebar-item plain">
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </a>
      )}
    </div>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    icon: PropTypes.string,
    childrens: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default SidebarItem;

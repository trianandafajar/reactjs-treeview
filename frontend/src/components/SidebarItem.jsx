import { useState } from "react";
import PropTypes from "prop-types";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { title, path, icon, childrens = [] } = item;
  const hasChildren = childrens.length > 0;

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className={`sidebar-item ${open ? "open" : ""}`}>
      <div className="sidebar-title">
        <span>
          {icon && <i className={icon}></i>}
          {title}
        </span>
        {hasChildren && (
          <button
            className="toggle-btn icon-item"
            onClick={toggleOpen}
            aria-expanded={open}
            aria-label={`Toggle ${title}`}
          >
            <i className="bi-chevron-left"></i>
          </button>
        )}
      </div>

      {hasChildren ? (
        <div className="sidebar-content">
          {childrens.map((child, idx) => (
            <SidebarItem key={child.id || child.title || idx} item={child} />
          ))}
        </div>
      ) : (
        <a href={path || "#"} className="sidebar-item plain">
          {icon && <i className={icon}></i>}
          {title}
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

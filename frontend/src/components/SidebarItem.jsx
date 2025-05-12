import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { title, path, icon, childrens = [] } = item;
  const hasChildren = childrens.length > 0;

  const toggleOpen = () => setOpen((prev) => !prev);

  // Conditional rendering for link or button
  const renderLink = hasChildren ? (
    <button
      className="toggle-btn icon-item"
      onClick={toggleOpen}
      aria-expanded={open}
      aria-controls={`sidebar-item-${title}`}
      aria-label={`Toggle ${title}`}
    >
      <i className="bi-chevron-left"></i>
    </button>
  ) : (
    <a href={path || "#"} className="sidebar-item plain" onClick={(e) => !path && e.preventDefault()}>
      {icon && <i className={icon}></i>}
      {title}
    </a>
  );

  return (
    <div className={classNames("sidebar-item", { open })}>
      <div className="sidebar-title">
        <span>
          {icon && <i className={icon}></i>}
          {title}
        </span>
        {renderLink}
      </div>

      {hasChildren && open && (
        <div className="sidebar-content" id={`sidebar-item-${title}`}>
          {childrens.map((child, idx) => (
            <SidebarItem key={child.id || child.title || idx} item={child} />
          ))}
        </div>
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

import Sidebar from "./Sidebar.jsx";
import PropTypes from "prop-types";

const Home = ({ page }) => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <h1 className="title">My {page}</h1>
        <p className="info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consectetur, quasi.
        </p>
        <button className="btn" aria-label="See More Information">
          See More...
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  page: PropTypes.string,
};

// Menambahkan nilai default jika `page` tidak diberikan
Home.defaultProps = {
  page: "Page",
};

export default Home;

import Sidebar from "./Sidebar.jsx";
import PropTypes from "prop-types";

const Home = ({ page }) => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="container">
          <h1 className="title">My {page}</h1>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn">Explore now</button>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Home;

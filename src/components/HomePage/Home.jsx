import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Smart Data Recovery Extension</h1>
      <p className="home-subtitle">
        Welcome to the Smart Data Recovery Extension!
      </p>
      <p className="home-description">
        Recover your lost or accidentally deleted files quickly and safely.
        Fast, reliable, and easy to use.
      </p>
      <button className="home-cta">Get Started</button>
    </div>
  );
};

export default Home;
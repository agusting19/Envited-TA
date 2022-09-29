import { Link } from "react-router-dom";
import homeImg from "../../../public/home-img.png";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.titles}>
          <div>
            <h2>Imagine if</h2>
            <h2 className={styles.titles__gradient}>Snapchat</h2>
            <h2>had events</h2>
          </div>
          <p className={styles.subtitle}>
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <img className={styles.image} src={homeImg} alt="HomeImage" />
        <Link to="/create">
          <button className={styles.button}>🎉 Create my event</button>
        </Link>
      </div>
      <div className={styles.desktop}>
        <img className={styles.image} src={homeImg} alt="HomeImage" />
        <div className={styles.titles}>
          <h2>Imagine if</h2>
          <h2 className={styles.titles__gradient}>Snapchat</h2>
          <h2>had events</h2>
          <p className={styles.subtitle}>
            Easily host and share events with your friends across any social
            media.
          </p>
          <Link to="/create">
            <button className={styles.button}>🎉 Create my event</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

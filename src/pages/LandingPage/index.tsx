import Auth from "./components/Auth";
import Header from "./components/Header";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Auth />
    </div>
  );
};

export default LandingPage;

import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      <h3 className={styles.headerTopTitle}>
        <span className={styles.headerTopTitleVital}>BitKub Chain</span> @ POC
        DEMO
      </h3>
      <h1 className={styles.headerTitle}>React + TypeScript + @usedapp/core</h1>
      <div className="w-full h-1 bg-[gold]" />
    </>
  );
};

export default Header;

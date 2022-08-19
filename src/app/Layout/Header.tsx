import Button from "components/atoms/button";
import { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.navLeft}>
          <a href="/" className={styles.logo}>
            GreenNodes
          </a>
        </div>
        <div className="flex items-center">
          <div className={styles.list}>
            <a href="/" className={styles.item}>
              Finland mining
            </a>
            <a href="/" className={styles.item}>
              Area.
            </a>
            <a href="/" className={styles.item}>
              Tokenomics.
            </a>
            <Button>Whitelist.</Button>
          </div>

          <button className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import styles from "../styles/Navigation.module.scss";

const Navigation = ({chosenCalculator}) => {
  const [calculator, setCalculator] = useState("asd");

  console.log(chosenCalculator);

  useEffect(() => {
    setCalculator(chosenCalculator);
  }, [chosenCalculator]);

  // const subCategory = () => {
  //   return path ? (
  //     <li>
  //       <NavLink className={styles.item} to={path}>
  //         {path}
  //       </NavLink>
  //     </li>
  //   ) : null;
  // };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.item} exact to="/">
            Categories - {calculator}
          </NavLink>
        </li>
        {/* {subCategory()} */}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    chosenCalculator: state.chosenCalculator
  };
};

export default connect(mapStateToProps, null)(Navigation);

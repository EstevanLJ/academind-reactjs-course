import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";

function Card(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Card;

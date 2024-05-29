import { useLocation } from "react-router-dom";

import classes from "./ImageDetails.module.css";

export default function ImageDetails() {
  const { state } = useLocation();
  console.log("state-->", state);

  if (state === null) {
    return <p className={classes.error}>Image details Not Found!</p>;
  }

  return (
    <div className={classes["image-details"]}>
      <h1 className={classes.heading}>Image Details</h1>
      <div className={classes["image-container"]}>
        <img src={state.imageUrl} alt={state?.description} />
        <p className={classes.title}>{state?.description}</p>
      </div>
    </div>
  );
}

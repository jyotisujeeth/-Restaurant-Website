import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import React, { useContext } from "react";

const MealItemForm = (props) => {

  const addItemToCart = (event) => {
    event.target.value();
// update the cartcntx items
console.log(event.target.value);



};
    return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

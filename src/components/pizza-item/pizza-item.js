import React, { useState } from "react";
import RadioButton from "../radio-button/radio-button";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions";
import {
  dougnOptions,
  sizesOptions,
  calculateDough,
  calculateSizes,
} from "..//utils/form-options";

import "./pizze-item.scss";

const PizzaItem = ({ item, cart, addToCart }) => {
  const { id, name, description, image, dough, sizes, price } = item;

  const [state, setState] = useState({
    dough,
    sizes,
  });

  const doughPrice = calculateDough(state.dough);
  const sizePrice = calculateSizes(state.size);

  const countCart = cart
    .filter((item) => item.name === name)
    .reduce((acc, item) => acc + item.count, 0);

  let totalPrice = price * sizePrice + doughPrice;
  const handleChange = (name, prop) => {
    setState((state) => {
      return {
        ...state,
        [prop]: name,
      };
    });
  };
  const addItem = () => {
    const cartProduct = {
      ...state,
      totalPrice,
    };
    addToCart(cartProduct);
  };
  return (
    <div className="pizza">
      <img src={image} alt="pizza" />
      <h3>{name}</h3>
      <h5>{description}</h5>
      <form>
        <div className="dough-pizza">
          <RadioButton
            list={dougnOptions}
            property={dough}
            changeProp={handleChange}
            name="dough"
            id={id}
          />
        </div>
        <div className="size-pizza">
          <RadioButton
            list={sizesOptions}
            property={sizes}
            changeProp={handleChange}
            name="size"
            id={id}
          />
        </div>
      </form>
      <div className="pizza-bottom">
        <h4>
          <span>от</span> {totalPrice.toFixed(2)} <span>бел.руб.</span>
        </h4>
        <button className="button add-cart" onClick={addItem}>
          <span className="add">Добавить</span>

          {countCart > 0 && <span className="count-item">{countCart}</span>}
        </button>
      </div>
    </div>
  );
};
const mapStateToPros = ({ cart }) => {
  return {
    cart,
  };
};
const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToPros, mapDispatchToProps)(PizzaItem);

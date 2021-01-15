import React, { useState } from "react";
import s from "./Radiosection.module.scss";
import ss from "./Checkbox.module.scss";
import sss from "./Price.module.scss";
import {
  cheeseMap,
  vegetablesMap,
  meatMap,
  diameterMap,
  heightsMap,
  saucesMap,
} from "./ingredients";
import { calculatePrice } from "./calculetePrice";
import { useCollection } from "./useCollection";
import classNames from "classnames";

export const FormOrder = ({ onPizzaCreated }) => {
  const [size, setSize] = useState("30 см");
  const [dough, setDoughe] = useState("пышное");
  const [sauce, setSauce] = useState("томатный");

  const [cheeses, addCheeses, removeCheeses] = useCollection();
  const [vegetables, addVegetables, removeVegetables] = useCollection();
  const [meat, addMeat, removeMeat] = useCollection();

  const price = calculatePrice({
    size,
    dough,
    sauce,
    cheeses,
    vegetables,
    meat,
  });

  const updateFoundation = (e) => {
    const { name, value } = e.target;
    if (name === "size") {
      setSize(value);
    } else if (name === "dough") {
      setDoughe(value);
    } else {
      setSauce(value);
    }
  };

  const updateIngredients = (e) => {
    const { value, checked } = e.target;
    if (e.target.name === "cheese") {
      if (checked) {
        addCheeses(value);
      } else {
        removeCheeses(value);
      }
    } else if (e.target.name === "vegetables") {
      if (checked) {
        addVegetables(value);
      } else {
        removeVegetables(value);
      }
    } else {
      if (checked) {
        addMeat(value);
      } else {
        removeMeat(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPizzaCreated({ size, cheeses, vegetables, meat, dough, sauce });
  };

  return (
    <>
      <form className={s.radiogroup} onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <div className={s.right}>
            <fieldset>
              <legend>Выбери размер:</legend>
              {diameterMap.map((name, index) => (
                <div className={s.wrapper} key={index}>
                  <input
                    className={s.state}
                    id={name}
                    type="radio"
                    name="size"
                    value={name}
                    onChange={updateFoundation}
                    checked={size === name}
                  />
                  <label className={s.label} htmlFor={name}>
                    <div className={s.indicator}></div>
                    <span className={s.text}>{name}</span>
                  </label>
                </div>
              ))}
            </fieldset>
          </div>

          <div className={s.right}>
            <fieldset className={s.right}>
              <legend>Выбери тесто: </legend>
              {heightsMap.map((name, index) => (
                <div className={s.wrapper} key={index}>
                  <input
                    className={s.state}
                    id={name}
                    type="radio"
                    name="dough"
                    value={name}
                    onChange={updateFoundation}
                    checked={dough === name}
                  />
                  <label className={s.label} htmlFor={name}>
                    <div className={s.indicator}></div>
                    <span className={s.text}>{name}</span>
                  </label>
                </div>
              ))}
            </fieldset>
          </div>

          <fieldset>
            <legend>Выбери соус: </legend>
            {saucesMap.map((name, index) => (
              <div className={s.wrapper} key={index}>
                <input
                  className={s.state}
                  id={name}
                  type="radio"
                  name="sauce"
                  value={name}
                  onChange={updateFoundation}
                  checked={sauce === name}
                />
                <label className={s.label} htmlFor={name}>
                  <div className={s.indicator}></div>
                  <span className={s.text}>{name}</span>
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        <fieldset>
          <legend>Сыр:</legend>
          {cheeseMap.map((name, index) => (
            <label className={ss.label} key={index}>
              <div className={ss.toggle}>
                <input
                  className={ss.toggle_state}
                  type="checkbox"
                  name="cheese"
                  value={name}
                  onChange={updateIngredients}
                  checked={cheeses.includes(name)}
                />
                <div className={ss.indicator}></div>
              </div>
              <div className={ss.label_text}>{name}</div>
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Овощи:</legend>
          {vegetablesMap.map((name, index) => (
            <label className={ss.label} key={index}>
              <div className={ss.toggle}>
                <input
                  className={ss.toggle_state}
                  type="checkbox"
                  name="vegetables"
                  value={name}
                  onChange={updateIngredients}
                  checked={vegetables.includes(name)}
                />
                <div className={ss.indicator}></div>
              </div>
              <div className={ss.label_text}>{name}</div>
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Мясо:</legend>
          {meatMap.map((name, index) => (
            <label className={ss.label} key={index}>
              <div className={ss.toggle}>
                <input
                  className={ss.toggle_state}
                  type="checkbox"
                  name="meat"
                  value={name}
                  onChange={updateIngredients}
                  checked={meat.includes(name)}
                />
                <div className={ss.indicator}></div>
              </div>
              <div className={ss.label_text}>{name}</div>
            </label>
          ))}
        </fieldset>

        <section className={sss.section}>
          <div className={sss.div}>
            <button className={classNames(sss.button, sss.button__raised)}>
              <span>Готово: {price}</span>
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

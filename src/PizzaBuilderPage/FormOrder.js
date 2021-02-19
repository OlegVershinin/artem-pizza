import React, { useState } from "react";
import s from "./Radiosection.module.scss";
import sss from "../PizzaPreviewPage/Price.module.scss";
import {
  cheeseMap,
  vegetablesMap,
  meatMap,
  diameterMap,
  heightsMap,
  saucesMap,
} from "../shared/ingredients";
import { calculatePrice } from "../shared/calculetePrice";
import { useCollection } from "../shared/useCollection";
import classNames from "classnames";

import { RadioSection, CheckboxSection } from "../RenderSection";

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
            <RadioSection>
              {["размер", diameterMap, "size", updateFoundation, size]}
            </RadioSection>
          </div>

          <div className={s.right}>
            <RadioSection>
              {["тесто", heightsMap, "dough", updateFoundation, dough]}
            </RadioSection>
          </div>

          <RadioSection>
            {["соус", saucesMap, "sauce", updateFoundation, sauce]}
          </RadioSection>
        </div>

        <CheckboxSection>
          {["Сыр", cheeseMap, "cheese", updateIngredients, cheeses]}
        </CheckboxSection>

        <CheckboxSection>
          {[
            "Овощи",
            vegetablesMap,
            "vegetables",
            updateIngredients,
            vegetables,
          ]}
        </CheckboxSection>

        <CheckboxSection>
          {["Мясо", meatMap, "meat", updateIngredients, meat]}
        </CheckboxSection>

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

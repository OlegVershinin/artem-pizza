import s from "./PizzaBuilderPage/Radiosection.module.scss";
import ss from "./PizzaBuilderPage/Checkbox.module.scss";

export const RadioSection = (props) => {
  const [title, mapName, nameInput, func, checkedName] = props.children;

  return (
    <div className={s.right}>
      <fieldset>
        <legend>Выбери {title}:</legend>
        {mapName.map((name, index) => (
          <div className={s.wrapper} key={index}>
            <input
              className={s.state}
              id={name}
              type="radio"
              name={nameInput}
              value={name}
              onChange={func}
              checked={checkedName === name}
            />
            <label className={s.label} htmlFor={name}>
              <div className={s.indicator}></div>
              <span className={s.text}>{name}</span>
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export const CheckboxSection = (props) => {
  const [title, mapName, nameInput, func, checkedName] = props.children;

  return (
    <fieldset>
      <legend>{title}:</legend>
      {mapName.map((name, index) => (
        <label className={ss.label} key={index}>
          <div className={ss.toggle}>
            <input
              className={ss.toggle_state}
              type="checkbox"
              name={nameInput}
              value={name}
              onChange={func}
              checked={checkedName.includes(name)}
            />
            <div className={ss.indicator}></div>
          </div>
          <div className={ss.label_text}>{name}</div>
        </label>
      ))}
    </fieldset>
  );
};

import BgChanger from "../../BgChanger";
import Counter from "../../Counter";
import CurrencyConverter from "../../CurrencyConverter";
import PasswordGenerator from "../../PasswordGenerator";
import ThemeSwitcherLayout from "../ThemeSwitcher/ThemeSwitcherLayout";

function Projects() {
    let counterPropsObj = {
      startValue: 0,
      diffValue: 5,
    };
  return (
    <>
      <Counter obj={counterPropsObj} />
      <BgChanger />
      <PasswordGenerator />
      <CurrencyConverter />
      <ThemeSwitcherLayout />
    </>
  );
}

export default Projects;

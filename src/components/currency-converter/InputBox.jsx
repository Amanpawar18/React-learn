import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {

  // useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex text-black `}>
      <div className="w-1/2">
        <label className=" mb-2 inline-block" htmlFor={amountInputId}>
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          value={amount}
          id={amountInputId}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className=" mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => {
            return (<option value={currency} key={currency}>
              {currency}
            </option>);
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

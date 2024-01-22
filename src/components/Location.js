import { useContext} from "react";
import { AppContext } from "../context/AppContext";

const Location = () => {
    const {currency,dispatch} = useContext(AppContext)
  const currencyArray = [
    { label: "Dollar", logo: "$" },
    { label: "Pound", logo: "£" },
    { label: "Euro", logo: "€" },
    { label: "Rupee", logo: "₹" },
  ];

  const currencyChangeHandler = (event) => {
    console.log(event.target.value);
    dispatch({
        type:"CHG_CURRENCY",
        payload:event.target.value
    })
  }
  return (
      <select style={{backgroundColor:"lightGreen",margin: "40px 0",padding:"5px 50px 5px 0px",color:"white",border:"1px solid white"}} value={currency} onChange={currencyChangeHandler}>
        {currencyArray.map((item) => (
          <option key={item.logo} value={item.logo}>{item.label}</option>
        ))}
      </select>
  );
};

export default Location;

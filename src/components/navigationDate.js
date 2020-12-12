import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const NavigationDate = (props) => {
  const orders = useSelector((selector) => selector.orders);
  const [years, setYears] = useState([2020]);

  useEffect(() => {
    if (orders.length > 1) {
      const lastYear = orders[0].createdAt.getFullYear();
      const firstYear = orders[orders.length - 1].createdAt.getFullYear();
      const diference = 1 + lastYear - firstYear;
      const yrs = new Array(diference).fill(lastYear).map((e, i) => e - i);
      console.log(yrs);
      setYears(yrs);
    }
  }, [orders]);

  const changeYear = (year) => {
    props.setDate((prev) => {
      return { ...prev, year };
    });
  };
  const changeMonth = (month) => {
    props.setDate((prev) => {
      return { ...prev, month };
    });
  };

  return (
    <div>
      <div>
        años
        {years.map((year) => (
          <Button
            key={year}
            onClick={(e) => changeYear(year)}
            variant="contained"
            color={props.date.year === year ? "primary" : "secondary"}
          >
            {year}
          </Button>
        ))}
      </div>
      mes
      <Button variant="contained" onClick={(e) => changeMonth(10)}>
        noviembre
      </Button>
      <Button variant="contained" onClick={(e) => changeMonth(11)}>
        diciembre
      </Button>
    </div>
  );
};

export default NavigationDate;

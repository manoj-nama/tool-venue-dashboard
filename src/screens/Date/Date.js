import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "./Date.scss";
import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePickerComp = ({ onChange }) => {
  const [range, setRange] = useState([
    {
      startDate: addDays(new Date(), -5),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <label className="range_display" onClick={() => setOpen(true)}>
        {format(range[0].startDate, "MM/dd/yyyy")}
        {" - "}
        {format(range[0].endDate, "MM/dd/yyyy")}
      </label>
      <div ref={refOne}>
        {open && (
          <DateRangePicker
            onChange={(item) => {
              setRange([item.selection]);
              onChange([item.selection], "dateRange");
            }}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePickerComp;

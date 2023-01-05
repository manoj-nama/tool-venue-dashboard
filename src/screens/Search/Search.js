import React from "react";
import { useState,} from "react";
import "./Search.css";
import Form from "react-bootstrap/Form";

function Search() {
  const [filterType, setFilterType] = useState("default");
  const handleFilter = (e) => [setFilterType(e.target.value)];

  return (
    <div className="wrapclass">
      <Form.Select
            onChange={handleFilter}
            className="filterbody"
            aria-label="Default select example"
          >
            <option className="filteroption" value="default">
              Default
            </option>
            <option className="filteroption"  value="Ascending">
             Ascending
            </option>
            <option className="filteroption"  value="Descending">
             Descending
            </option>
          </Form.Select>
    </div>
  )
}

export default Search



















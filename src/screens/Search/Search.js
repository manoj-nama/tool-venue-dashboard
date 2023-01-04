import React from "react";
import Select from "react-select";

class SelectComponent extends React.Component {
  componentDidMount() {}
  render() {
    //const { data } = this.props;

    const options = [
        { label: "Ascending", value: 1 },
        { label: "Desending", value: 2 }
    ];

    const theme = theme => ({
      ...theme,
      colors: {
        
        ...theme.colors,
        text:"black",
        primary25: "#f3f3f3",
        primary: "blue"
        
  


      }
    });

    return (
      <Select
        className="select"
        defaultValue={options[1]}
        options={options}
        placeholder="Sort By"
        theme={theme}
      />
    );
  }
}

export default SelectComponent;


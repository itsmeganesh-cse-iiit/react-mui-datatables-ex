import React from "react";
import MUIDataTable from "mui-datatables";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  onRowClick = props => {
    this.setState({
      searchText: props[0]
    });
  };

  customToolbar = props => {
    console.log("g", props);
  };
  render() {
    const columns = ["Name", "Title", "Location", "Age", "Salary"];

    const data = [
      ["Gabby", "Business Analyst", "Minneapolis", 30, "$100,000"],
      ["Aiden", "Business Consultant", "Dallas", 55, "$200,000"],
      ["Jaden", "Attorney", "Santa Ana", 27, "$500,000"],
      ["Franky", "Business Analyst", "St. Petersburg", 22, "$50,000"],
      ["Gabby George", "Business Consultant", "Toledo", 28, "$75,000"]
    ];

   

    return (
      <MUIDataTable
        title={["ACME Employee list"]}
        data={data}
        columns={columns}
        selectableRowsOnClick={false}
        options={{
          onRowClick: this.onRowClick,
          searchText: this.state.searchText,
          customToolbar: this.customToolbar
        }}
      />
    );
  }
}

export default App;

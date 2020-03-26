import React from "react";
import MUIDataTable from "mui-datatables";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      searchBreadCrumbs: []
    };
  }

  onRowClick = props => {
    const { searchBreadCrumbs } = this.state;

    let breadCrumbs = searchBreadCrumbs;
    if (searchBreadCrumbs) {
      breadCrumbs = ![...searchBreadCrumbs].find(each => each === props[0])
        ? [...searchBreadCrumbs, props[0]]
        : breadCrumbs;
    }
    console.log(breadCrumbs);
    this.setState({
      searchText: props[0],
      searchBreadCrumbs: breadCrumbs
    });
  };

  filterHandler = filter => {
    const { searchBreadCrumbs } = this.state;
    let breadCrumbs = [...searchBreadCrumbs].filter(each => each !== filter);
    this.setState({
      searchText: breadCrumbs.slice(-1),
      searchBreadCrumbs: breadCrumbs
    });
  };

  customToolbar = props => {
    console.log("g", props);
  };
  render() {
    const columns = ["Name", "Title", "Location", "Age", "Salary"];

    const data = [
      ["Bumper", "Business Analyst", "Minneapolis", 30, "$100,000"],
      ["Aiden", "Business Consultant", "Dallas", 55, "$200,000"],
      ["Jaden", "Attorney", "Santa Ana", 27, "$500,000"],
      ["Franky", "Business Analyst", "St. Petersburg", 22, "$50,000"],
      ["Bumper George", "Business Consultant", "Toledo", 28, "$75,000"]
    ];

    return (
      <>
        <MUIDataTable
          title={["Part Details"]}
          data={data}
          columns={columns}
          selectableRowsOnClick={false}
          options={{
            onRowClick: this.onRowClick,
            searchText: this.state.searchText,
            customToolbar: this.customToolbar,
            selectableRows: "none"
          }}
        />
        <br />
        <SearchBreadCrumbs
          data={this.state.searchBreadCrumbs}
          filterHandler={this.filterHandler}
        />
      </>
    );
  }
}

class SearchBreadCrumbs extends React.Component {
  render() {
    const breadCrumStyle = {};
    return (
      <ol>
        {this.props.data &&
          this.props.data.map(eachFilter => (
            <li>
              {eachFilter}{" "}
              <span
                onClick={() => this.props.filterHandler(eachFilter)}
                style={{ cursor: "pointer" }}
              >
                X
              </span>
            </li>
          ))}
      </ol>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../assets/css/app.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import LastAsicInDB from "./LastAsicInDB";
import LastRigInDB from "./LastRigInDB";
import UsersTable from "./UsersTable";
import AsicTable from "./AsicTable";
import RigTable from "./RigTable";
import ContentRowProducts from "./ContentRowProducts";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersTotal: 0,
      rigTotal: 0,
      asicTotal: 0,
      asicList: [],
      rigList: [],
      usersList: [],
      lastAsic: {},
      lastRig: {},
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((error) => console.log(error));
  }

  traerInfoUsers() {
    this.apiCall("http://localhost:3000/api/users", this.mostrarInfoUsers);
  }
  traerInfoRig() {
    this.apiCall(
      "http://localhost:3000/api/rig",
      this.mostrarInfoRig
    );
    }
    traerInfoAsic() {
      this.apiCall(
        "http://localhost:3000/api/asic",
        this.mostrarInfoAsic
      );
  }

  componentDidMount() {
    this.traerInfoUsers(); this.traerInfoRig(); this.traerInfoAsic();
  }
  
  mostrarInfoUsers = (data) => {
    //console.log(data.data);
    this.setState({
      usersTotal: data.count,
      usersList: data.data,
    });
  };

  mostrarInfoAsic = (data) => {
    //console.log(data.data);
    this.setState({
      asicTotal: data.count,
      lastAsic: data.data[data.data.length - 1],
      asicList: data.data,
    });
  };

  mostrarInfoRig = (data) => {
    //console.log(data.data);
    this.setState({
      rigTotal: data.count,
      lastRig: data.data[data.data.length - 1],
      rigList: data.data,
    });
  };

  render() {
    return (
      <>
        <div>
          <div>
            {/* //  <!-- PageContent --> */}
            <div className="container">
              {/* //  <!-- PageFeatures --> */}
              <div className="row text-center"></div>
            </div>
          </div>
        </div>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ContentRowProducts
                        asicTotal={this.state.asicTotal}
                        rigTotal={this.state.rigTotal}
                        usersTotal={this.state.usersTotal}
                      ></ContentRowProducts>
                    }
                  ></Route>
                  
                  <Route
                    path="/LastRigInDB"
                    element={<LastRigInDB {...this.state.lastRig} />}
                    exact="true"
                  ></Route>
                  <Route
                    path="/LastAsicInDB"
                    element={<LastAsicInDB {...this.state.lastAsic} />}
                    exact="true"
                  ></Route>
                  <Route
                    path="/AsicTable"
                    element={
                      <AsicTable asicList={this.state.asicList} />
                    }
                    exact="true"
                  ></Route>
                  <Route
                  path="/RigTable"
                  element={
                    <RigTable rigList={this.state.rigList} />
                  }
                  exact="true"
                ></Route>
                  <Route
                    path="/UsersTable"
                    element={<UsersTable usersList={this.state.usersList} />}
                    exact="true"
                  ></Route>
                  <Route path="*" element={<NotFound />}></Route>
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

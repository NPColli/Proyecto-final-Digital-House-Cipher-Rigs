import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    // <!-- Sidebar -->
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="sidebar-brand-text mx-3">CIPHER</div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0"></hr>

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link to="/AsicTable" exact="true" className="nav-link collapsed">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Listado de Asic</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/RigTable" exact="true" className="nav-link collapsed">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Listado de Rigs</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/UsersTable" exact="true" className="nav-link collapsed">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Listado de Usuarios</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider"></hr>

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Actions</div>

      {/* <!-- Nav Item - Pages --> */}
      <li className="nav-item">
        <Link
          to="/LastRigInDB"
          exact="true"
          className="nav-link collapsed"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Último RIG</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <Link to="/LastAsicInDB" exact="true" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Último ASIC</span>
        </Link>
      </li>

  

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block"></hr>
    </ul>
    // <!-- End of Sidebar -->
  );
}

export default Sidebar;

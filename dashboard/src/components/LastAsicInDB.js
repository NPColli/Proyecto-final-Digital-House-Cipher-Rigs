import productImage from "../assets/images/group-1660287782962.png";
import { Link } from "react-router-dom";

function LastAsicInDB(props) {
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Último ASIC en la base de datos
            </h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "25rem" }}
                src={productImage}
                alt="dummy"
              />
            </div>
            <p>{props.titulo}</p>
            <p>{props.precio}</p>
            <p>{props.especificaciones}</p>
            <h6>
              <a
                className="nav-link"
                href={"http://localhost:3000/asic/" + props.id_asic}
              >
                <span>Ver detalles...</span>
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastAsicInDB;

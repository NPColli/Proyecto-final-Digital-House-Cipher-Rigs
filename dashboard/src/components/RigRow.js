function RigRow(props) {
  return (
    <>
      <td>
        <h6>{props.id_rigs}</h6>
      </td>
      <td>
        <h6>
          <a
            className="nav-link"
            href={"http://localhost:3000/rigs/" + props.id_rigs}
          >
            <span>{props.titulo}</span>
          </a>
        </h6>
      </td>
      <td>
        <h6>{props.especificaciones}</h6>
      </td>
      <td>
        <h6>{props.precio}</h6>
      </td>
    </>
  );
}

export default RigRow;

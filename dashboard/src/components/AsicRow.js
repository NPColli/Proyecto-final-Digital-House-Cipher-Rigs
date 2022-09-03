function AsicRow(props) {
  return (
    <>
      <td>
        <h6>{props.id_asic}</h6>
      </td>
      <td>
        <h6>
          <a
            className="nav-link"
            href={"http://localhost:3000/asic/" + props.id_asic}
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

export default AsicRow;

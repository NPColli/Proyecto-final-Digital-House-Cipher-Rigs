function UserRow(props) {
  return (
    <>
      <td>
        <h6>{props.user_id}</h6>
      </td>
      <td>
        <h6>
          <span>{props.nombre}</span>
        </h6>
      </td>
      <td>
        <h6>{props.email}</h6>
      </td>
    </>
  );
}

export default UserRow;

import UserRow from "./UserRow";

function UsersTable(props) {
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800"> Todos los usuarios de la base de datos</h1>

      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                {props.usersList.map((user, i) => (
                  <tr key={i}>
                    <UserRow {...user} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersTable;

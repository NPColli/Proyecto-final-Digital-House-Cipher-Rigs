import UserRow from "./UserRow";

function UsersTable(props) {
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800"> All the users in the Database</h1>

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
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {props.usersList.map((users, i) => (
                  <tr key={i}>
                    <UserRow {...users} />
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

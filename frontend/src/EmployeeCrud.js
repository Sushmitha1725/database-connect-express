import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeCrud() {
  const [_id, setId] = useState("");
  const [username, setuserName] = useState("");
  const [fathername, setfatherName] = useState("");
  const [mothername, setmotherName] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const [Details, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8000/user/getAll");
    setUsers(result.data.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/create", {
        username: username,
        fathername: fathername,
        mothername: mothername,
        phonenumber:phonenumber,
      });
      alert("User Registation Successfully");
      setId("");
      setuserName("");
      setfatherName("");
      setmotherName("");
      setphonenumber("");
      Load();
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  async function editEmployee(Details) {
    setuserName(Details.username);
    setfatherName(Details.fathername);
    setmotherName(Details.mothername);
    setphonenumber(Details.phonenumber);
    setId(Details._id);
  }

  async function DeleteEmployee(_id) {
    await axios.delete("http://localhost:8000/user/delete/" + _id);
    alert("Employee deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "http://localhost:8000/user/update/" +
          Details.find((u) => u._id === _id)._id || _id,
        {
          _id: _id,
          username: username,
          fathername: fathername,
          mothername: mothername,
          phonenumber:phonenumber,
        }
      );
      alert("Registation Updateddddd");
      setId("");
      setuserName("");
      setfatherName("");
      setmotherName("");
      setphonenumber("");
      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="heading">
      <h1>Personal Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="_id"
              hidden
              value={_id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>Person Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={username}
              onChange={(event) => {
                setuserName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Father Name</label>
            <input
              type="text"
              class="form-control"
              id="address"
              value={fathername}
              onChange={(event) => {
                setfatherName(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Mothername</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={mothername}
              onChange={(event) => {
                setmotherName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Phonenumber</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={phonenumber}
              onChange={(event) => {
                setphonenumber(event.target.value);
              }}
            />
          </div>

          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>

      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">User Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Mother Name</th>
            <th scope="col">Phone Number</th>

            <th scope="col">Option</th>
          </tr>
        </thead>
        {Details.map(function fn(Details) {
          return (
            <tbody>
              <tr>
                <th scope="row">{Details._id} </th>
                <td>{Details.username}</td>
                <td>{Details.fathername}</td>
                <td>{Details.mothername}</td>
                <td>{Details.phonenumber}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editEmployee(Details)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteEmployee(Details._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default EmployeeCrud;
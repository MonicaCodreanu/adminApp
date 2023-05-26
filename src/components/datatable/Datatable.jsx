import "./datatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, productsColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function Datatable(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    //Listen-Realtime
    const unsub = onSnapshot(
      collection(db, props.type),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [props.type]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  if (props.type === "users") {
    return (
      <div className="datatable">
        <div className="dataTableTitle">
          Add New User
          <Link to="/users/new" className="link">
            Add New
          </Link>
        </div>
        <DataGrid
          className="dataGrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 9,
              },
            },
          }}
          pageSizeOptions={[9]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    );
  }
  if (props.type === "products") {
    return (
      <div className="datatable">
        <div className="dataTableTitle">
          Add New Product Sale
          <Link to="/products/new" className="link">
            Add New
          </Link>
        </div>
        <DataGrid
          className="dataGrid"
          rows={data}
          columns={productsColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 9,
              },
            },
          }}
          pageSizeOptions={[9]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    );
  }
}

export default Datatable;

//old use effect

// useEffect(() => {
// const fetchData = async () => {
//   let list = [];
//   try {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       list.push({ id: doc.id, ...doc.data() });
//       // console.log(doc.id, " => ", doc.data());
//     });
//     setData(list);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fetchData();
// }, []);

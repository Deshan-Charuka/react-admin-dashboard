import React from "react";
import "./UserList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.userName}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <button className="userListEdit">Edit</button>
          <DeleteOutlineIcon className="userListDelete" />
        </>
      );
    }
  },  
];

const rows = [
  {
    id: 1,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
  {
    id: 2,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
  {
    id: 3,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
  {
    id: 4,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
  {
    id: 5,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
  {
    id: 6,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
  {
    id: 7,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
  {
    id: 8,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
  {
    id: 9,
    userName: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "Jsnow@hotmail.com",
    status: "active",
    transaction: "$129.00",
  },
];
export default function UserList() {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        //rowsPerPageOptions={[5,8,7]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

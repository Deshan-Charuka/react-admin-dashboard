import React, { Component } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import SupplierDataService from "../../service/SupplierDataService";
import addNotification from "react-push-notification";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.refreshSuppliers = this.refreshSuppliers.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      suppliers: [],
      message: null,
    };
    this.columns = [
      { field: "supId", headerName: "ID", width: 90 },
      {
        field: "supName",
        headerName: "Name",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userListUser">
              <img
                className="userListImg"
                src={
                  "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
              />
              {params.row.supName}
            </div>
          );
        },
      },
      { field: "supAddress", headerName: "Address", width: 200 },
      {
        field: "supTelephone",
        headerName: "Telephone",
        width: 120,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/user/" + params.row.supId}>
                <button className="userListEdit" onClick={()=>{localStorage.setItem(`${params.row.supId}`,JSON.stringify(params.row))}}>Edit</button>
              </Link>

              <DeleteOutlineIcon
                className="userListDelete"
                onClick={() => {
                  this.handleDelete(params.row.supId);
                }}
              />
            </>
          );
        },
      },
    ];
  }

  handleDelete(id) {
    SupplierDataService.deleteSupplier(id).then((response) => {
      addNotification({
        title: "Success!!",
        subtitle: "Arrow Logistics - Suppliers",
        message: `Deletion of the Supplier ${id} is Successful!!`,
        theme: "light",
        closeButton: "X",
        backgroundTop: "light",
        backgroundBottom: "#90EE90",
      });
      this.refreshSuppliers();
    });
  }

  componentDidMount() {
    this.refreshSuppliers();
  }

  refreshSuppliers() {
    SupplierDataService.retrieveAllSuppliers().then((Response) => {
      this.setState({ suppliers: Response.data });
    });
  }
  render() {
    const { suppliers } = this.state;
    return (
      <div className="userList">
        <DataGrid
          rows={suppliers}
          columns={this.columns}
          pageSize={8}
          //rowsPerPageOptions={[5,8,7]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row.supId}
        />
      </div>
    );
  }
}

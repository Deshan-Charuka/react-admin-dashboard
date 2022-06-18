import React, { Component } from "react";
import "./CreateOrder.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutline from "@mui/icons-material/MailOutline";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";

import CustomerDataService from "../../service/CustomerDataService";
import ItemDataService from "../../service/ItemDataService";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class CreateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCustomerOptions: [],
      selectedCustomerOption: null,
      Customers: [],
      selectedCustomer: null,
      selectItemOptions: [],
      selectedItemOption: null,
      Items: [],
      selectedItem: null,
      ItemList: [],
      selectedItemQty: null,
      orderTotal: 0,
    };
    this.columns = [
      { field: "code", headerName: "Item Code", width: 90 },
      {
        field: "description",
        headerName: "Item Name",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="itemListUser">
              <img
                className="itemListImg"
                src={`${params.row.itemImgUrl}`}
                alt=""
              />
              {params.row.description}
            </div>
          );
        },
      },
      { field: "qty", headerName: "Qty", width: 200 },
      {
        field: "unitPrice",
        headerName: "Item Unit Price",
        width: 100,
      },
      {
        field: "total",
        headerName: "Total",
        width: 120,
        renderCell: (params) => {
          return <>{params.row.unitPrice * params.row.qty}</>;
        },
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <DeleteOutlineIcon
                className="itemListDelete"
                onClick={() => {
                  this.handleDelete(params.row.code);
                }}
              />
            </>
          );
        },
      },
    ];
  }

  componentDidMount() {
    this.getCustomers();
    this.getItems();
  }

  async getCustomers() {
    CustomerDataService.retrieveAllCustomers().then((response) => {
      this.setState({
        Customers: response.data,
        selectCustomerOptions: response.data.map((customer) => {
          return {
            id: customer.id,
            label: customer.companyName,
          };
        }),
      });
    });
  }

  async getItems() {
    ItemDataService.retrieveAllItems().then((response) => {
      this.setState({
        Items: response.data,
        selectItemOptions: response.data.map((item) => {
          return {
            id: item.code,
            label: item.description,
          };
        }),
      });
    });
  }

  handleCustomerComboChange = (event, value) => {
    if (value) {
      this.setState(
        {
          selectedCustomerOption: value,
        },
        () => {
          this.loadCustomerDetails();
        }
      );
    } else {
      this.setState({
        selectedCustomerOption: null,
        selectedCustomer: null,
      });
    }
  };

  handleItemComboChange = (event, value) => {
    if (value) {
      this.setState(
        {
          selectedItemOption: value,
        },
        () => {
          this.loadItemDetails();
        }
      );
    } else {
      this.setState({
        selectedItemOption: null,
        selectedItem: null,
      });
    }
  };

  handleItemAddQty = (e) => {
    if (e) {
      this.setState({
        selectedItemQty: e.target.value,
      });
    } else {
      this.setState({
        selectedItemQty: null,
      });
    }
  };

  loadCustomerDetails = () => {
    const { Customers, selectedCustomerOption } = this.state;
    this.setState({
      selectedCustomer: Customers.find(
        (customer) => customer.id === selectedCustomerOption.id
      ),
    });
  };

  loadItemDetails = () => {
    const { Items, selectedItemOption } = this.state;
    this.setState({
      selectedItem: Items.find((item) => item.code === selectedItemOption.id),
    });
  };

  addQtyToItemList = () => {
    //Todo: validation is here...
    const { selectedItemQty, selectedItem, ItemList } = this.state;

    let obj = selectedItem;
    obj.qty = Number(selectedItemQty);
    obj.unitPrice = Number(selectedItem.unitPrice);
    let total = obj.qty * obj.unitPrice;
    // let isExistIndex = ItemList.findIndex(
    //   (element) => element.code === obj.code
    // );

    // if (isExistIndex === -1) {
    //   this.setState({
    //     ItemList: [...this.state.ItemList, obj],
    //     selectedItem: null,
    //     selectedItemQty: null,
    //     selectedItemOption: null,
    //   });
    // } else {
    //   this.setState((prevState) => {
    //     const newItemList = [...prevState.ItemList];
    //     newItemList[isExistIndex].qty =
    //       Number(selectedItemQty) ;
    //     return { ItemList: newItemList };
    //   });
    // }

    this.setState({
      ItemList: [...this.state.ItemList, obj],
      //orderTotal: this.state.orderTotal + total,
      selectedItem: null,
      selectedItemQty: null,
      selectedItemOption: null,
    });
  };

  handleDelete = (val) => {
    const { selectedItem } = this.state;
    this.setState({
      ItemList: this.state.ItemList.filter(function(item) {
        return item.code !== val;
      }),
      //orderTotal:this.state.orderTotal-(selectedItem.qty*selectedItem.unitPrice)
    });
  };

  render() {
    const {
      selectedCustomer,
      selectCustomerOptions,
      selectedItem,
      selectItemOptions,
      ItemList,
      //orderTotal,
    } = this.state;
    return (
      <div className="create-order">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <h1>Create order</h1>
              </Item>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <h3>Customer Details</h3>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={selectCustomerOptions}
                    onChange={this.handleCustomerComboChange}
                    renderInput={(params) => (
                      <TextField {...params} label="Customers" />
                    )}
                  />
                </Item>
              </Grid>
              <Grid item xs={8}>
                {selectedCustomer && (
                  <div className="customerShow">
                    <div className="customerShowTop">
                      <img
                        // src={`${selectedCustomer && selectedCustomer.supImgUrl}`}
                        src={""}
                        alt=""
                        className="customerShowImg"
                      />
                      <div className="customerShowTopTitle">
                        <span className="customerShowcustomername">
                          {selectedCustomer && selectedCustomer.companyName}
                        </span>
                        <span className="customerShowcustomerTitle">
                          {selectedCustomer && selectedCustomer.salePersonName}
                        </span>
                      </div>
                    </div>
                    <div className="customerShowBottom">
                      <span className="customerShowTitle">Account Details</span>
                      <div className="customerShowInfo">
                        <PermIdentityIcon className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          {selectedCustomer && selectedCustomer.salePersonName}
                        </span>
                      </div>
                      <div className="customerShowInfo">
                        <CalendarTodayIcon className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          {selectedCustomer && selectedCustomer.nic}
                        </span>
                      </div>
                      <span className="customerShowTitle">Contact Details</span>
                      <div className="customerShowInfo">
                        <PhoneAndroid className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          {selectedCustomer && selectedCustomer.contact}
                        </span>
                      </div>
                      <div className="customerShowInfo">
                        <MailOutline className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          {selectedCustomer && selectedCustomer.email}
                        </span>
                      </div>
                      <div className="customerShowInfo">
                        <LocationSearchingIcon className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          {selectedCustomer && selectedCustomer.address} | Sri
                          Lanka
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <h3>Item Details</h3>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={selectItemOptions}
                    onChange={this.handleItemComboChange}
                    renderInput={(params) => (
                      <TextField {...params} label="Items" />
                    )}
                  />
                </Item>
              </Grid>
              <Grid item xs={8}>
                {selectedItem && (
                  <div className="customerShow">
                    <div className="customerShowTop">
                      <img
                        src={`${selectedItem && selectedItem.itemImgUrl}`}
                        alt=""
                        className="customerShowImg"
                      />
                      <div className="customerShowTopTitle">
                        <span className="customerShowcustomername">
                          {selectedItem && selectedItem.description}
                        </span>
                        <span className="customerShowcustomerTitle">
                          {selectedCustomer && selectedCustomer.code}
                        </span>
                      </div>
                    </div>
                    <div className="customerShowBottom">
                      <span className="customerShowTitle">Product Details</span>
                      <div className="customerShowInfo">
                        <PermIdentityIcon className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          {selectedItem && selectedItem.description}
                        </span>
                      </div>
                      <div className="customerShowInfo">
                        <CalendarTodayIcon className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          Unit Price | {selectedItem && selectedItem.unitPrice}
                          /=LKR
                        </span>
                      </div>
                      <span className="customerShowTitle">
                        Quantity Details
                      </span>
                      <div className="customerShowInfo">
                        <PhoneAndroid className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          {selectedItem && selectedItem.qtyOnHand}
                        </span>
                      </div>
                      <div className="customerShowInfo">
                        <LocationSearchingIcon className="customerShowIcon" />
                        <span className="customerShowInfoTitle">
                          Stocks Availability -{" "}
                          {selectedItem && selectedItem.itemStatus}
                        </span>
                      </div>
                      <div className="customerShowInfoAddQty">
                        <TextField
                          id="outlined-number"
                          onChange={this.handleItemAddQty}
                          label="Qty"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <button
                          className="orderAddButtonQty"
                          onClick={() => {
                            this.addQtyToItemList();
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Grid>
              {ItemList && (
                <Grid item xs={12}>
                  <DataGrid
                    rows={ItemList}
                    columns={this.columns}
                    pageSize={8}
                    //rowsPerPageOptions={[5,8,7]}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowId={(row) => row.code}
                    autoHeight={true}
                  />
                </Grid>
              )}
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={4}>
                {/* <Item>
                  <p>
                    <b> Final Amount: </b>
                  </p>
                  <span>{orderTotal}</span>
                </Item> */}
              </Grid>
              <Grid item xs={12}>
                <button
                  className="orderButton"
                  onClick={() => {
                    //this.addQtyToItemList();
                  }}
                >
                  Place Order
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

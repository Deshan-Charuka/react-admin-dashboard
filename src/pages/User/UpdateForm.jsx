import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./User.css";
import * as Yup from "yup";
import SupplierDataService from "../../service/SupplierDataService";
import addNotification from "react-push-notification";
import { useNavigate } from "react-router-dom";
import UploadFiles from "./UploadFiles";

const updateSupplierSchema = Yup.object().shape({
  supName: Yup.string()
    .required("Name is required!")
    .nullable()
    .min(3, "Name is too short! - should be 3 chars min"),
  supAddress: Yup.string().required("Address is required!"),
  supTelephone: Yup.string()
    .required("Telephone is required")
    .nullable()
    .matches(/^[0-9]{10}$/g, "Please enter a valid phone number!"),
});

const UpdateForm = (props) => {
  const navigate = useNavigate();

  const updateSupplier = (supplier) => {
    supplier.supImgUrl =
      localStorage.getItem("uploadedImgUrl") != null
        ? localStorage.getItem("uploadedImgUrl")
        : localStorage.getItem("oldImgUrl");
    SupplierDataService.updateSupplier(supplier).then((response) => {
      addNotification({
        title: "Success!!",
        subtitle: "Arrow Logistics - Suppliers",
        message: `Update of the Supplier ${supplier.supId} is Successful!!`,
        theme: "light",
        closeButton: "X",
        backgroundTop: "light",
        backgroundBottom: "#90EE90",
      });
      navigate("/users");
      localStorage.clear();
    }).catch(()=>{
      //ToDo:
    })
  };

  return (
    <Formik
      enableReinitialize
      initialValues={props.initialValues}
      validationSchema={updateSupplierSchema}
      onSubmit={updateSupplier}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;

        return (
          <div>
            <span className="userUpdateTitle">Edit</span>
            <Form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label htmlFor="supId">Supplier ID</label>
                  <Field
                    type="text"
                    name="supId"
                    id="supId"
                    className="userUpdateInput"
                    disabled
                  />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="supName">Supplier Name</label>
                  <Field
                    type="text"
                    name="supName"
                    id="supName"
                    className={`userUpdateInput ${
                      errors.supName && touched.supName ? "input-error" : null
                    }`}
                  />
                  <ErrorMessage
                    name="supName"
                    component="span"
                    className="error"
                  />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="supAddress">Address</label>
                  <Field
                    type="text"
                    name="supAddress"
                    id="supAddress"
                    className={`userUpdateInput ${
                      errors.supAddress && touched.supAddress
                        ? "input-error"
                        : null
                    }`}
                  />
                  <ErrorMessage
                    name="supAddress"
                    component="span"
                    className="error"
                  />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="supTelephone">Telephone</label>
                  <Field
                    type="text"
                    name="supTelephone"
                    id="supTelephone"
                    className={`userUpdateInput ${
                      errors.supTelephone && touched.supTelephone
                        ? "input-error"
                        : null
                    }`}
                  />
                  <ErrorMessage
                    name="supTelephone"
                    component="span"
                    className="error"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                {/* uploader comp */}
                <UploadFiles />
                <button
                  type="submit"
                  className={`userUpdateButton ${
                    !(dirty && isValid) ? "disabled-btn" : ""
                  }`}
                  disabled={!(dirty && isValid)}
                >
                  Update
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default UpdateForm;

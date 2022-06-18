import React, { Component } from "react";
import SupplierDataService from "../../service/SupplierDataService";
import "./User.css";
import LinearProgress from "@mui/material/LinearProgress";
import Publish from "@mui/icons-material/Publish";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFile: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
    };
  }

  selectFile(event) {
    this.setState(
      {
        selectedFile: event.target.files[0],
      },
      () => {
        this.upload();
      }
    );
  }

  upload() {
    const { selectedFile } = this.state;

    this.setState({
      progress: 0,
      currentFile: selectedFile,
    });

    SupplierDataService.uploadImage(selectedFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        localStorage.setItem("uploadedImgUrl", response.data.downloadUri);
      })
      .catch(() => {
          //Todo:
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          selectedFile: undefined,
          currentFile: undefined,
        });
      });
  }

  render() {
    const { selectedFile, progress } = this.state;

    return (
      <div>
        <div className="userUpdateUpload">
          <img
            className="userUpdateImg"
            src={`${
                localStorage.getItem('uploadedImgUrl') != null
                ? localStorage.getItem('uploadedImgUrl')
                : localStorage.getItem('oldImgUrl')
            }`}
            alt=""
          />
          <label htmlFor="file">
            <Publish className="userUpdateIcon" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={this.selectFile}
          />
        </div>
        {selectedFile && (
          <LinearProgress variant="determinate" value={progress} style={{marginTop:"10px",marginRight:"10px"}}/>
        )}
      </div>
    );
  }
}

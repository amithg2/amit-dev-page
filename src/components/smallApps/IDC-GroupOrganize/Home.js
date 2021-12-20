import React from "react";
import "./Home.css";
const csv = require("csvtojson");

export default function Home(props) {
  const uploadFile = (e) => {
    let data;
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      let text = e.target.result;

      await csv({
        noheader: false,
        output: "csv",
      })
        .fromString(text)
        .then(async (newFile) => {
          data = newFile;
        });
      props.getData(data);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="groups-maker">
      <h1>Please insert CSV file: </h1>
      <form onSubmit={uploadFile}>
      <input type="file" name="file" onChange={uploadFile} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

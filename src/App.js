import { useState }  from "react";
import slogo from "./img/Saturn_logo.png";
import sjslogo from "./img/SaturnJS_logo.png";
import Upload from "./Upload";
import Success from "./Success";
import Uploading from "./Uploading";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

function App() {
  const [success, setSuccess] = useState([]);
  const [uploadError, setUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [npmIndex, setnpmIndex] = useState([]);

  const listIndex = async (event) => {
    const client = new Web3Storage({ token: process.env.REACT_APP_W3S_APIKEY });
    var list = [];

    for await (const upload of client.list()) {
      list.push(upload);
    }
    console.log(list);
    setnpmIndex(list);
  }

  return (
    <div className="App">
      <div className="p-strip is-shallow l-full-width">
        <div className="l-start" style={{textAlign: "center"}}>
          <img src={sjslogo} style={{width: "200px", padding: "20px"}}></img>
          <br />
          <img src={slogo} style={{width: "200px", padding: "20px"}}></img>
        </div>
        <div className="l-main">
          <div className="row grid">
            <div className="col-9 col-medium-5" style={{textAlign: "center"}}>
              <h1>SaturnJS CDNPortal</h1>
              <p> Upload your npm package here and get it accelerated by Filecoin Saturn CDN network.</p>
              <br/>
              { (success.length === 0) && (uploading === false) ? <Upload setSuccess={setSuccess} setUploadError={setUploadError} setUploading={setUploading} /> :null }
              { success.length !== 0 ? <Success success={success} setSuccess={setSuccess} setUploading={setUploading} /> : null }
              { uploading ? <Uploading setUploading={setUploading}/> : null }
              <h1>NPM Package Index</h1>
              <p> A list of NPM package name and IPFS CIDs.</p>
              <table aria-label="Vanilla framework table example">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>CID</th>
                    <th>Saturn CDN Link</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    npmIndex.map(function(upload, index) {
                      return <tr><th>${upload.name}</th><td>${upload.cid}</td><td><a src={`https://dweb.link/ipfs/ + ${upload.cid}`}> download </a></td><td>upload.dagSize</td></tr>
                    })
                  }
                </tbody>
              </table>
              <button onClick={listIndex}>Get Index</button>

              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

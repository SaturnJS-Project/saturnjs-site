import { useState }  from "react";
import slogo from "./img/Saturn_logo.png";
import sjslogo from "./img/SaturnJS_logo.png";
import Upload from "./Upload";
import Success from "./Success";
import Uploading from "./Uploading";
import Error from "./Error";

function App() {
  const [success, setSuccess] = useState([]);
  const [uploadError, setUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);

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
            </div>
          </div>
        </div>
        <div className="l-end">
          
        </div>
      </div>
    </div>
  );
}

export default App;

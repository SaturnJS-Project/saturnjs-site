import { useState }  from "react";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

export const Upload = ({setSuccess, setUploadError, setUploading}) => {
    const [files, setFile] = useState(null);  

    const onSubmit = async (event) => {
      event.preventDefault();

      const client = new Web3Storage({ token: process.env.REACT_APP_W3S_APIKEY });

      try {
          setUploading(true);
          const Cid = await client.put(files);
          console.log("https://" + Cid + ".ipfs.w3s.link");
          setSuccess([Cid]);
      } catch (e) {
          setUploadError(true);
          console.log("Failed..." + e.message);

          setUploading(false);
      }
    };

    const onInputChange = (event)  => {
      setFile(event.target.files);
      console.log("file changed...");
    };
    
    return (
      <div>
        <form method="post" action="#" id="#"  onSubmit={onSubmit}>
          <label htmlFor="uploadPackageFile"><h3>Select NPM Package Name</h3></label>
          {/* <p>/{package_name/}/@/{version_name/}_/{actual_js_filename.js/}</p> */}
          <br/>
          <input className="form-control" type="file" id="exampleInputFile" name="exampleInputFile" onChange={onInputChange} style={{width: "80%", border: "1px solid #ccc"}} multiple></input>
          <br/>
          <button type="submit">Upload to Saturn</button>
        </form>

      </div>
    );
};

export default Upload;
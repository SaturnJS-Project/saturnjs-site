export const Success = ({success, setSuccess, setUploading}) => {     
    setUploading(false);

    const onGoBack = () => {
        setSuccess([]);
    } 

    return (
        <div>
            <div>
                <p>File uploaded.</p>

                {success.map(function(cid, index) {
                        return <p><a href={"https://" + cid + ".ipfs.w3s.link" } >https://{cid}.ipfs.dweb.link</a></p>
                    })}

                <button className="p-button" onClick={onGoBack}>
                    <p>Go Back ⏎</p>
                </button>
            </div>
        </div>
    )
}

export default Success;
export const Error  = ({setUploadError, setUploading}) => {     
    setUploading(false);

    const onDismiss = () => {
        setUploadError(false);
    }

    return (
        <div>
            <p>Error Occured...</p>
            <button className="p-button" onClick={onDismiss}>Dismiss</button>
        </div>
        )
}
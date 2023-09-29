import loadingGif from './img/load-loading.gif';

export const Uploading  = ({setSuccess}) => {     

    const onStop = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <p>Uploading npm package to Saturn..</p>
            <img src={loadingGif} alt="loading logo" style={{display: "inline-block", height: 200, width: '80%', float: 'inherit'}}/>
        </div>
)
}

export default Uploading;
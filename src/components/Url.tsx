import React, { useState } from 'react'; 

const Url: React.FC = () => {
    const QRCode = require('qrcode.react');

    const [url, setUrl] = useState('');

    const ShowURL = (event: any) => {
        setUrl(event.target.value)
    }

    return(
        <div>
             <div className="field">
                <label className="label">Url</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowURL} />
                </div>
            </div>

            <div>
                <QRCode value= {url} size={256} fgColor="darkblue" />
            </div>

        </div>
    )
}
export default Url;

//
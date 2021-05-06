import React, { useState } from 'react'; 

const Url: React.FC = () => {
    const QRCode = require('qrcode.react');

    const [url, setUrl] = useState('');
     // this react hook useState makes 2 variables, one to hold the state and the other to update the state.

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
                {/* creats a class name. */}
            </div>

            <div>
                <QRCode value= {url} size={256} fgColor="darkblue" />
                {/* creates the QRCode. */}
            </div>

        </div>
    )
}
export default Url;

//line one shows that you are importing react.
//line 13 to 25 shows that the <div> has a className which is called field and the label is Url. 
//It contains another <div> which allows the user to input text that will be displayed after scanning the QR code.
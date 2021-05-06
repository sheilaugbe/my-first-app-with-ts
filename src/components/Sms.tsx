import React, { useState } from 'react';

const Sms: React.FC = () => {
    const QRCode = require('qrcode.react');

    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(0);

    const ShowMessage = (event: any) => {
        setMessage(event.target.value)
    }

    const ShowNumber = (event: any) => {
        setNumber(event.target.value)
    }

    return(
        <div>
             <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowMessage} />
                </div>
            </div>

            <div className="field">
                <label className="label">Number</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowNumber} />
                </div>
            </div>

            <div>
                <QRCode value= {`SMSto:${number}:${message}`} size={256} fgColor={"pink"}/>
            </div>
        </div>
    )
}
export default Sms;
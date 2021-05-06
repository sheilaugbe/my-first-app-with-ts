import React, { useState } from 'react';
//importing react to the file.

const Sms: React.FC = () => {
    const QRCode = require('qrcode.react');

    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(0);
    // this react hook useState makes 2 variables, one to hold the state and the other to update the state.

    const ShowMessage = (event: any) => {
        setMessage(event.target.value)// when the function is called it runs setMessage, which makes message the value of the event in which the function is called in.
    }

    const ShowNumber = (event: any) => {
        setNumber(event.target.value)// when the function is called it runs setNumber, which makes number the value of the event in which the function is called in.
    }
    

    return(
        <div>
             <div className="field">
                <label className="label">Number</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowNumber} />
                </div>
            </div>
            {/* once the input is put in, onInput fires up the number. */}

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Input message" onInput={ShowMessage} />
                </div>
                {/* once the input is put in, the onInput fires up the message. */}
            </div>

            <div>
                <QRCode value= {`SMSto:${number}:${message}`} size={256} fgColor={"pink"}/>
                {/* creates the QRCode. */}
            </div>

        </div>
    )
}
export default Sms;
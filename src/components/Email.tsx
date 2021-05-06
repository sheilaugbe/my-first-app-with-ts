import React, { useState } from 'react';
// imports react to the file.

const Email: React.FC = () => {
    const QRCode = require('qrcode.react');

    const [mail, setMail] = useState('');
    const [sub, setSub] = useState('');
    const [body, setBody] = useState('');
     // this react hook useState makes 2 variables, one to hold the state and the other to update the state.

    const ShowMail = (event: any) => {
        setMail(event.target.value)// when the function is called it runs setMail, which makes mail the value of the event in which the function is called in.
    }

    const ShowSub = (event: any) => {
        setSub(event.target.value)// when the function is called it runs setSub, which makes sub the value of the event in which the function is called in.
    }

    const ShowBody = (event: any) => {
        setBody(event.target.value)// when the function is called it runs setBody, which makes body the value of the event in which the function is called in.
    }

    return (
        <div>
            <div className="field">
                <label className="label">Mail</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowMail} />
                </div>
                {/* once the input is put in, onInput fires up the email of the user. */}
            </div>

            <div className="field">
                <label className="label">Sub</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowSub} />
                </div>
                {/* creates class name. */}
            </div>

            <div className="field">
                <label className="label">Body</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowBody} />
                </div>
                {/* once the input is put in, onInput fires up the body of the email. */}
            </div>

            <div>
                <QRCode value={`mailto:${mail}?subject=${sub}&body=${body}.`} size={256} fgColor={"purple"}/> 
                {/* creates the QRCode. */}
            </div>
        </div>
       
    )
}
export default Email;

// this file is for the first QR code which is the email. You are first supposed to import react into the environment.
// the <div> allows you to input your email.
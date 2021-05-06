import React, { useState } from 'react';

const Email: React.FC = () => {
    const QRCode = require('qrcode.react');

    const [mail, setMail] = useState('');
    const [sub, setSub] = useState('');
    const [body, setBody] = useState('');

    const ShowMail = (event: any) => {
        setMail(event.target.value)
    }

    const ShowSub = (event: any) => {
        setSub(event.target.value)
    }

    const ShowBody = (event: any) => {
        setBody(event.target.value)
    }

    return (
        <div>
            <div className="field">
                <label className="label">Mail</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowMail} />
                </div>
            </div>

            <div className="field">
                <label className="label">Sub</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowSub} />
                </div>
            </div>

            <div className="field">
                <label className="label">Body</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowBody} />
                </div>
            </div>

            <div>
                <QRCode value={`mailto:${mail}?subject=${sub}&body=${body}.`} size={256} fgColor={"purple"}/> 
            </div>
        </div>
       
    )
}
export default Email;

// this file is for the first QR code which is the email. You are first supposed to import react into the environment.
// the <div> allows you to input your email <address className=""></address>
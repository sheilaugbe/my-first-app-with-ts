import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld9: React.FC = () => {
    const QRCode = require('qrcode-react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [mail, setMail] = useState('');
    const [department, setDepartment] = useState('');
    const [sub, setSub] = useState('');
    const [body, setBody] = useState('');

    const ShowURL = (event: any) => {
        setUrl(event.target.value)
    }

    const ShowName = (event: any) => {
        setName(event.target.value)
    }

    const ShowAge = (event: any) => {
        setAge(event.target.value)
    }

    const ShowMail = (event: any) => {
        setMail(event.target.value)
    }

    const ShowDepartment = (event: any) => {
        setDepartment(event.target.value)
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
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowName} />
                </div>
            </div>

            <div className="field">
                <label className="label">Url</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowURL} />
                </div>
            </div>
            
            <div className="field">
                <label className="label">Mail</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowMail} />
                </div>
            </div>
            
            <div className="field">
                <label className="label">Age</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowAge} />
                </div>
            </div>

            <div className="field">
                <label className="label">Department</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowDepartment} />
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
                <QRCode value={JSON.stringify({
                    name: name,
                    age: age,
                    department: department,
                })} size={256}/>
            </div>
            
            <div>
                <QRCode value= {url} size={256} fgColor="darkblue" />
            </div>

            <div>
                <QRCode value={`mailto:${mail}?subject=${sub}&body=${body}.`} size={256}/> 
            </div>
            

            {/* Additional useful reference: https://github.com/zxing/zxing/wiki/Barcode-Contents */}

        </div>
    )
}
export default HelloWorld9;


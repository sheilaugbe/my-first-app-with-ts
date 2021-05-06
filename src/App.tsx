import React from 'react';
import './App.css';
import Email from './components/Email';
import Url from './components/Url';
import Sms from './components/Sms';

const App: React.FC = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <Email />
      </div>
      <div className="Column2">
        <Url />
      </div>
      <div className="Column3">
        <Sms />
      </div>

    </div>
  );
}
export default App;
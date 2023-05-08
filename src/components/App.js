import React, { useState, useRef } from 'react';
import Scanner, {postCode} from './Scanner';
import Result from './Result';

const App = () => {
    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState([]);
    const [code, setCode] = useState('');
    const scannerRef = useRef(null);

    function isCodeValid() {
        return code.length === 8 && /^\d+$/.test(code);
    }

    function handleCodeInput(e) {
        const newCode = e.target.value;
        setCode(newCode);
    }

    function handleSubmit(event) {
        if (!isCodeValid()) {
            alert('Code is not valid');
            return;
        }
        
        event.preventDefault();
        postCode(code);
        setCode('');
        return;
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: isCodeValid() ? 'green' : 'red',
                }}
            >
                <label>code</label>
                <input type="text" name="code" onInput={handleCodeInput} value={code}/>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <button onClick={() => setScanning(!scanning) }>{scanning ? 'Stop' : 'Start'}</button>
                <ul className="results">
                    {results.map((result) => (result.codeResult && <Result key={result.codeResult.code} result={result} />))}
                </ul>
                <div ref={scannerRef} style={{position: 'relative', border: '3px solid red'}}>
                    {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
                    <canvas className="drawingBuffer" style={{
                        position: 'absolute',
                        top: '0px',
                        // left: '0px',
                        // height: '100%',
                        // width: '100%',
                        border: '3px solid green',
                    }} width="640" height="480" />
                    {scanning ? <Scanner scannerRef={scannerRef} onDetected={(result) => setResults([...results, result])} /> : null}
                </div>
            </div>
        </>
    );
};

export default App;

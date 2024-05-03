import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState('4');
  const [numbers, setNumbers] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState('');
  const [copy, setCopy] = useState("Copy");
  const lengthRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numbers) {
      str += '0123456789';
    }
    if (specialChar) {
      str += '~!@#$%^&*()_+{}|:"<>?[]';
    }
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, numbers, specialChar]);

  const copyToClipboard = useCallback(() => {
    setCopy("Copied")
    lengthRef.current.select();
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    setCopy("Copy")
    passwordGenerator();
  }, [specialChar, numbers, length, passwordGenerator]);

  return (
    <div className='bg-gray-900 w-full h-screen flex justify-center'>
      <div className='m-4'>
        <input
          type="text"
          placeholder='Password'
          className='p-2 rounded-l-md max-w-96 outline-none'
          value={password}
          readOnly
          ref={lengthRef}
        />
        <button onClick={copyToClipboard} className='text-white bg-green-800 p-2 rounded-r'>{copy}</button>
        <div>
          <input
            type="range"
            min={4}
            max={16}
            value={length}
            className='p-4 flex cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label className='text-white p-2  m-2'>Length : {length}</label>
          <input
            type="checkbox"
            className='p-1'
            onChange={() => { setNumbers(prev => !prev) }}
          />
          <label htmlFor="" className='text-white p-1 mx-1'>Numbers</label>
          <input
            type="checkbox"
            className='p-1'
            onChange={() => { setSpecialChar(prev => !prev) }}
          />
          <label htmlFor="" className='text-white p-1 mx-1'>Special-Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;

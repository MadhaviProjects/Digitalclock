import React, { useState } from "react";
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

const App=()=>{

        let time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
const UpDatetime=()=>
{
    let time=new Date().toLocaleTimeString();
    setCtime(time);
}
setInterval(UpDatetime,1000);
return (
    <>
  <h1>{ctime}</h1>
  {/* <button onClick={UpDatetime}>get time</button> */}
    </>
);


}
export default App;
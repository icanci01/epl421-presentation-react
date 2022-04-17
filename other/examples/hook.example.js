import React, { Component, useState } from "react";

function HelloWorldHook() {
    const [mssg, setMssg] = useState("Hello World");

    return (
        <div className="hello-world">
         <h1>{mssg}</h1>
        <button onClick={setMssg("Changed!")}>Click Me!</button>
     </div>
     );
}

import * as React from "react";

export function Upload(){
    return (
        <>
        <form>
            <input type="file" name="file" />
            <button type="submit">Upload</button>
        </form>
        </>
    );
        
}


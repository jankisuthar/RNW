import React, { useRef, useState } from 'react';

function UserStateHook() {
    // let [data, setData] = useState(0);
    let ref = useRef(0);
    console.log(ref.current)
    // function inc() {
    //     setData(++data);
    // }

    // function dec() {
    //     data > 0 ? setData(--data) : data;

    // }

    const show = () => {
        
        console.log(ref.current)
        ref.current = ref.current + 1;
        // console.log(ref)
    }
    return (
        <>
            

        </>
    );
}

export default UserStateHook;
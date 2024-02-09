import React, { Component } from 'react';

class Arry extends Component {

    render() {
        let arr = ["Apple","Orange","kiwi"]
        console.log(arr);
        console.log(arr[1]);

        for(let i=0;i<=5;i++)
        {
            console.log(i);
        }

        //foreach
        // arr.forEach(ele => {
        //     console.log(ele);
        // });

        //for of
        // for(let data of arr)
        // {
        //     console.log(data);
        // }

        //for in
        // for(let newdata in arr)
        // {
        //     console.log(arr[newdata]);
        // }


        //map
        // arr.map((e)=>{
        //     console.log(e);
        // })


        let obj = {name:"John",age:26,profession:"doctor"}
        console.log(obj);
        console.log(obj.name);
        console.log(obj['age']);

        //forin
        // for(let a in obj)
        // {
        //     console.log(obj[a]);
        // }


        Object.entries(obj).map((el)=>{
            console.log(el);
        })
        return (
            <>

            </>
        );
    }
}

export default Arry;
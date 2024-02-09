import React, { Component } from 'react';

class Methods extends Component {

   
    render() {
        //spreading & merging
        let Person={name:"John",age:25  }
        let job = {Jobtitle:"Developer",location:"UK"}

        let Employee = {...Person,...job}
        console.log(Employee);


        //destructuring
        let arr = ["John","Doe"]
        //array destructuring
        let [Firstname,Lastname] = arr
        console.log(Firstname);
        console.log(Lastname);

        //object destructuring
        let Name = {user:"John Doe",age:25}
        const{user}=Name
        console.log(user);


        //map and key
        let numbers = ["Apple","Orange","Kiwi","Mango"]
        let result = numbers.map((ele,key)=>{
            // console.log(key);
           
            return <ul key={key}>
                    <li>{ele}</li>
                    </ul>
        })
        return (
            <>
            <h1>Hello</h1>
            <div>
                {result}
            </div>
            </>
        );
    }
}

export default Methods;
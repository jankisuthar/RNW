// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let a = "hello";
  console.log(a);
  a = 12;
  console.log(a);
  // let a = 78;
  // console.log(a);

  const c ="constant value";
  console.log(c);
  // c = 78;
  // console.log(c);
  // c = 90;
  // console.log(c);

  //arrow function
  // const test=()=>{
  //   console.log("Thsi is test arrow method");
  // }
  // test();

  // let demo=(name)=>{
  //     console.log("My name is ",name);
  // }
  // demo("john doe")

  // let arr = ["dog","cat","cow"];
  // console.log(arr);

  //for in
  // for( let data in arr)
  // {
  //   console.log(arr[data]);
  // }

  // for of
  // for(let data of arr)
  // {
  //   console.log(data);
  // }

  // arr.forEach(ele => {
  //   console.log(arr);
  // });

  // let obj = {"name":"john","age":31}
  // console.log(obj);
  // console.log(obj.name);
  // console.log(obj.age);


  //for in
  // for(let mydata in obj)
  // {
  //   console.log(obj[mydata]);
  // }

  // Object.entries(obj).map((ele)=>{
  //   console.log(ele);
  // })



  
  let spread = ["apple","orange","kiwi","mango","cherry"];

  //old way of destructuring
  // console.log(spread[0]);
  // console.log(spread[1]);


  //new way of destructuring
  // const[one,two,three,four,five] = spread;
  // console.log(one);
  // console.log(two);
 

  //spread operator
  // const[one,two,,...three] = spread;
  // console.log(two);
  // console.log(three);


  //map with key
  spread.map((ele,key)=>{
    console.log(key,ele);
  })

  // filter
  let f = [230,45,67,89,20]
 console.log(f.filter(myfunc));


  function myfunc(age)
  {   
    if(age>20)
    {
      return age;
    }
  }

  //reduce

  console.log(f.reduce(total));
  function total(sum,num)
  {
    return sum-num;
    
  }

  return (
    <>
    <h1>Hello</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id nemo repudiandae! Nesciunt a explicabo itaque odit, eveniet, impedit dolorem et aut debitis officiis dolor minima nobis veniam error accusamus.</p>
    </>
  
  )
}

export default App

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Child from './components/Child';
import Child2 from './components/Child2';
import GrandParent from './components/GrandParent';
// import './App.css'

function App() {


  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  // let count = 0;
  let [count, setCount] = useState(0);
  // const [name, setName] = useState('Tom');
  // const [image, setImage] = useState(null);
  // const imageRef = useRef();


  // function expensiveCalcualation(num) {
  //   console.log('Calculating...');
  //   let result = 1;
  //   for (let i=0; i<10000; i++) {
  //     result += num
  //   }
  //   return result;
  // }

  // const result = expensiveCalcualation(4);

// const result = useMemo(() => expensiveCalcualation(4), []);

//   function handleChange(e) {

//     const imgUrl = URL.createObjectURL(e.target.files[0]);
//     setImage(imgUrl);

//   }

  

  // function removeImage() {
  //   setImage(null);

  //   // console.log('Inside Image Input before: ',imageRef.current.value);
  //   imageRef.current.value = '';
  //   // console.log('Inside Image Input after: ',imageRef.current.value);
  // }

  // console.log('Outside use Effect');


  // useEffect(() => {
  //   console.log('Inside use Effect');
  // }, [])

  // function to increase the count
  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <>
    {/* <GrandParent name={name} /> */}
    <GrandParent />
    
      {/* <p>Hello World</p> */}
      {/* <p>Result: {result}</p> */}
      {/* <input type="file" accept='image/jpeg, image/png' ref={imageRef}
        onChange={handleChange}
      /> */}

      {/* <button onClick={removeImage}>Remove Image</button> */}

      <div>
        {/* {image && <img src={image} alt="Preview Image" style={{width: '200px'}} />} */}
      </div>


      {/* <Child name='John' /> */}

      {/* <Child name={count} /> */}

      {/* <p>Hello</p> */}
      {/* // <p>Hello World</p> */}

      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>

      {/* <Child2  handleClick={handleClick} /> */}

      {/* <Todo /> */}
      {/* <Greet name="John" /> */}
      {/* <Greet name='Harry' /> */}

    
    </>
  )
}

export default App


function Todo() {
  return (
    <div>
      <p>Todos</p>
    </div>
  )
}

function Greet(props) {
  return (
    <p>Good Morning {props.name}</p>
  )
}

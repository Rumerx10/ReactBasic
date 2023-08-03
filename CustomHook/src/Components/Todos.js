import React from 'react';
import useFetchData from './useFetchData';



const Todos = () => {    
   const {data,isLoading,error} = useFetchData("https://jsonplaceholder.typicode.com/todos");

    // const [data,setData] = useState(null);
    // const [error,setError] = useState(null);
    // const [isLoading,setIsLoading] = useState(true);

    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res)=>{
    //     if(!res.ok){
    //       throw Error();
    //     }else{
    //       return res.json();
    //     }
    //   })
    //   .then((data)=>{
    //     setData(data);
    //     setIsLoading(false);
    //     setError(null);
    //   })
    //   .catch((error)=>{
    //     setError(error.message);
    //     setIsLoading(false);
    //   })
    // })


    // Element as variable...................
    
    const todoElements = data?.map((todo)=>{
      return(
        <p key={todo.id}>{todo.title}</p>
      )
    });
    const loadingMessage = <p>Data is Loading...</p>;
    const errorMessage = <p>{error}</p>;



  return (
    <div>
      <h1>Todos</h1>
      {isLoading && loadingMessage}
      {todoElements}
      {error && errorMessage}
    </div>
  );
}

export default Todos;

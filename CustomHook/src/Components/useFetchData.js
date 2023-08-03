import {useState,useEffect} from 'react';

const useFetchData = (url) => {
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error();
            }else{
                return res.json();
            }
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        })
    })
  return {data,isLoading,error};
}

export default useFetchData;

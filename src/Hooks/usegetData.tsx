import axios from "axios";
import { useEffect, useState } from "react"
//retrieved data into modal/interface
interface Data {
    userId: number;
    id: number;
    title: string;
    body: string
}
function usegetData() {
    const [data, setData]  = useState<Data[] | null >(null)
    useEffect(()=>{
        const getData = async()=>{
             const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
             setData(res.data);
        }
        getData();
    },[]);
    if(data) return data;
    
}

export default usegetData

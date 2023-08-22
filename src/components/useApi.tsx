
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function UseAPi(url: string, method: 'POST' | 'PUT' | 'DELETE' | 'GET') {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        setIsLoading(true);

        axios({
            method,
            url,
            
        }).then((resp) => {
            
            if(resp.status >= 200 && resp.status < 300) setData(resp.data)
        }).catch((err) => {
            setError(err)
        }).finally(() => setIsLoading(false))

    }, [url])
    

    return {data, isLoading, error};
}
import { useEffect, useState } from "react";
import {getData} from '../service/api'

export const useFetch = (request) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getData(request);
                setData(data);
            } catch (error) {
            setError(error);
            } finally {
            setLoading(false);
            }
        }
        fetchData();

    }, [request])
    return {data, loading, error}
}
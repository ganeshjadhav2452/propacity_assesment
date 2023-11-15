import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
const useApi = (url) => {
    const [data, setData] = useState({})
    const [error, setError] = useState({})

    useEffect(() => {

        const fetchInititalDataForNavbar = async () => {

            try {
                const apiResponse = await axios.get(url)
                toast.success('Data Fetched...')
                setData(apiResponse)
                console.log(apiResponse)
            } catch (error) {
                toast.error('Error While Fetching Data')
                setError(error)
            }
        }

        fetchInititalDataForNavbar()
    }, [])

    return {
        data: data,
        error: error

    }
}

export default useApi
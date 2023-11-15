import { toast } from 'react-toastify';
import axios from 'axios';

const fetchInititalDataForNavbar = async (url) => {

    try {
        const apiResponse = await axios.get(url)
        toast.success('Data Fetched...')

        console.log(apiResponse.data.results)
        return apiResponse.data.results
    } catch (error) {
        toast.error('Error While Fetching Data')

    }
}

export {
    fetchInititalDataForNavbar
}
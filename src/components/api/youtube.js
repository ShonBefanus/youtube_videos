import axios from 'axios';

const KEY = 'AIzaSyBs9WIR4b3XME8aNbvaEd3EDnf30RhEGGA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

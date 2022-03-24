import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YO2ICMi4yhu1glIJKvtf088XPpyTwwt2fLg8UiW8zC0'
    }
});
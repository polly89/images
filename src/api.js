import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers: {
        Authorization: 'Client-ID dny5rZc94oobQBUV7ZOb5FDN3F6y4j2oCFimoxR1hKg',
       },
       params: {
        query: term,
       }, 
    });
    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;
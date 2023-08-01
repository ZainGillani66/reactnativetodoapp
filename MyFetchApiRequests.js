export const myFetchGetUrlRequest = async () => {
    const response = await fetch('http://localhost:3000/getAuthURL');
    const resJson = await response.json();
    console.log('Zainnnnn', resJson.url);
    // const response2 = await fetch(resJson.url);
    // const resJson2 = await response2.json();
    // console.log('Responseeeee2', resJson2);
    return resJson;
    
};

  export const myFetchGetTasksList = async () => {
      const response = await fetch('http://localhost:3000/getAllTaskLists')
      const resJson = await response.json();
      return resJson;
};

  
import {articles_url,_api_key,county_code} from '../config/rest_config';


export async function getArticles(cat){
    const url =
"https://newsapi.org/v2/top-headlines?country=in&category="+cat+"&apiKey=46a821b53bc74039ad52a2277c69e0e2";
 

   /*
    try{
        let articles= await fetch(`${articles_url}?country=${county_code}&
        category=${category}`,{
            headers: {
                    'X-API-KEY':_api_key
            }
        });
        let result = await articles.json();
        console.log(articles);
        articles = null;
       

        return result.articles;
    }
    
    catch(error){
        throw error;
    }*/
    let result = await fetch(url).then(response => response.json());
    console.log(result);
    return result.articles;


}

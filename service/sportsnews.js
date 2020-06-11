import {articles_url,_api_key,category,county_code} from '../config/sports';

export async function getArticles(){
    try{
        let articles= await fetch(`${articles_url}?country=${county_code}&
        category=${category}`,{
            headers: {
                    'X-API-KEY':_api_key
            }
        });
        let result=await articles.json();
       // console.log(result);
        articles=null;

        return result.articles;
    }
    catch(error){
        throw error;
    }
}
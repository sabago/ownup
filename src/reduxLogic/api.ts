
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL= `https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes/`;

class API {
    static fetchQuotes(loanSize: any, creditScore: any, propertyType: any, occupancy: any) {
        const fetch_url = new URL(API_URL);
        fetch_url.search = new URLSearchParams(
                        {"loanSize":loanSize,
                        "creditScore":creditScore,
                        "propertyType": propertyType,
                        "occupancy": occupancy}
                        ).toString();
        
                return fetch(fetch_url.href, {
                    headers: {
                        'Authorization': `OU-AUTH ${API_KEY}`
                        }
                });
        }
}

export default API;


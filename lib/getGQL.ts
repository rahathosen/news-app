export async function getGQL() {
  const response = await fetch(
    `https://django-news-server-98x1afcwa-rahathosen.vercel.app/gql/`,
    {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query MyQuery {
              newsCategories{
                          id
                        title
          newssubcategorySet{
                          id
                       title
                
                 }
              }
          }
          `,
      }),
    }
  );
  const { data } = await response.json();
  return data;
}

export async function getGQL2() {
  const response = await fetch(
    `https://django-news-server-98x1afcwa-rahathosen.vercel.app/gql/`,
    {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query MyQuery {
                newsCategories{
                            id
                          title
            newssubcategorySet{
                            id
                         title
                  
                   }
                }
            }
            `,
      }),
    }
  );
  const { data } = await response.json();
  return data;
}

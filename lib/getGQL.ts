async function fetchGraphQL(query: string): Promise<any> {
  const response = await fetch("https://django-news-server.vercel.app/gql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data } = await response.json();
  return data;
}

// Template

// export async function Template(): Promise<any> {
//   const query = `
//         query MyQuery {
//           newsCategories {
//             id
//             title
//           }
//         }
//       `;

//   return fetchGraphQL(query);
// }
// ---------------------------------------------------------------------------------

// Post By Category

export async function postByCategoryGQL(): Promise<any> {
  const query = `
  query MyQuery {
    postByCategory(categoryId: 1) {
      id
      title
      details
      image
      url
      uniqueId
    }
  }
`;

  return fetchGraphQL(query);
}

// Get All Post

export async function allPosts(): Promise<any> {
  const query = `
        query MyQuery {
          allPosts {
            id
            image
            title
            url
            details
            uniqueId
          }
        }
      `;

  return fetchGraphQL(query);
}

// list of Categories
export async function newsCategoriesGQL(): Promise<any> {
  const query = `
      query MyQuery {
        newsCategories {
          id
          title
          newssubcategorySet {
            id
            title
          }
        }
      }
    `;

  return fetchGraphQL(query);
}

// list of navigation
export async function navigationGQL(): Promise<any> {
  const query = `
      query MyQuery {
        navigation{
            id
            news {
              id
              name
            }
            news2 {
              id
              name
            }
            news3 {
              id
              name
            }
            news4 {
              id
              name
            }
            news5 {
              id
              name
            }
            categories{
              id
              title
              serial
            }
            feature {
              id
              title
              serial
            }
          }
      }
    `;

  return fetchGraphQL(query);
}

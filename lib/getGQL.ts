async function fetchGraphQL(query: string): Promise<any> {
  const response = await fetch("https://django-news-server.vercel.app/gql/", {
    cache: "no-cache",
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

// Template

export async function navigationheaderGQL(): Promise<any> {
  const query = `
        query MyQuery {
          navigation {
            id
            feature {
              id
              title
            }
            categories {
              id
              title
            }
          }
        }
      `;

  return fetchGraphQL(query);
}

// website Info

export async function websiteInfoGQL(): Promise<any> {
  const query = `
        query MyQuery {
          websiteInfo {
            id
            logo
            title
            favicon
            tagLine
            address
            copyrightText
          }
        }
      `;

  return fetchGraphQL(query);
}

// Post By Category

export async function postByCategoryGQL(): Promise<any> {
  const query = `
  query MyQuery {
    postByCategory(categoryId: 1) {
      id
      title
      details
      image
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
            uniqueId
            title
            description
            details
            image
            imageSource
            createdAt
            updatedAt
            category {
              uniqueId
              id
              title
            }
            subcategory {
              id
              title
              uniqueId
            }
            reportedBy {
              id
              name
              designation
              uniqueId
            }
            continent {
              id
              name
              uniqueId
            }
            country {
              id
              name
              uniqueId
            }
            relatedPost {
              id
              title
              uniqueId
            }
            tag {
              id
              title
              uniqueId
            }
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

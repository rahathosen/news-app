async function fetchGraphQL(query: string): Promise<any> {
  const response = await fetch("https://django-news-server.vercel.app/gql/", {
    cache: "force-cache",
    next: { revalidate: 300 },
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
              createdAt
              designation
              id
              image
              name
              uniqueId
              updatedAt
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

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
            title
            url
            copyrightText
            tagLine
            email
            address
            newsThumbnail
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

//  list of breakingNews
export async function breakingNewsGQL(): Promise<any> {
  const query = `
      query MyQuery {
        breakingNews {
          id
          items {
            id
            title
            description
            uniqueId
            image
            updatedAt
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
        navigation {
          news {
            id
            name
            uniqueId
            countrySet {
              id
              name
              uniqueId
            }
            featurepostSet {
              id
              title
              uniqueId
            }
          }
          news2 {
            id
            name
            uniqueId
            continent {
              id
              name
              uniqueId
            }
            featurepostSet {
              id
              title
              uniqueId
            }
          }
          news3 {
            id
            name
            uniqueId
            districtSet {
              id
              name
            }
            featurepostSet {
              id
              title
              uniqueId
            }
          }
          news4 {
            id
            name
            uniqueId
            division {
              id
              name
              uniqueId
            }
            featurepostSet {
              id
              title
              uniqueId
            }
          }
        }
        newsCategories {
          id
          title
          uniqueId
          newssubcategorySet {
            id
            title
            uniqueId
          }
        }
      }
    `;

  return fetchGraphQL(query);
}

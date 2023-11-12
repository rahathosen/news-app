
async function fetchGraphQL(query: string, variables?: object): Promise<any> {  
  const url = "https://django-news-server.vercel.app/gql/";
  const body = variables 
    ? JSON.stringify({ query, variables })
    : JSON.stringify({ query });

  const response = await fetch(url, {
    cache: "force-cache",
    next: { revalidate: 300 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const { data } = await response.json();
  return data;
}
// =================================================================================================

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

// Posts By Category
export async function postByCategoryGQL(uId:any): Promise<any> {

  const variables = {
    catUId: uId
  };
  const query = 
    ` query MyQuery($catUId: String!) {
      postByCategory(categoryuId: $catUId) {

      id
      uniqueId
      title
      description
      details
      image
      imageSource
      createdAt
      updatedAt
    }
  }
`;
  return fetchGraphQL(query,variables);
}
// Post By articleCategories
export async function opinionGQL(): Promise<any> {
  const query = `
  query MyQuery {
    articleCategories {
      id
      uniqueId
      title
      details
      image
      status
      serial
    }
  }
`;

  return fetchGraphQL(query);
}

// Get All Post
export async function allPosts(): Promise<any> {
  const query = `
        query MyQuery {
          allPosts(first: 10, skip: 0) {
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
// Get a single Post detail
export async function PostDetail(uId:any): Promise<any> {

  const variables = {
    postId: uId
  };
  const query = 
    ` query MyQuery($postId: String!) {
        post(uId: $postId) {
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
            tag {
              id
              title
              uniqueId
            }
          }
        }
    `
   
     

  return fetchGraphQL(query,variables);
}

// list of Categories
export async function newsCategoriesGQL(): Promise<any> {
  const query = `
      query MyQuery {
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
// list of postsTags
export async function postsTagsGQL(): Promise<any> {
  const query = `
      query MyQuery {
        postsTags {
          id
          title
          uniqueId
          details
        }
      }
    `;

  return fetchGraphQL(query);
}

//  list of cover News
// export async function coverGQL(): Promise<any> {
//   const query = `
//       query MyQuery {
//         cover {
//           headNews {
//             id
//             title
//             updatedAt
//             uniqueId
//             description
//             image
//           }
//         }
//       }
//     `;

//   return fetchGraphQL(query);
// }

// list of headLines
export async function headLinesGQL(): Promise<any> {
  const query = `
      query MyQuery {
        HeadLine {
          headlines {
             id
              title
              uniqueId
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
          endAt
          items {
            id
            title
            updatedAt
            uniqueId
            description
            image
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
          feature {
            id
            title
            uniqueId
            featurepostSet {
              id
              title
              uniqueId
              image
            }
          }
          categories {
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
      }
    `;

  return fetchGraphQL(query);
}

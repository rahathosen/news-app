
async function fetchGraphQL(query: string, variables?: object): Promise<any> {
  const url = "https://django-news-server.vercel.app/gql/";
  const body = variables
    ? JSON.stringify({ query, variables })
    : JSON.stringify({ query });

  try {
    const response = await fetch(url, {
      cache: "no-cache",
      // cache: "reload",
      // next: { revalidate: 300 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("GraphQL error:", error);

    return {};
  }
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
            logo
          }
        }
      `;

  return fetchGraphQL(query);
}

//  list of postsByTag
export async function postsByTagGQL(taguId: any): Promise<any> {
  const variables = {
    tagUId: taguId,
  };
  const query = `
      query MyQuery ($tagUId: String!){
        postsTag(uId: $tagUId) {
          id
          title
          uniqueId
          details
          sortDetails
          postSet {
            id
            title
            image
            updatedAt
            createdAt
            uniqueId
            description
          }
        }
      }
    `;

  return fetchGraphQL(query, variables);
}
//  list of reporter
export async function reporterGQL(useruId: any): Promise<any> {
  const variables = {
    userUId: useruId,
  };
  const query = `
  query reporterQuery ($userUId: String!){
    reporter(uId: $userUId ) {
      uniqueId
      name
      image
      designation
      details
      updatedAt
      postSet {
        id
        title
        image
        updatedAt
        createdAt
        uniqueId
        description
        details
      }
    }
  }
    `;

  return fetchGraphQL(query, variables);
}

// Posts By Category
export async function postByCategoryGQL(uId: any): Promise<any> {
  const variables = {
    catUId: uId,
  };
  const query = ` query MyQuery($catUId: String!) {
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
      isHighlightOnSection
      category {
        title
        uniqueId
      }
      subcategory {
        title
        uniqueId
      }
    }
  }
`;
  return fetchGraphQL(query, variables);
}

// Posts By SubCategory
export async function postBySubCategoryGQL(uId: any): Promise<any> {
  const variables = {
    subcatUId: uId,
  };
  const query = ` query MyQuery($subcatUId: String!) {
      postBySubCategory(subCategoryuId: $subcatUId) {
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
  return fetchGraphQL(query, variables);
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
// Category By Section
export async function sectionGQL(): Promise<any> {
  const query = `
  query sectionBoxQuery {
    sectionBox {
      backgroundColor
      image
      serial
      category {
        uniqueId
        title
        postSet {
          title
        }
      }
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
export async function PostDetail(uId: any): Promise<any> {
  const variables = {
    postId: uId,
  };
  const query = ` query MyQuery($postId: String!) {
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
    `;
  return fetchGraphQL(query, variables);
}

//  list of all articles
export async function allArticlesGQL(): Promise<any> {
  const query = `
  query articlePostQuery {
    articlesPosts(first: 20, skip: 0) {
      title
      uniqueId
      image
      createdAt
      description
      details
      category {
        title
        uniqueId
      }
    }
  }
    `;

  return fetchGraphQL(query);
}

// Get a single Article detail
export async function articlePostGQL(uId: any): Promise<any> {
  const variables = {
    postId: uId,
  };
  const query = `
    query featurePostQuery ($postId: String!) {
      articlePost(uId: $postId) {
        uniqueId
        title
        details
        description
        image
        imageSource
        totalView
        category {
          uniqueId
          title
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
  return fetchGraphQL(query, variables);
}

//  category by uniqueID
export async function newsCategorygGQL(catuId: any): Promise<any> {
  const variables = {
    catUId: catuId,
  };

  const query = `
      query MyQuery ($catUId: String!){
        newsCategory(uId: $catUId){
          title
          uniqueId
          newssubcategorySet {
            title
            uniqueId
          }
        }
      }
    `;

  return fetchGraphQL(query, variables);
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
// list of SubCategory
export async function newsSubCategoryGQL(subuId: any): Promise<any> {
  const variables = {
    subtUId: subuId,
  };
  const query = `
      query MyQuery ($subtUId: String!) {
        newsSubCategory (uId: $subtUId) {
          title
          sortDetails
          image
          uniqueId
          serial
          status
        }
      }
    `;

  return fetchGraphQL(query, variables);
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

// list of headLines
export async function headLinesGQL(): Promise<any> {
  const query = `
      query MyQuery {
        headLine {
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
          post {
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
//  a main News
export async function mainNewsGQL(): Promise<any> {
  const query = `
  query mainNewsQuery {
    mainNews {
      headNews {
        uniqueId
        title
        image
        description
        details
        createdAt
        updatedAt
        category {
          uniqueId
          title
        }
        subcategory {
          title
          uniqueId
        }
      }
    }
  }
    `;

  return fetchGraphQL(query);
}
//  List of home HighlightedNews
export async function homeHighlightedNewsGQL(): Promise<any> {
  const query = `
  query homeHighlightedNewsQuery {
    homeHighlightedNews {
      highlightedNews {
        uniqueId
        title
        image
        description
        details
        createdAt
        updatedAt
        category {
          uniqueId
          title
        }
        subcategory {
          title
          uniqueId
        }
      }
    }
  }
    `;

  return fetchGraphQL(query);
}
//  List of top 10 PostByCategory This Week
export async function top10PostByCategoryThisWeekGQL(): Promise<any> {
  const query = `
  query top10PostByCategoryThisWeekQuery {
    top10PostByCategoryThisWeek(categoryuId: "Sports") {
      uniqueId
      title
      image
      description
      details
      createdAt
      isHighlightOnSection
      
    }
  }
    `;

  return fetchGraphQL(query);
}

// Get a single ad
export async function adGQL(uId: number): Promise<any> {
  const variables = {
    postId: uId,
  };
  const query = `
    query adsByBoxPositionQuery ($postId: Int!) {
      adsByBoxPosition(boxPosition: $postId) {
        uniqueId
        title
        image
        link
        totalView
        status
        stopAt
      }
    }
    `;
  return fetchGraphQL(query, variables);
}

// Get a single Feature detail
export async function fetureDetailGQL(uId: any): Promise<any> {
  const variables = {
    postId: uId,
  };
  const query = `
    query featurePostQuery ($postId: String!) {
      featurePost(featurePostuId: $postId) {
        uniqueId
        title
        image
        description
        details
        createdAt
        imageSource
        reportedBy {
          createdAt
          designation
          id
          image
          name
          uniqueId
          updatedAt
        }
        category {
          title
          uniqueId
          feature {
            title
            uniqueId
          }
        }
      }
    }
    `;
  return fetchGraphQL(query, variables);
}

//  list of all Feature Posts
export async function featurePostsGQL(): Promise<any> {
  const query = `
  query featurePostsQuery {
    featurePosts {
      title
      uniqueId
      image
      imageSource
      createdAt
      description
      details
      category {
        title
        uniqueId  
      }
      feature {
        title
        uniqueId
      }
    }
  }
    `;

  return fetchGraphQL(query);
}

//  featuer
export async function featureGQL(fetureuId: any): Promise<any> {
  const variables = {
    catUId: fetureuId,
  };

  const query = `
      query MyQuery ($catUId: String!){
        feature(featureId: $catUId) {
          uniqueId
          image
          title
          sortDetails
          featurepostSet {
            title
            image
            createdAt
            description
            details
            uniqueId
            category {
              title
              uniqueId
            }
          }
        }
      } 
    `;

  return fetchGraphQL(query, variables);
}

// all Districts
export async function districtsGQL(): Promise<any> {
  const query = `
  query MyQuery {
    districts(first: 64) {
      name
      uniqueId
    }
  }
    `;

  return fetchGraphQL(query);
}
// all Divisions
export async function divisionsGQL(): Promise<any> {
  const query = `
  query MyQuery {
    divisions(first: 10) {
      name
      uniqueId
      districtSet {
        name
        uniqueId
        upozilaSet {
          name
          uniqueId
        }
      }
    }
  }
    `;

  return fetchGraphQL(query);
}

//  Post by Division
export async function postByDivisionGQL(divisionuId: any): Promise<any> {
  const variables = {
    divUId: divisionuId,
  };

  const query = `
      query MyQuery ($divUId: String!){
        postByDivision(divisionuId: $divUId, first: 10) {
            title
            uniqueId
            image
            description
            details
            createdAt
            division {
              name
              uniqueId
    }
        }
        }
    `;

  return fetchGraphQL(query, variables);
}
//  Post by Division
export async function postByDistrictGQL(districtuId: any): Promise<any> {
  const variables = {
    disUId: districtuId,
  };

  const query = `
      query MyQuery ($disUId: String!){
        postByDistrict(districtuId: $disUId) {
            title
            uniqueId
            image
            description
            details
            createdAt
            district {
              name
              uniqueId
            }
        }
        }
    `;

  return fetchGraphQL(query, variables);
}
//  Post by Division
export async function postByUpozilatGQL(upozilauId: any): Promise<any> {
  const variables = {
    upoUId: upozilauId,
  };

  const query = `
      query MyQuery ($upoUId: String!){
        postByUpozila(upozilauId: $upoUId) {
            title
            uniqueId
            image
            description
            details
            createdAt
             upozila {
              name
              uniqueId
    }
        }
        }
    `;

  return fetchGraphQL(query, variables);
}

//  featuer posts by category
export async function featurePostByCategoryGQL(fetureuId: any): Promise<any> {
  const variables = {
    catUId: fetureuId,
  };

  const query = `
      query MyQuery ($catUId: String!){
          featurePostByCategory(categoryuId: $catUId) {
            title
            uniqueId
            image
            description
            details
            createdAt
          }
        }
    `;

  return fetchGraphQL(query, variables);
}

//  article By Category
export async function articleByCategoryGQL(articlecuId: any): Promise<any> {
  const variables = {
    catUId: articlecuId,
  };

  const query = `
      query MyQuery ($catUId: String!){
        articleByCategory(categoryuId: $catUId) {
          title
          image
          createdAt
          description
          details
          uniqueId
        }
        }
    `;

  return fetchGraphQL(query, variables);
}
//  article Category
export async function articleCategoryGQL(articlecuId: any): Promise<any> {
  const variables = {
    catUId: articlecuId,
  };

  const query = `
      query MyQuery ($catUId: String!){
        articleCategory(categoryuId: $catUId) {
          title
          uniqueId
        }
        }
    `;

  return fetchGraphQL(query, variables);
}

//  category by featuer Category By Featuer
export async function featuerCategoryByFeatuerGQL(
  fetureuId: any
): Promise<any> {
  const variables = {
    catUId: fetureuId,
  };

  const query = `
      query MyQuery ($catUId: String!){
        featuerCategoriesByFeatueruid(featureUId: $catUId) {
          title
          uniqueId
          image
          feature {
            title
            uniqueId
            image
          }
          featurepostSet {
            title
            uniqueId
            image
          }
        }
      } 
    `;

  return fetchGraphQL(query, variables);
}

//  featuer Category
export async function featuerCategoryGQL(fetureuId: any): Promise<any> {
  const variables = {
    catUId: fetureuId,
  };
  const query = `
      query featurePostsQuery ($catUId: String!){
        featuerCategory(categoryuId: $catUId) {
          title
          uniqueId
          featurepostSet {
            title
            uniqueId
            image
            description
            details
            createdAt
          }
        }
      } 
    `;

  return fetchGraphQL(query, variables);
}

// list of Features
export async function allfeatureGQL(): Promise<any> {
  const query = `
  query MyQuery {
    allFeature {
      title
      uniqueId
      image
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
          feature {
            id
            title
            uniqueId
            image
            featurepostSet {
              id
              title
              uniqueId
              image
              feature {
                title
                uniqueId
                image
              }
            }
          }
        }
      }
    `;

  return fetchGraphQL(query);
}

import { IPost } from "./../types.d";
import { request, gql } from "graphql-request";

const graphqlAPI: string = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT ?? "";

export const getPostNodes = async () => {
  const query: string = gql`
    query GetPosts() {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  // : Promise<{ postsConnection: { edges: IPost } }>
  const result = await request(graphqlAPI, query);

  return result?.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query: string = gql`
    query GetPostDetails() {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result?.posts;
};

export const getRelatedPosts = async () => {
  const query: string = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result?.posts;
};

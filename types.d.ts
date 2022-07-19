export interface IPostNode {
  node: IPost;
}

export interface IPost {
  author: IAuthor;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: IFeaturedImage;
  categories: ICategory[];
}

export interface IAuthor {
  bio: string;
  name: string;
  id: string;
  photo: IPhoto;
}

export interface IFeaturedImage {
  url: string;
}

export interface IPhoto {
  url: string;
}

export interface ICategory {
  name: string;
  slug: string;
}

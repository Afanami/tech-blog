import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { ICategory, IPost } from "../types";
import { getRecentPosts, getRelatedPosts } from "../services";

interface IProps {
  categories: ICategory[];
  slug: string;
}

const PostWidget = ({ categories, slug }: IProps) => {
  const [relatedPosts, setRelatedPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (slug) {
      getRelatedPosts(categories, slug).then((posts: IPost[]) =>
        setRelatedPosts(posts)
      );
    } else {
      getRecentPosts().then((posts: IPost[]) => setRelatedPosts(posts));
    }

    console.log(relatedPosts);
  }, []);

  return (
    <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post: IPost) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="flex-none w-16">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={60}
              width={60}
              objectFit="cover"
              objectPosition="center"
              quality={100}
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray font-xs">
              {dayjs(post.createdAt).format("MMM DD YYYY")}
            </p>
            <Link
              key={post.title}
              href={`/post/${post.slug}`}
              className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

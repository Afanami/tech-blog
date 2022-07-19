import React from "react";
import { IPostNode } from "../types";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  post: IPostNode;
}

const PostCard = ({ post }: IProps) => {
  const { node: postNode } = post;

  return (
    <div className="p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8">
      <div className="relative w-full mb-6 overflow-hidden shadow-md h-80 pb-80">
        <Image
          src={postNode?.featuredImage.url}
          alt={postNode?.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute rounded-t-lg shadow-lg lg:rounded-lg"
        />
      </div>

      <h2 className="mb-8 text-3xl font-semibold text-center transition duration-300 cursor-pointer hover:text-pink ">
        <Link href={`/post/${postNode.slug}`}>
          <a>{postNode.title}</a>
        </Link>
      </h2>

      <div className="items-center justify-center block w-full mb-8 text-center lg:flex">
        <div className="flex items-center justify-center w-full mb-4 mr-8 lg:mb-0 lg:w-auto">
          <Image
            src={postNode.author.photo.url}
            alt={postNode.author.name}
            height={30}
            width={30}
            className="align-middle rounded-full"
          />
          <p className="inline ml-2 text-lg align-middle text-darkgray">
            {postNode.author.name}
          </p>
        </div>
        <div className="font-medium text-darkgray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-6 h-6 mr-2 text-pink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{dayjs(postNode.createdAt).format("MMM DD YYYY")}</span>
        </div>
      </div>

      <p className="px-4 mb-8 text-lg font-normal text-center text-darkgray lg:px-20">
        {postNode.excerpt}
      </p>

      <div className="text-center">
        <Link href={`/post/${postNode.slug}`}>
          <a className="inline-block px-8 py-3 text-lg font-medium text-white transition duration-300 transform rounded-full cursor-pointer bg-pink hover:-translate-y-1">
            Continue Reading
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

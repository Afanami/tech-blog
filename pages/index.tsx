import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PostCard, Categories, PostWidget } from "../components";
import { getPostNodes } from "../services";
import { IPostNode } from "../types";

interface IProps {
  posts: IPostNode[];
}

const Home: NextPage<IProps> = ({ posts }) => {
  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts?.length &&
            posts.map((post: IPostNode) => (
              <PostCard key={post.node.title} post={post} />
            ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget categories={[]} slug={""} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = (await getPostNodes()) ?? [];

  return {
    props: { posts },
  };
};

export default Home;

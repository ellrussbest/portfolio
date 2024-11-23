"use client";

import PageTransition from "@/components/page_transition";
import blogs from "./blog_blog";
import BlogCard from "@/components/blog_card";
import Link from "next/link";

export default function Blogs() {
  const blog_keys = Object.keys(blogs).sort();

  return (
    <PageTransition>
      {blog_keys.length == 0 ? (
        <div className="w-full h-[90%] flex justify-center items-center flex-wrap text-center">
          No blog posts just yet. But stay tuned!
          <br />
          Feel free to share any topic suggestions by reaching out through the
          Get in Touch section I&apos;d love love to hear what interests you!
        </div>
      ) : (
        <div className="pt-[80px] h-full w-full flex flex-col gap-8 items-center">
          {blog_keys.map((val, idx) => (
            <Link
              href={`/blogs/${val}`}
              key={idx}
              passHref
              className="w-full h-full flex flex-col items-center"
            >
              <BlogCard
                key={idx}
                blogNumber={val}
                description={blogs[val]["description"]}
              />
            </Link>
          ))}
        </div>
      )}
    </PageTransition>
  );
}

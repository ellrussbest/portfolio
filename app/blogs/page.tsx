"use client";

import PageTransition from "@/components/page_transition";
import blogs from "./blog_blog";
import BlogCard from "@/components/blog_card";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="pt-[80px] h-full w-full flex flex-col gap-8 items-center">
        {Object.keys(blogs).map((val, idx) => (
          <BlogCard
            key={idx}
            blogNumber={val}
            description={blogs[val]["description"]}
            onClick={() => router.push(`/blogs/${val}`)}
          />
        ))}
      </div>
    </PageTransition>
  );
}

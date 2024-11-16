import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = req.nextUrl.searchParams.get("url");

  try {
    if (url) {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "text/html",
        },
      });

      const data = await response.text();

      return new Response(data, {
        headers: {
          "Content-Type": "text/html",
          // "Access-Control-Allow-Origin": "*",
          // "X-Frame-Options": "sameorigin",
        },
      });
    }
    return new Response(`Error fetching data`, { status: 500 });
  } catch (error) {
    return new Response(`Error fetching data: ${error}`, { status: 500 });
  }
};

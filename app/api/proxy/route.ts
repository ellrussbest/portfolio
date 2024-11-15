export const GET = async () => {
  const url =
    "https://docs.google.com/document/d/e/2PACX-1vSh94CGWIAHmbORvgovc2RQHybsm7lRQKRaD2EypQHCTN_fZXABxOlig33kDb0FBqDfpF4_j-mQ88nh/pub?embedded=true";

  try {
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
  } catch (error) {
    return new Response(`Error fetching data: ${error}`, { status: 500 });
  }
};

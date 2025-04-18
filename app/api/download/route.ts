export const GET = async () => {
  try {
    const res = await fetch(
      // "https://docs.google.com/document/d/1t6OxbuX1qpG0M7R7oFycHJ9dSXeYcwjL8fqhX6FxRQ8/export?format=pdf"
      "https://drive.google.com/uc?export=download&id=1JwpcA6R6GMDsD64z5TV2SxRgOEEctbI_"
    );

    if (res.ok) {
      const blob = await res.blob();
      return new Response(blob, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });
    } else {
      return new Response("Error fetching the document", { status: 500 });
    }
  } catch (error) {
    // @ts-expect-error err
    return new Response(error.message, { status: 500 });
  }
};

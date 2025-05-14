// src/utils/video.js
export function normalizeYoutubeUrl(url) {
    try {
      // 1. Shorts → watch?v=
      if (url.includes("/shorts/")) {
        const id = url.match(/\/shorts\/([A-Za-z0-9_-]+)/)[1];
        return `https://www.youtube.com/embed/${id}`;
      }
  
      // 2. watch?v=ID
      if (url.includes("youtube.com/watch")) {
        const vid = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${vid}`;
      }
  
      // 3. youtu.be/ID
      if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
      }
  
      // 4. Vimeo
      if (url.includes("vimeo.com/")) {
        const id = url.split("/").pop();
        return `https://player.vimeo.com/video/${id}`;
      }
  
      // 5. direct embed deja
      return url;
    } catch {
      return url;
    }
  }
  
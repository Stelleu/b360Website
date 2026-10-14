const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const pexels = (id: string, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  logo: "/imgs/logo-b360.png",
  logoLight: "/imgs/logo-b360-light.png",
  heroDunk: unsplash("photo-1579487685737-e435a87b2518", 2400),
  heroPoster: pexels("358042", 1800),
  aboutCourt: unsplash("photo-1504450758481-7338eba7524a", 1800),
  dunkParallax: pexels("358042", 1600),
  dunkAlt: unsplash("photo-1519766304817-4f37bda74a26", 1600),
  artistStage: unsplash("photo-1470229722913-7c0e2dbbafd3", 1800),
  artistSilhouette: unsplash("photo-1493225457124-a3eb161ffa5f", 1400),
  basketballArena: unsplash("photo-1546519638-68e109498ffc", 1800),
  team: [
    "/imgs/Yass.png",
    "/imgs/AfiK.jpeg",
    "/imgs/Ant.png",
    "/imgs/Yves.jpeg",
    "/imgs/Angelo.png",
    "/imgs/Estelle.png",
  ],
  talents: [
    "/imgs/Hiro.jpeg",
    "/imgs/Paul.jpeg",
    "/imgs/Parby.jpeg",
    "/imgs/Ephraim.jpeg",
  ],
  investments: [
    "/imgs/PNW.jpg",
    "/imgs/CongoOrigin.jpg",
    "/imgs/BallersAcademy.jpg",
  ],
};

export const videos = {
  heroDunk:
    "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
};

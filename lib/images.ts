const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const pexels = (id: string, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  heroDunk: unsplash("photo-1579487685737-e435a87b2518", 2400),
  heroPoster: pexels("358042", 1800),
  aboutCourt: unsplash("photo-1504450758481-7338eba7524a", 1800),
  dunkParallax: pexels("358042", 1600),
  dunkAlt: unsplash("photo-1519766304817-4f37bda74a26", 1600),
  artistStage: unsplash("photo-1470229722913-7c0e2dbbafd3", 1800),
  artistSilhouette: unsplash("photo-1493225457124-a3eb161ffa5f", 1400),
  basketballArena: unsplash("photo-1546519638-68e109498ffc", 1800),
  team: [
    unsplash("photo-1531384441138-2736e62e0919", 900),
    unsplash("photo-1531123897727-8f129e1688ce", 900),
    unsplash("photo-1507003211169-0a1dd7228f2d", 900),
    unsplash("photo-1522529599102-193c0d76b5b6", 900),
    unsplash("photo-1500648767791-00dcc994a43e", 900),
    unsplash("photo-1589156280159-27698a70f29e", 900),
  ],
  talents: [
    unsplash("photo-1511671782779-c97d3d27a1d4", 1400),
    unsplash("photo-1518611012118-696072aa579a", 1200),
    unsplash("photo-1577412647305-991150c7d163", 1200),
    unsplash("photo-1515523110800-9415d7d01932", 1200),
  ],
};

export const videos = {
  heroDunk:
    "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
};

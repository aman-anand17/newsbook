
const apilist = [
  "73be567473614bfdf5ec112c52088363",
  "ca95c867f3bf4cede21557475a2f10fb",
  "44ecd5895721905dae6e0625c69fca96",
  "7045d5c0aeef7dc46b80c21b36bbbd3c",
  "4c03eca336175a11538c4b6f30b0d518",
];
let rand_no = Math.floor(Math.random() * apilist.length);

export const NEWS_API_KEY = apilist[rand_no];

//49cacc541ed4a152d1a723e17cab9825
//a68195d9929f3f275991a5921dc545ec
//6d9b37d1d0d9fe205ffd9ed516722eb6
//5567908f8f5d24545893331400ae9ca8
//88499734e185dc3dc80b7a22c8f1edd9
/*

sachin3@gmail.com
chutiyaSachindra
 */
const apilist = [
  "e4046f5543259eccf39d07dd7d1f619f",
  "8446de8226659e3462db08bd199a7901",
  "bf4e9d4510cc216f290e9553e8beb714",
  "b346f297d9012b16270e0fc81d75439a",
  "474baef58883626f39d5e0fb9c140cb2",
];
let rand_no = Math.floor(Math.random() * apilist.length);

export const NEWS_API_KEY = apilist[rand_no];

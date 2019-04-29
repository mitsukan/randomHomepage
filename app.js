require('dotenv').config();
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_API_KEY,
  secret: process.env.UNSPLASH_API_SECRET
});

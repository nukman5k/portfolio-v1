import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

console.log(process.env);

export const client = sanityClient({
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId: 'k58858es',
    dataset: 'production',
    apiVersion: '2022-03-11',
    useCdn: true,
    // token: process.env.REACT_APP_SANITY_TOKEN,
    token: 'skRs4Z9nUrKGvTaBvJw4XPQPED0XjC7SyAQnD6syLPJ6TyOUJIlnhsnq9QhioI8T0saDAdt7fR25ZXXY7w2Gw2PrgF8D60PKTLgvzkl6BSniiwLIuyHK1A6ACr4koMyla17ZqIQXr9tP7zNHZZuHLs5T39nj4qrHTriCRLBxjnHhLrCrNpbz',
    ignoreBrowserTokenWarning: true
});



//Code for working with images in sanity
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



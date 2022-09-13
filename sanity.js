// import { SanityClient } from "@sanity/client";
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: "sudos1ix",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

//RUN THIS to add exception for localhost 3000 CORS Policy
//sanity cors add https://localhost:3000 //19006

export default client;
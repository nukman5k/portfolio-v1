import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId: 'k58858es',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})

//Code for working with images in sanity
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



skW9JiPKAhjzgqdkgU0PKRrPpQiEfgajklKMxeRwpPQcIZlYtltwC0O9PgvPsRNUlMYJdDxcMkMZecegK1dgCoEyeRWsVpGZvM3KXh1RDbp6Si1UhcedYAPW4iaqccdxcxPDQCOVymP8JSWI3kO1GrMWwfryFjPG3H9n84NfFS1re3tx2qng
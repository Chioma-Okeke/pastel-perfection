import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Using next-sanity's tag-based revalidation (sanityFetch/<SanityLive/>), so CDN caching must stay off
});

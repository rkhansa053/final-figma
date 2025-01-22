import { createClient } from "../lib/client";


const client = createClient({
    projectId: "stkrm8yo",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10",
});

export async function SanityFetch({
    querry,
    params = {},
  }: {
    querry: string;
    params?: Record<string, unknown>;
  }) {
    try {
      const data = await client.fetch(querry, params);
      return data;
    } catch (error) {
      console.error("Error fetching data", error);
      throw error;
    }
  }
  
import { GOLD_API_BASE_URL, GOLD_API_KEY } from "@env";

const METAL_CODES: Record<string, string> = {
    gold: "XAU", silver: "XAG", platinum: "XPT", palladium: "XPD",
};

export async function fetchMetalPrice(metal: string) {
    try {
        const metalCode = METAL_CODES[metal.toLowerCase()];
        if (!metalCode) { throw new Error(`Unknown metal: ${metal}`); }

        const url = `${GOLD_API_BASE_URL}/${metalCode}/INR`;
        console.log("Fetching from URL:", url);

        const response = await fetch(url, {
            headers: { "x-access-token": GOLD_API_KEY, "Content-Type": "application/json" }
        });

        if (!response.ok) {
            const errorText = await response.text().catch(() => "Unknown error");
            throw new Error(`API request failed: ${response.status} ${response.statusText}. URL: ${url}. Error: ${errorText}`);
        }

        const data = await response.json();

        return { price: data?.price, timestamp: data?.timestamp };

    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("Error fetching metal price:", errorMessage);
        throw err;
    }
}

export async function fetchMetalDetails(metal: string) {
    try {
        const metalCode = METAL_CODES[metal.toLowerCase()];
        if (!metalCode) throw new Error(`Unknown metal: ${metal}`);

        const url = `${GOLD_API_BASE_URL}/${metalCode}/INR`;

        const response = await fetch(url, {
            headers: { "x-access-token": GOLD_API_KEY, "Content-Type": "application/json" }
        });

        if (!response.ok) {
            const errorText = await response.text().catch(() => "Unknown error");
            throw new Error(errorText);
        }

        return await response.json();
    } catch (err) {
        console.error("Error fetching metal details:", err);
        throw err;
    }
}


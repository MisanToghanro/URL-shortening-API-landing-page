export const shortenUrl = async (url) => {
    // Change the absolute URL to the proxied relative path
    // Vite will intercept '/api' and forward it to 'https://cleanuri.com/api/v1'
    const response = await fetch(
        "/api/shorten", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `url=${encodeURIComponent(url)}`
        }
    );

    //  check if the response is OK before parsing
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to shorten URL");
    }

    const data = await response.json();

    if (data.error) {
        throw new Error("Invalid URL");
    }

    return data.result_url;
}
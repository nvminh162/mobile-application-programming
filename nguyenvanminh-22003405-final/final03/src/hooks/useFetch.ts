import { useState } from "react"

export const useFetch = (baseUrl = "https://69313f7511a8738467cddb08.mockapi.io") => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (url, options) => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch(baseUrl + url, {
                headers: { "Content-Type": "application/json" },
                ...options,
            });

            if (!res.ok) throw new Error("Has Error!!!");

            return await res.json();
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    const GET = (url) => request(url, { method: "GET" });
    const POST = (url, data) => request(url, { method: "POST", body: JSON.stringify(data) });
    const PUT = (url, data) => request(url, { method: "PUT", body: JSON.stringify(data) });
    const DELETE = (url) => request(url, { method: "DELETE" });

    return { isLoading, error, GET, POST, PUT, DELETE };
}
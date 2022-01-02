import {
    IYoutubeSearchResponse
} from "../@types/youtube";
import api from "./axios";

const search = async (query: string): Promise < IYoutubeSearchResponse > => {
    const response = await api?.get < IYoutubeSearchResponse > ("search", {
        params: {
            part: "snippet",
            maxResults: 20,
            q: query,
            type: "video",
        },
    });
    if (!response) throw new Error("Youtube API is not initialized");

    return response.data;
};

export {
    search
};
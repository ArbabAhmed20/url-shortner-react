import Api from "../api/Api.js";

import { useQuery } from "@tanstack/react-query";

export const useFetchMyShortUrls = (token, onError) => {
        return useQuery({
                queryKey: ["my-shorturl"],

                queryFn: async () => {
                        return await Api.get(
                            "/api/urls/myUrls",
                            {
                                    headers: {
                                            "Content-Type": "application/json",
                                            Accept: "application/json",
                                            Authorization: "Bearer " + token,
                                    },
                            }
                        );
                },

                select: (data) => {
                        const convertToArray = data.data.sort((a, b) =>
                                    new Date(b.createdDate) - new Date(a.createdDate)
                        )

                        return convertToArray;
                },

                onError,
                staleTime: 5000,
        });
};

export const useFetchTotalClicks = (token, onError) => {
        return useQuery({
                queryKey: ["url-totalclick"],

                queryFn: async () => {
                        return await Api.get(
                            "/api/urls/totalClicks?startDate=2026-01-01&endDate=2026-12-31",
                            {
                                    headers: {
                                            "Content-Type": "application/json",
                                            Accept: "application/json",
                                            Authorization: "Bearer " + token,
                                    },
                            }
                        );
                },

                select: (data) => {
                        const convertToArray = Object.keys(data.data).map((key) => ({
                                clickDate: key,
                                count: data.data[key],
                        }));

                        return convertToArray;
                },

                onError,
                staleTime: 5000,
        });
};
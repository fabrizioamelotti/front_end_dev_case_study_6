'use client';

import { useEffect, useState } from "react";
import { AdvisorsService } from "@/modules/advisors/advisors.service";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

export function useAdvisorsAvailability(initialAdvisors: AdvisorResponseType[]) {
    const [advisors, setAdvisors] = useState(initialAdvisors);

    useEffect(() => {
        let isCancelled = false;

        const refreshAvailability = async () => {
            try {
                const availabilities = await Promise.all(
                    initialAdvisors.map((advisor) =>
                        AdvisorsService.checkAdvisorAvailabilityById(advisor.id)
                    )
                );

                if (isCancelled) {
                    return;
                }

                const availabilityById = new Map(
                    availabilities.map((availability) => [availability.id, availability])
                );

                setAdvisors((currentAdvisors) =>
                    currentAdvisors.map((advisor) => {
                        const latestAvailability = availabilityById.get(advisor.id);

                        return latestAvailability
                            ? {
                                ...advisor,
                                callAvailability: latestAvailability.callAvailability,
                                chatAvailability: latestAvailability.chatAvailability,
                            }
                            : advisor;
                    })
                );
            } catch (error) {
                console.error("Failed to refresh advisor availability", error);
            }
        };

        void refreshAvailability();

        // 30_000 = 30 seconds
        const intervalId = window.setInterval(refreshAvailability, 30_000);

        return () => {
            isCancelled = true;
            window.clearInterval(intervalId);
        };
    }, [initialAdvisors]);

    return advisors;
}

'use client';

import TailwindAdvisorsList from "@/components/tailwind/advisors-list";
import { useAdvisorsAvailability } from "@/components/advisors/use-advisors-availability";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type TailwindAdvisorsContainerProps = {
    advisors: AdvisorResponseType[];
};

export default function TailwindAdvisorsContainer({
    advisors,
}: TailwindAdvisorsContainerProps) {
    const updatedAdvisors = useAdvisorsAvailability(advisors);

    return <TailwindAdvisorsList advisors={updatedAdvisors} />;
}

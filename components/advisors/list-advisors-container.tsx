'use client';

import AdvisorsList from "@/components/list/advisors-list";
import { useAdvisorsAvailability } from "@/components/advisors/use-advisors-availability";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type ListAdvisorsContainerProps = {
    advisors: AdvisorResponseType[];
};

export default function ListAdvisorsContainer({
    advisors,
}: ListAdvisorsContainerProps) {
    const updatedAdvisors = useAdvisorsAvailability(advisors);

    return <AdvisorsList advisors={updatedAdvisors} />;
}

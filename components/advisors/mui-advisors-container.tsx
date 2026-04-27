'use client';

import MuiAdvisorsList from "@/components/mui/advisors-list";
import { useAdvisorsAvailability } from "@/components/advisors/use-advisors-availability";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type MuiAdvisorsContainerProps = {
    advisors: AdvisorResponseType[];
};

export default function MuiAdvisorsContainer({
    advisors,
}: MuiAdvisorsContainerProps) {
    const updatedAdvisors = useAdvisorsAvailability(advisors);

    return <MuiAdvisorsList advisors={updatedAdvisors} />;
}

import { Metadata } from "next";
import { AdvisorsService } from "@/modules/advisors/advisors.service";
import TailwindAdvisorsContainer from "@/components/advisors/tailwind-advisors-container";

export const metadata: Metadata = {
    title: 'List with Tailwind CSS',
    description: "This list is styled with Tailwind CSS",
}

export default async function Page() {
    const advisors = await AdvisorsService.findAdvisors();

    return <TailwindAdvisorsContainer advisors={advisors} />;
}

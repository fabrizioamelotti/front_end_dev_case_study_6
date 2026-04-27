import { Metadata } from "next";
import { AdvisorsService } from "@/modules/advisors/advisors.service";
import MuiAdvisorsContainer from "@/components/advisors/mui-advisors-container";

export const metadata: Metadata = {
    title: 'List with MUI CSS',
    description: "This list is styled with MUI CSS",
}

export default async function Page() {
    const advisors = await AdvisorsService.findAdvisors();

    return <MuiAdvisorsContainer advisors={advisors} />;
}

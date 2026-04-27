import {AdvisorsService} from "@/modules/advisors/advisors.service";
import ListAdvisorsContainer from "@/components/advisors/list-advisors-container";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'List with custom CSS',
    description: "This list is styled with custom CSS",
}

export default async function Page() {
    const advisors = await AdvisorsService.findAdvisors();

    return <ListAdvisorsContainer advisors={advisors} />;
}

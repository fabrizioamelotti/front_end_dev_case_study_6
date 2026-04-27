import AdvisorCard from "@/components/tailwind/advisor-card";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type AdvisorsListProps = {
    advisors: AdvisorResponseType[];
};

export default function TailwindAdvisorsList({ advisors }: AdvisorsListProps) {
    return (
        <section className="min-h-screen min-w-90 bg-slate-50 p-4 sm:p-8">
            <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-sm bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.06)]">
                {advisors.map((advisor) => (
                    <AdvisorCard key={advisor.id} advisor={advisor} />
                ))}
            </div>
        </section>
    );
}

import Image from "next/image";
import TailwindAdvisorActions from "@/components/tailwind/advisor-actions";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type AdvisorCardProps = {
    advisor: AdvisorResponseType;
};

export default function AdvisorCard({ advisor }: AdvisorCardProps) {
    const fullName = `${advisor.name} ${advisor.surname}`;

    return (
        <article className="flex flex-col gap-5 border-b border-[#edf3f5] px-4 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
            <div className="flex gap-4">
                <Image
                    className="h-[62px] w-[62px] rounded-full object-cover"
                    src={advisor.imageSrc}
                    alt={fullName}
                    width={62}
                    height={62}
                />
                <h2 className="text-lg text-[var(--main-background-color)]">
                    {fullName}
                </h2>
            </div>

            <TailwindAdvisorActions advisor={advisor} />
        </article>
    );
}

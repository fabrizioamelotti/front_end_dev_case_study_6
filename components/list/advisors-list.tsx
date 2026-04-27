import Advisor from "@/components/list/advisor/advisor";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";
import styles from "@/components/list/advisors-list.module.css";

type AdvisorsListProps = {
    advisors: AdvisorResponseType[];
};

export default function AdvisorsList({ advisors }: AdvisorsListProps) {
    return (
        <section className={styles.container}>
            <div className={styles.list}>
                {advisors.map((advisor) => (
                    <Advisor key={advisor.id} advisor={advisor} />
                ))}
            </div>
        </section>
    );
}

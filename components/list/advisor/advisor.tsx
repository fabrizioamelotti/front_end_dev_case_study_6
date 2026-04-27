import Image from "next/image";
import {AdvisorResponseType} from "@/modules/advisors/advisors.type";
import styles from "@/components/list/advisor/advisor.module.css";
import AdvisorActions from "@/components/list/advisor/advisor-actions/advisor-actions";

type AdvisorProps = {
    advisor: AdvisorResponseType;
};

export default function Advisor({advisor}: AdvisorProps) {
    return (
        <article className={styles.article}>
            <div className={styles.profile}>
                <Image
                    className={styles.avatar}
                    src={advisor.profilePictureUrl}
                    alt={advisor.name}
                    width={62}
                    height={62}
                />
                <h2 className={styles.name}>{advisor.name}</h2>
            </div>

            <AdvisorActions advisor={advisor}/>
        </article>
    );
}

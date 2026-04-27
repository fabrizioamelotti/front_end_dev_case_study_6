'use client'

import Image from "next/image";
import {AdvisorResponseType} from "@/modules/advisors/advisors.type";
import styles from "@/components/list/advisor/advisor-actions/advisor-actions.module.css";
import {dictionary} from "@/components/dictionary/dictionary";
import callIcon from "@/components/icons/call.svg";
import chatIcon from "@/components/icons/chat.svg";

type AdvisorActionsProps = {
    advisor: AdvisorResponseType;
};

export default function AdvisorActions({advisor}: AdvisorActionsProps) {
    const callLabel = advisor.callAvailability ? dictionary.label.callNow : dictionary.label.callLater;
    const chatLabel = advisor.chatAvailability ? dictionary.label.chatNow : dictionary.label.charLater;

    const callNow = () => {
        alert(`Calling ${advisor.name}`)
    }

    const chatNow = () => {
        alert(`Chatting with ${advisor.name}`)
    }


    return (
        <div className={styles.actions}>
            <div className={styles.price}>{advisor.price}</div>
            <button
                className={`${styles.button} ${advisor.callAvailability ? styles.buttonAvailable : styles.buttonUnavailable}`}
                type={"button"}
                disabled={!advisor.callAvailability}
                onClick={callNow}
            >
                <Image src={callIcon} alt={callLabel} aria-hidden="true" className={styles.buttonIcon} />
                {callLabel}
            </button>
            <button
                className={`${styles.button} ${advisor.chatAvailability ? styles.buttonAvailable : styles.buttonUnavailable}`}
                type={"button"}
                disabled={!advisor.chatAvailability}
                onClick={chatNow}
            >
                <Image src={chatIcon} alt={chatLabel} aria-hidden="true" className={styles.buttonIcon} />
                {chatLabel}
            </button>
        </div>
    );
}

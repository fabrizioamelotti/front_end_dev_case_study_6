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
    const callLabel = advisor["call-availability"] ? dictionary.label.callNow : dictionary.label.callLater;
    const chatLabel = advisor["chat-availability"] ? dictionary.label.chatNow : dictionary.label.charLater;

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
                className={`${styles.button} ${advisor["call-availability"] ? styles.buttonAvailable : styles.buttonUnavailable}`}
                type={"button"}
                disabled={!advisor["call-availability"]}
                onClick={callNow}
            >
                <Image src={callIcon} alt={callLabel} aria-hidden="true" className={styles.buttonIcon} />
                {callLabel}
            </button>
            <button
                className={`${styles.button} ${advisor["chat-availability"] ? styles.buttonAvailable : styles.buttonUnavailable}`}
                type={"button"}
                disabled={!advisor["chat-availability"]}
                onClick={chatNow}
            >
                <Image src={chatIcon} alt={chatLabel} aria-hidden="true" className={styles.buttonIcon} />
                {chatLabel}
            </button>
        </div>
    );
}

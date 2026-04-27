'use client'

import Image from "next/image";
import { dictionary } from "@/components/dictionary/dictionary";
import callIcon from "@/components/icons/call.svg";
import chatIcon from "@/components/icons/chat.svg";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type AdvisorActionsProps = {
    advisor: AdvisorResponseType;
};

const availableButtonClass =
    "bg-[var(--main-background-color)] text-white hover:bg-[color-mix(in_srgb,var(--main-background-color),black_20%)]";
const unavailableButtonClass =
    "cursor-not-allowed bg-[var(--disabled-background-color)] text-[var(--disabled-color)]";

export default function TailwindAdvisorActions({ advisor }: AdvisorActionsProps) {
    const callLabel = advisor["call-availability"] ? dictionary.label.callNow : dictionary.label.callLater;
    const chatLabel = advisor["chat-availability"] ? dictionary.label.chatNow : dictionary.label.charLater;

    const callNow = () => {
        alert(`Calling ${advisor.name}`);
    };

    const chatNow = () => {
        alert(`Chatting with ${advisor.name}`);
    };

    return (
        <div className="flex shrink-0 flex-col gap-2 sm:items-stretch">
            <div className="font-bold text-black">{advisor.price}</div>
            <button
                className={`inline-flex h-6 min-w-24 items-center justify-center gap-1.5 rounded-sm text-[0.7rem] uppercase transition-colors ${advisor["call-availability"] ? availableButtonClass : unavailableButtonClass}`}
                type="button"
                disabled={!advisor["call-availability"]}
                onClick={callNow}
            >
                <Image src={callIcon} alt={callLabel} aria-hidden="true" className="h-3 w-3" />
                {callLabel}
            </button>
            <button
                className={`inline-flex h-6 min-w-24 items-center justify-center gap-1.5 rounded-sm text-[0.7rem] uppercase transition-colors ${advisor["chat-availability"] ? availableButtonClass : unavailableButtonClass}`}
                type="button"
                disabled={!advisor["chat-availability"]}
                onClick={chatNow}
            >
                <Image src={chatIcon} alt={chatLabel} aria-hidden="true" className="h-3 w-3" />
                {chatLabel}
            </button>
        </div>
    );
}

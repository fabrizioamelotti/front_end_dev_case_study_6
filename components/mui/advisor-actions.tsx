'use client';

import { dictionary } from "@/components/dictionary/dictionary";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Button, Stack, Typography } from "@mui/material";

type AdvisorActionsProps = {
    advisor: AdvisorResponseType;
};

export default function MuiAdvisorActions({ advisor }: AdvisorActionsProps) {
    const callLabel = advisor.callAvailability ? dictionary.label.callNow : dictionary.label.callLater;
    const chatLabel = advisor.chatAvailability ? dictionary.label.chatNow : dictionary.label.charLater;

    const callNow = () => {
        alert(`Calling ${advisor.name}`);
    };

    const chatNow = () => {
        alert(`Chatting with ${advisor.name}`);
    };

    return (
        <Stack spacing={1} sx={{ flexShrink: 0, alignItems: { xs: "flex-start", sm: "stretch" } }}>
            <Typography sx={{ color: "text.primary", fontWeight: 700 }}>{advisor.price}</Typography>
            <Button
                variant="contained"
                disableElevation
                disabled={!advisor.callAvailability}
                onClick={callNow}
                startIcon={<LocalPhoneOutlinedIcon sx={{ fontSize: 12 }} />}
                sx={{
                    minWidth: 96,
                    height: 24,
                    borderRadius: 0.75,
                    justifyContent: "center",
                    bgcolor: advisor.callAvailability ? "primary.main" : "grey.300",
                    color: advisor.callAvailability ? "primary.contrastText" : "#ffffff",
                    "&:hover": advisor.callAvailability ? { bgcolor: "#18877f" } : undefined,
                    "&.Mui-disabled": {
                        bgcolor: "grey.300",
                        color: "#ffffff",
                    },
                }}
            >
                {callLabel}
            </Button>
            <Button
                variant="contained"
                disableElevation
                disabled={!advisor.chatAvailability}
                onClick={chatNow}
                startIcon={<ChatBubbleOutlineRoundedIcon sx={{ fontSize: 12 }} />}
                sx={{
                    minWidth: 96,
                    height: 24,
                    borderRadius: 0.75,
                    justifyContent: "center",
                    bgcolor: advisor.chatAvailability ? "primary.main" : "grey.300",
                    color: advisor.chatAvailability ? "primary.contrastText" : "#ffffff",
                    "&:hover": advisor.chatAvailability ? { bgcolor: "#18877f" } : undefined,
                    "&.Mui-disabled": {
                        bgcolor: "grey.300",
                        color: "#ffffff",
                    },
                }}
            >
                {chatLabel}
            </Button>
        </Stack>
    );
}

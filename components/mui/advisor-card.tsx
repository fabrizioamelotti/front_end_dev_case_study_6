import { AdvisorResponseType } from "@/modules/advisors/advisors.type";
import MuiAdvisorActions from "@/components/mui/advisor-actions";
import { Avatar, Box, Stack, Typography } from "@mui/material";

type AdvisorCardProps = {
    advisor: AdvisorResponseType;
};

export default function AdvisorCard({ advisor }: AdvisorCardProps) {
    const fullName = `${advisor.name} ${advisor.surname}`;

    return (
        <Box
            component="article"
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "stretch", sm: "center" },
                justifyContent: "space-between",
                gap: { xs: 2.5, sm: 4 },
                px: { xs: 2, sm: 4 },
                py: 2,
                borderBottom: "1px solid #edf3f5",
                "&:last-of-type": {
                    borderBottom: "none",
                },
            }}
        >
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt={fullName}
                    src={advisor.imageSrc}
                    sx={{ width: 62, height: 62 }}
                />
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                    {fullName}
                </Typography>
            </Stack>

            <MuiAdvisorActions advisor={advisor} />
        </Box>
    );
}

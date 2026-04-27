import AdvisorCard from "@/components/mui/advisor-card";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";
import { Box, Paper } from "@mui/material";

type AdvisorsListProps = {
    advisors: AdvisorResponseType[];
};

export default function MuiAdvisorsList({ advisors }: AdvisorsListProps) {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: "background.default",
                minHeight: "100vh",
                minWidth: 360,
                px: { xs: 2, sm: 4 },
                py: 4,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    maxWidth: 768,
                    mx: "auto",
                    overflow: "hidden",
                    borderRadius: 0.75,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)",
                }}
            >
                {advisors.map((advisor) => (
                    <AdvisorCard key={advisor.id} advisor={advisor} />
                ))}
            </Paper>
        </Box>
    );
}

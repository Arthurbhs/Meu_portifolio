import { Box, Container, Stack, Typography } from "@mui/material";


/* ======================================================
   BASE METÁLICA (REAPROVEITADA)
====================================================== */

const metalFooter = {
  borderRadius: "24px 24px 0 0",
  backdropFilter: "blur(10px)",
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(135deg, #850404, #e6256b, #690000)",
  border: "1px solid rgba(255,255,255,0.25)",
  boxShadow: `
    inset 0 2px 3px rgba(255,255,255,0.35),
    inset 0 -3px 8px rgba(0,0,0,0.7),
    0 -20px 60px rgba(236,72,153,.65)
  `,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)",
    opacity: 0.35,
    pointerEvents: "none",
  },
};

/* ======================================================
   COMPONENTE
====================================================== */

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 0,
        pt: 0,
      }}
    >
    
        <Box sx={{ ...metalFooter, py: 6 }}>
          <Container maxWidth="lg">
            <Stack spacing={1.6} alignItems="center" textAlign="center">
              {/* NOME */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                  letterSpacing: 0.8,
                  color: "#fff",
                }}
              >
                Arthur Barbosa Holanda
              </Typography>

              {/* CONTATOS */}
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 14,
                }}
              >
                📞  (13)98105-3610
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 14,
                }}
              >
                ✉️ arthur.shekinar@gmail.com
              </Typography>

              {/* DIVISOR SUTIL */}
              <Box
                sx={{
                  width: 120,
                  height: 1,
                  mt: 2,
                  mb: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent)",
                }}
              />

              {/* COPYRIGHT */}
              <Typography
                sx={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                © {new Date().getFullYear()} • Todos os direitos reservados
              </Typography>
            </Stack>
          </Container>
        </Box>
      
    </Box>
  );
}

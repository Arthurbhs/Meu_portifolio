import { motion } from "framer-motion";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function HeroSection() {

const metalBase = {
  px: 3,
  py: 1.2,
  borderRadius: "14px",
  fontWeight: 600,
  textTransform: "none",
  backdropFilter: "blur(6px)",
  boxShadow: "0 0 20px rgba(255,255,255,0.15)",
  transition: "all .35s ease",
};

const metalButtonPink = {
  ...metalBase,
  color: "#fff",
  background:
    "linear-gradient(135deg, #850404, #e6256b, #690000)",
  boxShadow:
    "0 0 25px rgba(236,72,153,.45), inset 0 0 8px rgba(255,255,255,.35)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow:
      "0 0 40px rgba(236,72,153,.8), inset 0 0 12px rgba(255,255,255,.5)",
  },
};

const metalButtonPurple = {
  ...metalBase,
  color: "#fff",
  background:
    "linear-gradient(135deg, #5e0985, #c61dcf, #350469)",
  boxShadow:
    "0 0 25px rgba(139,92,246,.45), inset 0 0 8px rgba(255,255,255,.35)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow:
      "0 0 40px rgba(139,92,246,.8), inset 0 0 12px rgba(255,255,255,.5)",
  },
};

const metalButtonOutline = {
  ...metalBase,
  color: "#fff",
   background:
    "linear-gradient(135deg, #240a94, #17b3cf, #370875)",
  boxShadow:
    "0 0 25px rgba(139,92,246,.45), inset 0 0 8px rgba(255,255,255,.35)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow:
      "0 0 40px rgba(139,92,246,.8), inset 0 0 12px rgba(255,255,255,.5)",
  },
};

const scrollToDesign = () => {
  const section = document.getElementById("design");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const scrollToWeb = () => {
  const section = document.getElementById("web");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const scrollToAbout = () => {
  const section = document.getElementById("about");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};



  return (


    

    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #12081f, #2a1458, #12081f)",
      }}
    >
      {/* IMAGEM DE FUNDO */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/ProgramacaoBackground.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          mixBlendMode: "screen",
        }}
      />

      {/* GLOW */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(236,72,153,0.35), transparent 60%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
       <Stack
  direction={{ xs: "column", lg: "row" }}
  spacing={10}
  alignItems="center"
  justifyContent="space-between"
>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 42, sm: 56, lg: 72 },
                background:
                  "linear-gradient(90deg,#ec4899,#d946ef,#8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(236,72,153,.5)",
              }}
            >
              ARTHUR <br /> BARBOSA
            </Typography>

            <Typography mt={3} color="secondary" fontSize={20}>
              Desenvolvedor Front-end
            </Typography>

            <Typography mt={1} maxWidth={420} color="rgba(255,255,255,0.75)">
              Criando interfaces que evoluem com você
            </Typography>

          <Stack direction="row" spacing={2} mt={5}>
  <Button
    sx={metalButtonPink}
     onClick={scrollToDesign}
  >
    Design
  </Button>

  <Button
    sx={metalButtonPurple}
     onClick={scrollToWeb}
  >
    Programação
  </Button>

  <Button
    sx={metalButtonOutline}
     onClick={scrollToAbout}
  >
    Sobre mim
  </Button>
</Stack>

          </motion.div>

          {/* FRAGMENTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
           <Box
  sx={{
    width: { xs: 360, md: 570 },
    background: "transparent",
  }}
>

              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/ArthurIcon.png"
                  alt="Arthur Barbosa"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
          </motion.div>
        </Stack>
      </Container>

{/* FADE FINAL DA HERO */}
<Box
  sx={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 180,
    pointerEvents: "none",
    zIndex: 2,
    background: `
      linear-gradient(
        to bottom,
        rgba(18,8,31,0) 0%,
        rgba(18,8,31,0.6) 50%,
        rgba(18,8,31,1) 100%
      )
    `,
  }}
/>



    </Box>
    
  );
}

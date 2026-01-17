import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";

/* ======================================================
   BASE METÁLICA
====================================================== */

const metalCardBase = {
  borderRadius: "20px",
  backdropFilter: "blur(8px)",
  transition: "all .4s ease",
  position: "relative",
  overflow: "hidden",
};

const createMetalCard = ({
  gradient,
  glowColor,
}: {
  gradient: string;
  glowColor: string;
}) => ({
  ...metalCardBase,
  background: gradient,
  boxShadow: `
    inset 0 1px 1px rgba(255,255,255,0.35),
    inset 0 -2px 6px rgba(0,0,0,0.6),
    0 20px 50px rgba(0,0,0,0.55),
    0 0 35px ${glowColor}
  `,
  border: "1px solid rgba(255,255,255,0.25)",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25), transparent 70%)",
    opacity: 0.35,
    pointerEvents: "none",
  },
  "&:hover": {
    transform: "translateY(-6px) scale(1.01)",
    boxShadow: `
      inset 0 1px 2px rgba(255,255,255,0.45),
      inset 0 -3px 8px rgba(0,0,0,0.75),
      0 35px 70px ${glowColor},
      0 0 55px ${glowColor}
    `,
  },
});

/* ======================================================
   VARIAÇÕES
====================================================== */

const metalCardPink = createMetalCard({
  gradient: "linear-gradient(135deg, #850404, #e6256b, #690000)",
  glowColor: "rgba(236,72,153,.7)",
});

const metalCardPurple = createMetalCard({
  gradient: "linear-gradient(135deg, #5e0985, #c61dcf, #350469)",
  glowColor: "rgba(139,92,246,.7)",
});

const metalCardBlue = createMetalCard({
  gradient: "linear-gradient(135deg, #240a94, #17b3cf, #370875)",
  glowColor: "rgba(23,179,207,.7)",
});

/* ======================================================
   ÁREAS
====================================================== */

const areas = [
  {
    title: "Design de Interfaces",
    icon: <BrushIcon sx={{ fontSize: 64 }} />,
    cardStyle: metalCardPink,
    items: [
      "UX Design",
      "UI Design",
      "Figma",
      "Teoria das Cores",
      "Web Design",
      "Design de Produto",
      "Design Gráfico",
    ],
  },
  {
    title: "Desenvolvimento Web e Mobile",
    icon: <CodeIcon sx={{ fontSize: 64 }} />,
    cardStyle: metalCardPurple,
    items: [
      "React",
      "Vite",
      "TypeScript",
      "Material UI",
      "Firebase",
      "Node.js",
      "Express",
      "Expo",
      "React Native",
    ],
  },
  {
    title: "Ilustração e Animação",
    icon: <AutoAwesomeIcon sx={{ fontSize: 64 }} />,
    cardStyle: metalCardBlue,
    items: [
      "Ilustração Digital",
      "Motion Design",
      "Animação de Personagem",
      "Concept Art",
      "Photoshop",
      "CorelDRAW",
      "Vetorização",
    ],
  },
];

/* ======================================================
   FORMAÇÃO
====================================================== */

const certifications = [
  {
    title: "Técnico em Informática para Internet",
    institution: "ETEC",
    year: "2021",
  },
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "FATEC",
    year: "2025",
  },
  {
    title: "Design Gráfico e Design de Produto",
    institution: "VUNESP",
    year: "Cursando",
  },
];

/* ======================================================
   COMPONENTE
====================================================== */

export default function AboutSection() {
  return (
    <Box
    id="about"
      sx={{
        py: { xs: 10, md: 14 },
          position: "relative", 
        background:
          "linear-gradient(180deg, rgba(18,8,31,1) 0%, rgba(26,12,46,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* SOBRE MIM */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            background:
              "linear-gradient(90deg,#ec4899,#d946ef,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sobre mim
        </Typography>

        <Typography
          maxWidth={720}
          sx={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 18,
            lineHeight: 1.7,
          }}
        >
          Sou desenvolvedor front-end com foco em criar interfaces modernas,
          funcionais e visualmente impactantes. Trabalho unindo design,
          tecnologia e animação para transformar ideias em experiências
          digitais que realmente se destacam.
        </Typography>

        {/* ÁREAS */}
        <Box mt={12}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 6, color: "#fff" }}
          >
            Áreas de atuação
          </Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            {areas.map((area, index) => (
             <motion.div
  key={area.title}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.1,
    ease: [0.16, 1, 0.3, 1],
    delay: index * 0.15,
  }}
  viewport={{ once: false, amount: 0.25 }}
  style={{ flex: 1 }}
>

                <Box sx={{ ...area.cardStyle, p: 5, textAlign: "center" }}>
                  <Box sx={{ color: "#fff", mb: 3 }}>{area.icon}</Box>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#fff", mb: 3 }}
                  >
                    {area.title}
                  </Typography>

                  <Stack spacing={1.2}>
                    {area.items.map((item) => (
                      <Box
                        key={item}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          color: "rgba(255,255,255,0.75)",
                          fontSize: 15,
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 16, opacity: 0.7 }} />
                        {item}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>

        {/* FORMAÇÃO */}
        <Box mt={14}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 6, color: "#fff" }}
          >
            Formação & Certificações
          </Typography>

          <Stack spacing={3}>
            {certifications.map((cert, index) => (
              <motion.div
  key={cert.title}
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1],
    delay: index * 0.12,
  }}
  viewport={{ once: false, amount: 0.3 }}
>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(6px)",
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 40, color: "#ec4899" }} />

                  <Box>
                    <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                      {cert.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {cert.institution} • {cert.year}
                    </Typography>
                  </Box>
                  
                </Box>
              </motion.div>
            ))}
          </Stack>
          
        </Box>
         

      </Container>
{/* FADE FINAL DA ABOUT */}
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
        rgba(255, 255, 255, 0) 0%,
        rgba(26,12,46,0.6) 50%,
        rgba(18,8,31,1) 100%
      )
    `,
  }}
/>

    </Box>
  );
}

import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

/* ======================================================
   CARD METÁLICO
====================================================== */

const metalProjectCard = {
  width: 340,
  minWidth: 340,
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.18)",
  backdropFilter: "blur(8px)",
  boxShadow: `
    inset 0 1px 1px rgba(255,255,255,0.25),
    0 25px 60px rgba(0,0,0,0.6)
  `,
  transition: "all .45s ease",
  scrollSnapAlign: "start",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `
      inset 0 1px 2px rgba(255,255,255,0.35),
      0 40px 90px rgba(139,92,246,0.45)
    `,
  },
};

/* ======================================================
   SETAS
====================================================== */

const arrowStyle = {
  width: 46,
  height: 46,
  borderRadius: "50%",
  backdropFilter: "blur(6px)",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
  border: "1px solid rgba(255,255,255,0.25)",
  boxShadow: `
    inset 0 1px 1px rgba(255,255,255,0.35),
    0 15px 40px rgba(0,0,0,0.55)
  `,
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all .3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: `
      inset 0 1px 2px rgba(255,255,255,0.45),
      0 25px 60px rgba(139,92,246,0.6)
    `,
  },
};

/* ======================================================
   PROJETOS
====================================================== */

const projects = [
  {
    title: "Biblioteca Periferia tem palavra",
    description: "Plataforma web para visualização e navegação de livros.",
    image: "/Blibioteca.png",
    techs: ["React", "Vite", "Material UI"],
    demo: "https://periferiatempalavra.netlify.app/",
    github: "https://github.com/Arthurbhs/Livro-ecommerce",
    startedAt: "Nov • 2025",
  },
  {
    title: "ThermoFlow",
    description: "Calculadora térmica interativa.",
    image: "/ThermoFlow.png",
    techs: ["React", "TypeScript"],
    demo: "https://thermoflowcalculator.netlify.app/Calculadora",
    github: "https://github.com/Arthurbhs/ThermoFlow",
    startedAt: "Jan • 2025",
  },
  {
    title: "Baixada Pré-histórica",
    description: "Site narrativo para série documental.",
    image: "/Serie.png",
    techs: ["Web Design", "Storytelling"],
    demo: "https://baixada-pre-historica-serie.netlify.app/",
    github: "https://github.com/Arthurbhs/Baixada-pr--historica-a-s-rie",
    startedAt: "Fev • 2025",
  },
  {
    title: "Assegura",
    description:
      "Protótipo desenvolvido para uma filial da empresa Assegura, que foi encerrada.",
    image: "/Assegura.png",
    techs: ["UI Design", "Protótipo"],
    demo: "https://assegura-prototype.netlify.app/",
    github: "https://github.com/Arthurbhs/Assegura-website",
    startedAt: "Set • 2024",
  },
  {
    title: "Argus Seguros",
    description:
      "Website institucional com foco em confiança e identidade visual.",
    image: "/Argus.png",
    techs: ["Web Design", "Branding"],
    demo: "https://argusseguros.com/",
    github: "https://github.com/Arthurbhs/Argos",
    startedAt: "Out • 2024",
  },
];

/* ======================================================
   COMPONENTE
====================================================== */

export default function ProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <Box
    id="web"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg, rgba(18,8,31,1) 0%, rgba(14,6,28,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            background:
              "linear-gradient(90deg,#ec4899,#d946ef,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Projetos Web
        </Typography>

        <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 6 }}>
          Alguns projetos que desenvolvi unindo design e tecnologia.
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* SETA ESQUERDA */}
          <Box
            onClick={() => scroll("left")}
            sx={{
              ...arrowStyle,
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 5,
              display: { xs: "none", md: "flex" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </Box>

          {/* SETA DIREITA */}
          <Box
            onClick={() => scroll("right")}
            sx={{
              ...arrowStyle,
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 5,
              display: { xs: "none", md: "flex" },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Box>

          {/* CARROSSEL */}
      <Box
  ref={carouselRef}
  sx={{
    display: "flex",
    gap: 4,

    overflowX: "auto",
    overflowY: "visible",

    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
    touchAction: "pan-x",

    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },

    pb: 6,
    pt: 2,
    minHeight: 520,

  }}
>



            {projects.map((project, index) => (
              <motion.div
  key={project.title}
  style={{ overflow: "visible" }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: index * 0.15 }}
  viewport={{ once: false, amount: 0.4 }}
>

                <Box sx={metalProjectCard}>
                 <Box sx={{ position: "relative" }}>
  {/* DATA */}
  <Box
    sx={{
      position: "absolute",
      top: 12,
      left: 12,
      px: 1.4,
      py: 0.4,
      borderRadius: "10px",
      fontSize: 12,
      fontWeight: 500,
      color: "#fff",
      backdropFilter: "blur(6px)",
      background:
        "linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.25))",
      border: "1px solid rgba(255,255,255,0.25)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
      zIndex: 2,
    }}
  >
    {project.startedAt}
  </Box>

  {/* IMAGEM */}
  <Box
    sx={{
      height: 200,
      backgroundImage: `url(${project.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
</Box>


                  <Box sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#fff", mb: 1 }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.7)",
                        mb: 2,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                      {project.techs.map((tech) => (
                        <Box
                          key={tech}
                          sx={{
                            px: 1.2,
                            py: 0.4,
                            borderRadius: "10px",
                            fontSize: 12,
                            color: "#fff",
                            background:
                              "linear-gradient(135deg,#5e0985,#c61dcf,#350469)",
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <Button
                        size="small"
                        endIcon={<LaunchIcon />}
                        href={project.demo}
                        target="_blank"
                        sx={{ color: "#fff" }}
                      >
                        Demo
                      </Button>

                      <Button
                        size="small"
                        endIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{ color: "#fff" }}
                      >
                        GitHub
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

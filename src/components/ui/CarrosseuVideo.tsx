import { Box, Container, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import { motion } from "framer-motion";

/* =========================
   MOTION + MUI
========================= */

const MotionBox = motion(Box);

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface AudiovisualCarouselProps {
  title?: string;
  videos: string[];
}

/* =========================
   ESTILO DOS CARDS
========================= */

const videoCard = {
  width: { xs: 300, sm: 360, md: 420 },
  minWidth: { xs: 300, sm: 360, md: 420 },
  aspectRatio: "16 / 9",
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
};

/* =========================
   SETAS
========================= */

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
  },
};

/* =========================
   ANIMAÇÕES
========================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

/* =========================
   COMPONENTE
========================= */

export default function AudiovisualCarousel({
  title = "Produções Audiovisuais",
  videos,
}: AudiovisualCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -460 : 460,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* TÍTULO */}
        <MotionBox
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 3,
              background:
                "linear-gradient(90deg,#ec4899,#d946ef,#8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </Typography>
        </MotionBox>

        {/* CARROSSEL */}
        <Box sx={{ position: "relative" }}>
          {/* SETA ESQUERDA (DESKTOP) */}
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

          {/* SETA DIREITA (DESKTOP) */}
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

          {/* LISTA */}
          <MotionBox
            ref={carouselRef}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            sx={{
              display: "flex",
              gap: 4,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-x",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              pb: 6,
              pt: 2,
            }}
          >
            {videos.map((src, index) => (
              <MotionBox
                key={index}
                variants={cardFade}
                sx={{ scrollSnapAlign: "start" }}
              >
                <MotionBox
                  sx={videoCard}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <Box
                    component="iframe"
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{
                      width: "100%",
                      height: "100%",
                      border: 0,
                      pointerEvents: {
                        xs: "none", // swipe no mobile
                        md: "auto", // clique no desktop
                      },
                    }}
                  />
                  {/* OVERLAY MOBILE */}
<Box
  onClick={() => window.open(src, "_blank")}
  sx={{
    display: { xs: "flex", md: "none" },
    position: "absolute",
    inset: 0,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45))",
  }}
>
  <Box
    sx={{
      width: 64,
      height: 64,
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, #ec4848ff, #8f1414ff)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,.6)",
    }}
  >
    ▶
  </Box>
</Box>

                </MotionBox>
              </MotionBox>
            ))}
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}

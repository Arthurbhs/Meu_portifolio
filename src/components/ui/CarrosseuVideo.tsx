import { Box, Container, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import { motion } from "framer-motion";

interface AudiovisualCarouselProps {
  title?: string;
  videos: string[];
}


const videoCard = {
  width: 420,
  minWidth: 420,
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
  transition: "all .45s ease",
  scrollSnapAlign: "start",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `
      inset 0 1px 2px rgba(255,255,255,0.35),
      0 40px 90px rgba(56,189,248,0.45)
    `,
  },
};

/* =========================
   SETAS (REAPROVEITADAS)
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


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
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
    transition: { duration: 0.7, ease: "easeOut" },
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
    <Box
      sx={{
        py: { xs: 2, md: 0 },
        background:
          "transparent",
      }}
    >
      <Container maxWidth="lg">
      <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.4 }}
>
 <Typography
     variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 2,
          background:
            "linear-gradient(90deg,#ec4899,#d946ef,#8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
  >
    {title}
  </Typography>

    </motion.div> 

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
              overflowX: "hidden",
              overflowY: "visible",
              scrollSnapType: "x mandatory",
              pb: 6,
              pt: 2,
              minHeight: 340,
            }}
          >
           <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  style={{ display: "flex", gap: 32 }}
>
 {videos.map((src, index) => (

    <motion.div key={index} variants={cardFade}>
      <Box sx={videoCard}>
        <Box
          component="iframe"
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </Box>
    </motion.div>
  ))}
</motion.div>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}

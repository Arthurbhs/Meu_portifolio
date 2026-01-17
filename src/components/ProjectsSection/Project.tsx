import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AudiovisualCarousel from "../ui/CarrosseuVideo";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];


const artCard = {
  width: 320,
  minWidth: 320,
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


const arts = [

  {
    title: "wallpaper Oficial",
    image: "/Art.png",
  },
  {
    title: "Poster promocional",
    image: "/Poster.png",
  },
  {
    title: "arte 'irritator no mangue'",
    image: "/Irritator.png",
  },
  {
    title: "arte 'thalasodromeus em São Vicente'",
    image: "thala.png",
  },
   {
    title: "capa do Episódio 'O gigante quilombenses'",
    image: "ep1.png",
  },
   {
    title: "capa do Episódio 'Força e elegância'",
    image: "ep2.png",
  },
   {
    title: "capa do Episódio 'Dominío das águas'",
    image: "ep3.png",
  },
    {
    title: "capa do Episódio 'Protetoras'",
    image: "ep4.png",
  },
    {
    title: "capa do Episódio 'A lei do mais forte'",
    image: "ep5.png",
  },
];



export default function BaixadaPreHistoricaSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

const [selectedArt, setSelectedArt] = useState<{
  title: string;
  image: string;
} | null>(null);


  return (
    <Box
      sx={{
        pt: { xs: 2, md: 0 },
          pb: { xs: 4, md: 0 },
        background:
          "linear-gradient(180deg, rgba(10,4,22,1) 0%, rgba(6,2,16,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
              background:
                "linear-gradient(90deg,#ec4899,#d946ef,#8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Projeto Baixada Pré-histórica
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              mb: 6,
            }}
          >
            Edital Paulo Gustavo
          </Typography>
        </motion.div>

        {/* SUBTÍTULO DO CARROSSEL */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "#fff", mb: 4 }}
        >
          Artes
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* SETAS */}
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

    overflowX: "auto",        // 🔥 ESSENCIAL
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
    minHeight: 420,
  }}
>

            {arts.map((art, index) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                style={{ overflow: "visible" }}
              >
                <Box  sx={{ ...artCard, cursor: "pointer" }}
  onClick={() => setSelectedArt(art)}>
                  <Box
                  
                    sx={{
                      height: 220,
                      backgroundImage: `url(${art.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  
                  <Box sx={{ p: 2.5 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {art.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
        <AudiovisualCarousel
  title="Episódios"
  videos={[
    "https://www.youtube.com/embed/pdyxjX7Bpso?si",
   "https://www.youtube.com/embed/YUZGlGAbtJk",
    "https://www.youtube.com/embed/_tBOapTTi2o",
    "https://www.youtube.com/embed/pyjnyBS_FOM",
    "https://www.youtube.com/embed/rGrId6sLzO8"
    
  ]}
/>
      </Container>
      {/* =========================
    MODAL DE IMAGEM
========================= */}
{selectedArt && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 2000,
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    onClick={() => setSelectedArt(null)}
  >
    {/* BOTÃO FECHAR */}
    <Box
      onClick={() => setSelectedArt(null)}
      sx={{
        position: "absolute",
        top: 24,
        right: 24,
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
        border: "1px solid rgba(255,255,255,0.3)",
        cursor: "pointer",
        color: "#fff",
      }}
    >
      <CloseIcon />
    </Box>

    {/* CONTEÚDO */}
    <motion.div
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, ease: easeOutExpo }}
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: "92vw",
        maxHeight: "90vh",
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={selectedArt.image}
        alt={selectedArt.title}
        sx={{
          maxWidth: "100%",
          maxHeight: "80vh",
          objectFit: "contain",
          borderRadius: "16px",
          boxShadow: "0 40px 120px rgba(0,0,0,.9)",
        }}
      />

      <Typography
        sx={{
          mt: 2,
          color: "rgba(255,255,255,0.85)",
          fontWeight: 500,
        }}
      >
        {selectedArt.title}
      </Typography>

      
    </motion.div>
  </motion.div>
)}

    </Box>
  );
}

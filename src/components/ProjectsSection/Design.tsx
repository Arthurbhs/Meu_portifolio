import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ImageButtonAlbum from "../../components/ui/ImageButton";
import AudiovisualCarousel from "../ui/CarrosseuVideo";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};




const visualProjects = [
  {
    title: "Ilustração Digital",
    cover: "/arqueologo.jpg",
    images: [
      "/arqueologo.jpg",
      "/tigre.png",
      "/quimera.png",
      "/carnotauro.webp",
      "/dinossauro.webp",
    ],
  },
  {
    title: "Banner promocionais",
    cover: "/Cardapio.jpg",
    images: [
      "/acai1.jpg",
      "/acai2.jpg",
      "/pizza.jpg",
      "/hamburguer.jpg",
      "/cardapio.jpg",
      "/Cardapio.jpg",
      "/combo.jpg",
      "/sorvete.jpg",
    ],
  },
  {
    title: "Seguro veicular",
    cover: "/carro1.jpg",
    images: [
      "/carro3.mp4",
      "/carro2.jpg",
      "/carro1.jpg",
      "/carro4.jpg",
      "/carro5.jpg",
      "/carro6.jpg",
      "carro7.jpg"
    ],
  },
 
];


export default function VisualProjectsSection() {
  return (
    <Box
      id="design"
      sx={{
        py: { xs: 12, md: 16 },
        background:
          "linear-gradient(180deg, rgba(14,6,28,1) 0%, rgba(10,4,22,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
      {/* HEADER */}
<Box
  sx={{
    position: "relative",
    width: "100vw",          // 🔥 força largura total
    left: "50%",
    right: "50%",
    ml: "-50vw",
    mr: "-50vw",
    mb: 12,
 
overflowY: "visible",

  }}
>
  {/* TEXTO CONTIDO */}
  <Container maxWidth="lg">
    <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.4 }}
>
    <Box sx={{ maxWidth: 640 }}>
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
        Design
      </Typography>

      <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
        Projetos autorais e estudos visuais explorando narrativa,
        movimento e identidade gráfica.
      </Typography>
    </Box>
    </motion.div>
  </Container>

  {/* IMAGEM FULL BLEED */}
  <Box
    component="img"
    src="/animationImage.png"
    alt="Animação e Ilustração"
    sx={{
      display: { xs: "none", md: "block" },
      position: "absolute",
      top: "50%",
      right: 0,              // 🔥 agora é o canto REAL da tela
      transform: "translateY(-50%)",
      height: 560,           // pode aumentar sem medo
      maxWidth: "none",
      pointerEvents: "none",
      userSelect: "none",
      filter: "drop-shadow(0 40px 90px rgba(0,0,0,.8))",
    }}
  />
</Box>


        {/* GRID */}
        <Grid container spacing={4}>
          {visualProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={3} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ImageButtonAlbum
                  title={project.title}
                  cover={project.cover}
                  images={project.images}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

{/* =========================
    PRODUÇÕES AUDIOVISUAIS
========================= */}


<Box sx={{ mt: { xs: 14, md: 20 } }}>
  {/* TÍTULO */}
  <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
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
    Produções Audiovisuais
  </Typography>

  <Typography
    sx={{
      textAlign: "center",
      maxWidth: 680,
      mx: "auto",
      color: "rgba(255,255,255,0.75)",
      mb: 8,
    }}
  >
    Projetos em vídeo explorando narrativa, ritmo, identidade visual
    e motion design.
  </Typography>

  {/* 🎬 VÍDEO PRINCIPAL */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      mb: 12,
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: 960,
        aspectRatio: "16 / 9",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 40px 120px rgba(0,0,0,.8)",
      }}
    >
      <Box
        component="video"
        src="/video.mp4"
        controls
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  </Box>

<AudiovisualCarousel
  title="Animações (Hobbie)"
  videos={[
    "https://www.youtube.com/embed/rrb7nsfJBFk",
    "https://www.youtube.com/embed/I-PHC85y3Kc",
    "https://www.youtube.com/embed/wjprK4SOJx8",
  ]}
/>

 </motion.div>
</Box>



    </Box>
  );
}

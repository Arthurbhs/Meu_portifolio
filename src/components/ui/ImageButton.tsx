import { Box, Typography, Modal, Fade, Backdrop } from "@mui/material";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface ImageButtonAlbumProps {
  title: string;
  cover: string;
  images: string[];
}


const isVideo = (src: string) => {
  return /\.(mp4|webm|ogg)$/i.test(src);
};

const ImageButtonAlbum = ({
  title,
  cover,
  images = [],
}: ImageButtonAlbumProps) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

const media = images.slice(0, 8);


  return (
    <>
      {/* 🖼️ CARD */}
      <Box
        onClick={() => setOpen(true)}
        sx={{
          position: "relative",
          width: "100%",
          height: 360,
          borderRadius: 4,
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: "0 25px 60px rgba(0,0,0,.55)",
          "&:hover img": {
            transform: "scale(1.06)",
            filter: "brightness(.55)",
          },
          "&:hover .overlay": {
            opacity: 1,
          },
        }}
      >
        {/* IMAGEM DE CAPA */}
        <Box
          component="img"
          src={cover}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundColor: "#0b0c1a",
            transition: "all .8s ease",
          }}
        />

        {/* OVERLAY */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.25), rgba(0,0,0,.85))",
            opacity: 0,
            transition: "opacity .45s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
              textAlign: "center",
              px: 2,
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      {/* 🪟 MODAL GALERIA */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(10,10,20,.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 900,
                backgroundColor: "#0e0f20",
                borderRadius: 4,
                p: 4,
                position: "relative",
                boxShadow: "0 35px 80px rgba(0,0,0,.75)",
              }}
            >
              {/* ❌ FECHAR */}
              <Box
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 22,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,.25)",
                    transform: "rotate(90deg)",
                  },
                }}
              >
                ×
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: 700,
                  textAlign: "center",
                  mb: 4,
                }}
              >
                {title}
              </Typography>

              {/* GRID */}
           <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(2, 1fr)", // mobile
      sm: "repeat(3, 1fr)", // tablet
      md: "repeat(4, 1fr)", // desktop
    },
    gap: 3,
  }}
>
  {media.map((src, i) => (
    <Box
      key={i}
      onClick={() => setSelectedImage(src)}
      sx={{
          position: "relative", // ✅ ESSENCIAL
        aspectRatio: "1 / 1",
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#0b0c1a",
        cursor: "zoom-in",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,.4)",
      }}
    >
     {isVideo(src) ? (
  <>
    {/* 🎥 PREVIEW DO VÍDEO */}
    <Box
      component="video"
      src={src}
      muted
      loop
      playsInline
      sx={{
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        pointerEvents: "none",
      }}
    />

    {/* ▶️ INDICADOR DE VÍDEO */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 30px rgba(255,255,255,.15)",
          backdropFilter: "blur(4px)",
        }}
      >
        <PlayArrowIcon sx={{ color: "#fff", fontSize: 32 }} />
      </Box>
    </Box>
  </>
) : (
  <Box
    component="img"
    src={src}
    sx={{
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
      transition: "transform .3s ease",
      "&:hover": { transform: "scale(1.05)" },
    }}
  />
)}

    </Box>
  ))}
</Box>

            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* 🔍 MODAL IMAGEM AMPLIADA */}
      <Modal
  open={Boolean(selectedImage)}
  onClose={() => setSelectedImage(null)}
  closeAfterTransition
  slots={{ backdrop: Backdrop }}
  slotProps={{ backdrop: { timeout: 400 } }}
>
  <Fade in={Boolean(selectedImage)}>
    <Box
      onClick={() => setSelectedImage(null)}
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(5,5,15,.95)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Box onClick={(e) => e.stopPropagation()}>
        {selectedImage && isVideo(selectedImage) ? (
          <Box
            component="video"
            src={selectedImage}
            controls
            autoPlay
            sx={{
              maxWidth: "92vw",
              maxHeight: "88vh",
              borderRadius: 3,
              boxShadow: "0 40px 120px rgba(0,0,0,.8)",
            }}
          />
        ) : (
          <Box
            component="img"
            src={selectedImage ?? ""}
            sx={{
              maxWidth: "92vw",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: 3,
              boxShadow: "0 40px 120px rgba(0,0,0,.8)",
            }}
          />
        )}
      </Box>
    </Box>
  </Fade>
</Modal>


    </>
  );
};

export default ImageButtonAlbum;

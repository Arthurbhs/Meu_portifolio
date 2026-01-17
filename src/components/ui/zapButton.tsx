import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

interface ZapButtonProps {
  phone: string; // formato: 55DDXXXXXXXXX
  message?: string;
}

export default function ZapButton({
  phone,
  message = "Olá! Vim pelo seu portfólio 😊",
}: ZapButtonProps) {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 1500,
      }}
    >
      <Box
        component="a"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",

          background:
            "linear-gradient(135deg, #16a34a, #22c55e, #15803d)",
          border: "1px solid rgba(255,255,255,0.35)",
          backdropFilter: "blur(6px)",

          boxShadow: `
            inset 0 2px 3px rgba(255,255,255,0.35),
            inset 0 -3px 8px rgba(0,0,0,0.6),
            0 18px 45px rgba(34,197,94,.65),
            0 0 35px rgba(34,197,94,.55)
          `,

          color: "#fff",
          transition: "all .35s ease",

          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: `
              inset 0 2px 4px rgba(255,255,255,0.45),
              inset 0 -4px 10px rgba(0,0,0,0.7),
              0 25px 60px rgba(34,197,94,.8),
              0 0 55px rgba(34,197,94,.9)
            `,
          },

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "linear-gradient(120deg, transparent 35%, rgba(255,255,255,.35), transparent 65%)",
            opacity: 0.4,
            pointerEvents: "none",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 34 }} />
      </Box>
    </motion.div>
  );
}

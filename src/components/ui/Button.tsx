import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-gradient-to-r from-pink-500 to-purple-600",
    secondary: "bg-gradient-to-r from-purple-500 to-indigo-600",
    outline: "border border-purple-400 text-purple-200",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={`px-8 py-4 rounded-2xl shadow-lg ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );
}

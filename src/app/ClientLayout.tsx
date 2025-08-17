"use client"
import { usePathname } from "next/navigation";
import { AnimatePresence , motion} from "framer-motion";

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
   <AnimatePresence mode="wait" initial={false}>
    <motion.div
    key={pathname}
    initial={{y:"100vh", opacity:0}}
    animate={{y:0, opacity:1}}
    // exit={{y:'-100vh', opacity:0}}
    transition={{
        type:"tween",
        ease:"easeInOut",
        duration:0.5
    }}
    style={{
        width:'100%',
        minHeight:'100%',
        // backgroundColor: pathname?'':"#212121ff"
    }}
    >
        {children}
    </motion.div>
   </AnimatePresence>
  );
}
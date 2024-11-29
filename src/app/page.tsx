'use client'
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 20 }}

    className="bg-lime-200 w-full h-screen flex justify-center items-center font-serif mt-16 ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl text-center hover:animate-pulse border-8 border-lime-600 border-double">
        <h2 className="text-2xl font-bold underline mb-4">Assignment Details</h2>
        <ol className="text-left">
          <li className="font-bold mb-2">1. Responsive Menu Bar:</li>
          <p>Create a responsive menu bar for your application.</p>
          <p>The menu should display as a regular horizontal navigation bar on large devices (e.g., desktops).</p>
          <p>On smaller devices (e.g., mobile phones), the menu should transform into a "burger menu" that users can click to expand.</p>
          <br />
          <li className="font-bold mb-2">2. Medium Devices Layout Extension:</li>
          <p>Extend the provided code, which is already responsive for small and large devices.</p>
          <p>Add styling to handle the medium breakpoint (e.g., tablets).</p>
          <p>
            On medium devices:
            <br />
            The first div should stretch to take the full width of the row.
            <br />
            The remaining two divs should move to the second row, each occupying half of the screen.
          </p>
        </ol>
      </div>
    </motion.div>
  );
}

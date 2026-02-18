import { motion } from 'framer-motion';


import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaGlobe,
  FaLocationDot,
  FaEnvelope,
  FaYoutube
} from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const socialLinks = [
  { id: 1, label: 'Google Reviews', icon: <FcGoogle size={24} />, url: 'https://g.page/r/Cal4OsPBn5PIEAE/review', color: 'text-white' },
  { id: 2, label: 'Instagram', icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/azuraresorts_wynd', color: 'text-[#E1306C]' },
  { id: 3, label: 'Facebook', icon: <FaFacebookF size={22} />, url: 'https://www.facebook.com/share/17zdxPd3Qs/', color: 'text-[#1877F2]' },
  { id: 4, label: 'WhatsApp Booking', icon: <FaWhatsapp size={24} />, url: 'https://wa.me/918606008826', color: 'text-[#25D366]' },
  { id: 5, label: 'Official Website', icon: <FaGlobe size={22} />, url: 'http://www.azuraresorts.in', color: 'text-blue-400' },
  { id: 6, label: 'Get Directions', icon: <FaLocationDot size={22} />, url: 'https://maps.google.com?q=Azura%20The%20Water%20View%20Resort%20Wayanad,%20Puttad%20Road,%20Meppadi,%20Kerala&ftid=0x3ba60f001b268f6f:0xc8939fc1c33a78a9&entry=gps&shh=CAE&lucs=,94259551,94297699,94284472,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic', color: 'text-red-500' },
  { id: 7, label: 'Call Us', icon: <FaEnvelope size={22} />, url: 'tel:+918943132890', color: 'text-yellow-400' },
];

const footerIcons = [
  { id: 'youtube', icon: <FaWhatsapp size={24} />, url: 'https://wa.me/919072190088' },
  { id: 'youtube', icon: <FaYoutube size={24} />, url: 'https://youtube.com/@azurawayanad' },
  { id: 'instagram', icon: <FaInstagram size={22} />, url: 'https://www.instagram.com/azuraresorts_wynd' },
];

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white font-sans selection:bg-[#7a6af6]">

      <div className="fixed inset-0 -z-10">
        <img
          src="../../public/bg2.gif"
          alt="Nature Background"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 py-12 mx-auto max-w-300 w-full min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-10 text-center"
        >
          <div className="w-24 h-24 mb-4 rounded-full border-2 border-white/20 shadow-2xl overflow-hidden">
            <img
              src="../../public/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">Azura - The Water View Resort</h1>
          <p className="text-white/80 text-sm mt-1 font-medium max-w-md">Experience tranquility at our premium lakefront escape in Wayanad. Modern A-frame architecture meets breathtaking 180° water views.</p>
        </motion.div>

        {/* Links Grid */}
        <div className="w-full max-w-md space-y-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center relative w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full transition-all duration-300 group shadow-lg"
            >
              <span className={`absolute left-6 transition-transform group-hover:scale-110 ${link.color}`}>
                {link.icon}
              </span>
              <span className="font-semibold text-white tracking-wide">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-auto pt-10 flex gap-8 opacity-70 hover:opacity-100 transition-opacity"
        >
          {footerIcons.map((icon) => (
            <a key={icon.id} href={icon.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#7a6af6] transition-colors">
              {icon.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
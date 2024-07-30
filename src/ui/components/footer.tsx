
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6">
          <a href="/" className="text-gray-400 hover:text-white">Home</a>
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </div>
        <p className="mt-4 text-gray-400">&copy; {new Date().getFullYear()} TikTok Video Downloader. All rights reserved.</p>
      </div>
    </footer>
  );
}
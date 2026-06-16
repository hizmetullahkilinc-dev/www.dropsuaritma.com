import { Clock, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#1e3a8a] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            09:00 - 19:00
          </span>
        </div>
        <a
          href="tel:+905001234567"
          className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
        >
          <Phone size={14} />
          +90 500 123 45 67
        </a>
      </div>
    </div>
  );
}

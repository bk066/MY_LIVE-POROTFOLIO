import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { ShieldCheck, MapPin } from 'lucide-react';

interface Contribution {
  id: number;
  position: [number, number];
  title: string;
  category: string;
  description: string;
  image: string;
}

const contributions: Contribution[] = [
  {
    id: 1,
    position: [28.6139, 77.2090],
    title: "New Delhi Operations",
    category: "Hospitality Audit",
    description: "Evaluated high-traffic logistical throughput in premium commercial hubs.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    position: [19.0760, 72.8777],
    title: "Mumbai Marine Hub",
    category: "Infrastructure Analysis",
    description: "Documentation of architectural integrity and public flow dynamics.",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    position: [25.2048, 55.2708],
    title: "Dubai Design District",
    category: "Luxury Audit",
    description: "Global benchmarking of service excellence and aesthetic cohesion.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    position: [1.3521, 103.8198],
    title: "Singapore Urban Flow",
    category: "Efficiency Audit",
    description: "Mapping seamless commercial integration in ultra-dense urban environments.",
    image: "https://images.unsplash.com/photo-1525625230556-8e8d8de03960?auto=format&fit=crop&q=80&w=400"
  }
];

export function ContributionMap() {
  return (
    <div className="w-full h-full min-h-[400px] relative rounded-[3rem] overflow-hidden depth-shadow border border-white/20">
      <MapContainer
        center={[20, 70]}
        zoom={3}
        scrollWheelZoom={false}
        aria-label="Interactive map showing locations of global contributions"
        className="w-full h-full z-0 grayscale-[0.8] hover:grayscale-0 transition-all duration-700"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {contributions.map((point) => (
          <Marker key={point.id} position={point.position}>
            <Popup className="custom-popup" aria-label={`Contribution details for ${point.title}`}>
              <div className="w-64 p-2 bg-white rounded-2xl">
                <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                  <img 
                    src={point.image} 
                    alt={point.title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-slate-900/80 backdrop-blur-md rounded-lg">
                    <span className="text-[8px] font-black uppercase tracking-widest text-white">{point.category}</span>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-brand-accent" />
                  {point.title}
                </h4>
                <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                  {point.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                   <div className="flex items-center gap-1 text-[8px] font-mono text-slate-400">
                     <MapPin size={10} />
                     {point.position[0].toFixed(2)}, {point.position[1].toFixed(2)}
                   </div>
                   <span className="text-[8px] font-black uppercase tracking-tighter text-slate-900">Verified Contribution</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map UI Overlays */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="glass-morphism p-4 rounded-2xl backdrop-blur-xl border-white/20">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Live Telemetry // Contributions Hub</span>
          </div>
        </div>
      </div>
    </div>
  );
}

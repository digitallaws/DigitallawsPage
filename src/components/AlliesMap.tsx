import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

type AllyLocation = {
  name: string;
  position: { lat: number; lng: number };
};

const allies: AllyLocation[] = [
  { name: "Cartagena", position: { lat: 10.391, lng: -75.4794 } },
  { name: "Bogotá", position: { lat: 4.711, lng: -74.0721 } },
  { name: "Bucaramanga", position: { lat: 7.1254, lng: -73.1198 } },
  { name: "Barranquilla", position: { lat: 10.9685, lng: -74.7813 } },
  { name: "Montería", position: { lat: 8.7489, lng: -75.8814 } },
  { name: "Huila (Neiva)", position: { lat: 2.9386, lng: -75.2673 } },
  { name: "Tolima (Ibagué)", position: { lat: 4.4447, lng: -75.2424 } },
  { name: "Villavicencio", position: { lat: 4.1513, lng: -73.637 } },
];

export default function AlliesMap() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
  const center = { lat: 4.5709, lng: -74.2973 }; // Centro aproximado de Colombia

  return (
    <section id="alliances" className="mt-10">
      <h2 className="text-center text-2xl font-bold text-navy">Mapa de Aliados</h2>
      <p className="mt-2 text-center text-steel">
        Ubicaciones de nuestros aliados en Colombia.
      </p>

      <div className="mt-6 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-md p-4 shadow">
        {!apiKey ? (
          <div className="flex h-[420px] items-center justify-center text-graphite">
            Configura `VITE_GOOGLE_MAPS_API_KEY` para visualizar el mapa.
          </div>
        ) : (
          <APIProvider apiKey={apiKey}>
            <div className="h-[420px] w-full overflow-hidden rounded-xl">
              <Map defaultCenter={center} defaultZoom={6} gestureHandling="greedy">
                {allies.map((ally) => (
                  <AdvancedMarker key={ally.name} position={ally.position} />
                ))}
              </Map>
            </div>
          </APIProvider>
        )}
      </div>
    </section>
  );
}


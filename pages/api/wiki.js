export default function handler(req, res) {
  const data = {
    marine: [
      {
        name: "Almirante Aokiji",
        rank: "Almirante",
        bio: "Usuario del hielo, calmado pero letal.",
        styles: ["Haki Observación", "Hielo", "Estratega"],
        power: "S-Tier"
      },
      {
        name: "Vicealmirante Smoker",
        rank: "Vicealmirante",
        bio: "Cabrón persistente que usa humo en combate.",
        styles: ["Humo", "Combate cuerpo a cuerpo"],
        power: "A-Tier"
      }
    ],
    yonkou: [
      {
        name: "Shanks",
        bio: "Espadachín legendario con Haki del Rey.",
        crew: ["Benn Beckman", "Lucky Roo", "Yasopp"],
        styles: ["Haki del Rey", "Espada"],
        power: "S-Tier"
      },
      {
        name: "Barbablanca",
        bio: "El hombre más fuerte del mundo.",
        crew: ["Marco", "Jozu", "Vista"],
        styles: ["Gura Gura", "Fuerza bruta"],
        power: "S+ Tier"
      }
    ],
    others: [
      { name: "Gobierno Mundial", desc: "Organización política suprema." },
      { name: "Revolucionarios", desc: "Facción que busca derrocar al Gobierno." }
    ]
  };

  res.status(200).json(data);
}

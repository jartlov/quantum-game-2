export const jsonGroups: { [symbol: string]: string[] } = {
	Basic: ["void", "wall", "gate"],
	Emitter: ["laser"],
	Direction: ["mirror", "beamsplitter", "coatedsplitter", "polarsplitter"],
	Absorption: ["detector", "mine", "rock", "omnidetector", "filter"],
	Polarization: ["absorb-polarizer", "waveplate", "sugar", "faraday"],
	Phase: ["phaseinc", "phasedec"]
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const jsonElements = [
	{
		name: "laser",
		namev1: "Source",
		group: "Emitter",
		description: "An on-demand single photon source.",
		link: "./elements/laser",
		active: true,
		absorption: 0,
		phase: 0,
		matrix: [],
		id: 0,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["⮝", "⮞", "⮟", "⮜"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
	},
	{
		name: "rock",
		namev1: "Rock",
		group: "Absorption",
		description: "Dark and immersive as your sweetheart's depth of eyes. Absorbs light. And is sensitive.",
		link: "./elements/rock",
		active: false,
		absorption: 1,
		phase: 0,
		matrix: [],
		id: 1,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["♜"],
		tiles: [[0, 0]]
	},
	{
		name: "absorb-polarizer",
		namev1: "absorb-polarizer",
		group: "Polarization",
		description:
			"A polarization filter WE...Anisotropic polymer strands capture electric oscillations parallel to them. Used in photography.",
		link: "./elements/polarizerSE",
		active: false,
		absorption: 0,
		phase: 0,
		matrix: [],
		id: 2,
		foregroundColor: "white",
		backgroundColor: "#2e006a",
		ascii: ["🡡", "🡥", "🡢", "🡦", "🡣", "🡧", "🡠", "🡤"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
	},
	{
		name: "waveplate",
		namev1: "waveplate",
		group: "Polarization",
		description:
			"It delays one polarization (with darker lines) by λ/4. When applied correctly, it can change linear polarization into circular, and vice versa.",
		link: "./elements/waveplate",
		active: false,
		absorption: 0,
		phase: 0,
		matrix: [],
		id: 3,
		foregroundColor: "white",
		backgroundColor: "#2e006a",
		ascii: ["🡩", "🡭", "🡪", "🡮", "🡫", "🡯", "🡨", "🡬"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
	},
	{
		name: "detector",
		namev1: "Detector",
		group: "Absorption",
		description:
			"Detects and amplifies electric signal from each single photon, from a single direction. Your goal is to get photon there!",
		link: "./elements/detector",
		active: false,
		absorption: 1,
		phase: 0,
		matrix: [],
		id: 4,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["⭱", "⭲", "⭳", "⭰"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
	},
	{
		name: "omnidetector",
		namev1: "OmniDetector?",
		group: "Absorption",
		description:
			"Detects and amplifies electric signal from each single photon, from all directions. Typically, it is the goal to get the photon here.",
		link: "./elements/omnidetector",
		active: false,
		absorption: 1,
		phase: 0,
		matrix: [],
		id: 7,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["O"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
	},
	{
		name: "sugar",
		namev1: "Sugar",
		group: "Polarization",
		description:
			"Table sugar is a chiral molecule – it does not look the same as its mirror reflection. We put it in an amount, so it rotates polarization by 45°.",
		link: "./elements/sugar",
		active: false,
		absorption: 0,
		phase: 0,
		matrix: [],
		id: 8,
		foregroundColor: "white",
		backgroundColor: "#2e006a",
		ascii: ["S"],
		tiles: [[0, 20]]
	},
	{
		name: "coatedsplitter",
		namev1: "Void",
		group: "Direction",
		description:
			"A thin slab of glass with a reflective layer - reflecting half the beam and transmitting the other half of it.",
		link: "./elements/coatedsplitter",
		active: false,
		absorption: 0,
		phase: 0,
		matrix: [],
		id: 9,
		foregroundColor: "white",
		backgroundColor: "#2e006a",
		ascii: ["⇑", "⇗", "⇒", "⇘", "⇓", "⇙", "⇐", "⇖"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
	},
	{
		name: "mine",
		namev1: "Mine",
		group: "Absorption",
		description:
			"Once it absorbs a single photon, it sets off. Old french submarine captains can sometimes disarm them.",
		link: "./elements/mine",
		active: false,
		absorption: 1,
		phase: 0,
		matrix: [],
		id: 11,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["!"],
		tiles: [[0, 0]]
	},
	{
		name: "polarsplitter",
		namev1: "polarsplitter",
		group: "Direction",
		description: "Reflects vertical polarization (↕), transmitts horizonal polarization (↔).",
		link: "./elements/polarsplitter",
		active: false,
		absorption: 0,
		phase: 0,
		matrix: [],
		id: 12,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["⬲", "⟴"],
		tiles: [[0, 0], [0, 0]]
	},
	{
		name: "void",
		namev1: "Void",
		group: "Basic",
		description: "The void...",
		link: "./elements/void",
		active: false,
		absorption: 0,
		phase: 0,
		matrix: [],
		id: 19,
		foregroundColor: "white",
		backgroundColor: "#2e006a",
		ascii: [" "],
		tiles: [[0, 20]]
	},
	{
		name: "mirror",
		namev1: "ThinMirror",
		group: "Direction",
		description: "Metallic or dielectric mirror.",
		link: "./elements/mirror",
		active: false,
		absorption: 0,
		phase: 0,
		matrix: [],
		id: 14,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["|", "/", "-", "\\", "|", "/", "-", "\\"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
	},
	{
		name: "wall",
		namev1: "Wall",
		group: "Basic",
		description: "A standard wall.",
		link: "./elements/wall",
		active: false,
		absorption: 1,
		phase: 0,
		matrix: [],
		id: 20,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["▓"],
		tiles: [[0, 0], [0, 0]]
	},
	{
		name: "gate",
		namev1: "Gate",
		group: "Basic",
		description: "A controlled gate.",
		link: "./elements/gate",
		active: false,
		absorption: 1,
		phase: 0,
		matrix: [],
		id: 21,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["W", "M"],
		tiles: [[0, 0], [0, 0]]
	},
	{
		name: "beamsplitter",
		namev1: "ThinSplitter",
		group: "Direction",
		description: "A thin slab of glass reflecting half the beam, and transmitting other half of it.",
		link: "./elements/beamsplitter",
		active: false,
		absorption: 0,
		phase: 0,
		id: 15,
		matrix: [],
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
	},
	{
		name: "phasedec",
		namev1: "Glass",
		group: "Phase",
		description:
			"Higher refractive index makes light slower. We set its thickness so it retards the phase by λ/4. Useful for changing interference.",
		link: "./elements/phasedec",
		active: false,
		absorption: 0,
		phase: -0.25,
		matrix: [],
		id: 16,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["↜"],
		tiles: [[0, 0]]
	},
	{
		name: "filter",
		namev1: "Absorber",
		group: "Absorption",
		description: "Filter with 50% absorption probability.",
		link: "./elements/absorber",
		active: false,
		absorption: 0.5,
		phase: 0,
		matrix: [],
		id: 18,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["░"],
		tiles: [[0, 0]]
	},
	{
		name: "phaseinc",
		namev1: "VacuumJar",
		group: "Phase",
		description:
			"Even air retards light a bit. We set the thickness of vacuum so it advances the phase by λ/4. Useful for changing interference.",
		link: "./elements/phaseinc",
		active: false,
		absorption: 0,
		phase: 0.25,
		matrix: [],
		id: 17,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["↝"],
		tiles: [[0, 0]]
	},
	{
		name: "faraday",
		namev1: "Faraday",
		group: "Polarization",
		description:
			"Rotates polarization with magnetic field by 45°. Has different symmetries than Sugar Solution. A building block for optical diodes.",
		link: "./elements/phasedec",
		active: false,
		absorption: 0,
		phase: -0.25,
		matrix: [],
		id: 30,
		foregroundColor: "white",
		backgroundColor: "black",
		ascii: ["🠵", "🠶", "🠷", "🠴"],
		tiles: [[0, 0], [0, 0], [0, 0], [0, 0]]
	}
];
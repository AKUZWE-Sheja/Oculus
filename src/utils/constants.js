export const cooperatives = {
    karenge: {
        name: 'URUNGANO KARENGE Cooperative',
        location: 'Karenge, Rwamagana',
        contact: '+250785466305',
        description: 'URUNGANO KARENGE is a collective of skilled basket weavers from Karenge in Rwamagana District. The cooperative is known for its vibrant patterns, rooted in traditional Rwandan symbolism yet adapted to contemporary design. Each piece reflects the artisans’ dedication to cultural heritage and sustainable craftsmanship.',
    },
    cotemuki: {
        name: 'COTEMUKI Cooperative',
        location: 'Kigali-Kayonza Road',
        contact: '+250783206694',
        description: 'Based along the Kigali-Kayonza Road, COTEMUKI Cooperative brings together artisans who specialize in intricate woven baskets with modern flair. Their work blends innovation with time-honored weaving techniques, enabling the cooperative to reach broader markets while preserving Rwanda’s craft traditions.',
    },
};

export const crafts = Object.entries(import.meta.glob('../assets/crafts/*.{jpg,jpeg}', { eager: true }))
    .map(([path, module]) => ({
        src: module.default,
        prefix: path.split('/').pop().split('-')[0],
        filename: path.split('/').pop(),
    }));

    
export const artisans = Object.entries(import.meta.glob('../assets/artisans/*.{jpg,jpeg}', { eager: true }))
    .map(([path, module]) => ({
        src: module.default,
        prefix: path.split('/').pop().split('-')[0],
        filename: path.split('/').pop(),
    }));
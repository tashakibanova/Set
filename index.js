export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
            throw new Error('Дублирования происходить не должно');
        }
        this.members.add(character);
    }
    addAll(...characters) {
        characters.forEach(character => {
            if (!this.members.has(character)) {
                this.members.add(character);
            }
        });
    }
    toArray() {
        return [...this.members];
    }
}

export class Character {
    constructor(name) {
        this.name = name
    }
}
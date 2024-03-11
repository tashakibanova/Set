import { Team } from './index.js';
import { Character } from './index.js';

describe('Класс Team', () => {
    let team;

    beforeEach(() => {
        team = new Team();
    });

    describe('Метод add', () => {
        it('Добавляет нового персонажа в команду', () => {
            const character = new Character('Персонаж 1');
            team.add(character);
            expect(team.members.has(character)).toBe(true);
        });

        it('Не позволяет добавить дублирующегося персонажа', () => {
            const character = new Character('Персонаж 1');
            team.add(character);
            expect(() => team.add(character)).toThrowError('Дублирования происходить не должно');
        });
    });

    describe('Метод addAll', () => {
        it('Добавляет несколько персонажей в команду', () => {
            const characters = [
                new Character('Персонаж 2'),
                new Character('Персонаж 3'),
            ];
            team.addAll(...characters);
            expect(team.members.size).toBe(characters.length);
        });

        it('Не позволяет добавить дублирующихся персонажей', () => {
            const characters = [
                new Character('Персонаж 1'),
                new Character('Персонаж 2'),
                new Character('Персонаж 2'),
            ];
            team.addAll(...characters);
            expect(team.members.size).toBe(3);
        });
    });

    describe('Метод toArray', () => {
        it('Конвертирует Set в массив', () => {
            const characters = [
                new Character('Персонаж 1'),
                new Character('Персонаж 2'),
                new Character('Персонаж 3'),
            ];
            team.addAll(...characters);
            const array = team.toArray();
            expect(array).toEqual(characters);
        });
    });
});

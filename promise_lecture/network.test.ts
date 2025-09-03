import axios from "axios";
import { getPokemon } from "./network";


describe("getPokemon", () => {
    let getMock;

    beforeEach(() => {
        getMock = jest.spyOn(axios, 'get')
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Successfully returns a pokemon", async () => {
        getMock.mockResolvedValue({
            data: 'hello'
        });
        const actual = await getPokemon(1);
        expect(actual).toEqual('hello');
    });

    it('Fails gracefully', async () => {
        getMock.mockImplementation(() => {
            throw new Error('Oh no');
        });
        const actual = await getPokemon(1);
        expect(actual).toEqual('Call failed');


    })
});
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en el helper GetGifs()', () => {

    test('should return an array of gifs', async() => {

        const expectedObject = {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        }

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual(expectedObject)
    })
})
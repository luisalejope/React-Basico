import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components"

describe('Tests on <GifGidItem />', () => {
    // 1. Inicializar
    const title = 'Titulo de un gif'
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=5a057a20fpp96z4mez6lqnh2014rf965nl0ex79ivce4m420&ep=v1_gifs_search&rid=giphy.gif&ct=g'

    test('should match with the snapshot', () => {

        // 2. Etimulo
        const {container} = render(<GifGridItem title={title} url={url} />)

        //3. Observar el comportamiento
        expect(container).toMatchSnapshot()
    })


    test('should show the image wwith the URL and the ALT sended', () => {
        // 2. Estimulo
        render(<GifGridItem title={title} url={url} />)
        const {src, alt} = screen.getByRole('img')
        // 3. Observar el comportamiento
        expect(alt).toBe(title)
        expect(src).toBe(url);
    })

    test('should show the title with the info sended', () => {
        // 2. Estimulo
        render(<GifGridItem title={title} url={url} />)
        const titleRendered = screen.getByRole('heading', {level: 2}).innerHTML
        // 3. Observar el comportamiento
        expect(titleRendered).toBe(title)
    })

})
import 'reflect-metadata'
import Application from './Application'

/**
 * Pure javascript - Not JSX
 */
const rootElement: HTMLElement = document.getElementById('root') as HTMLElement
const app = new Application(rootElement)
app.render()

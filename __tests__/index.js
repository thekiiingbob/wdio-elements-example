const webdriverio = require('webdriverio')

let browser

beforeAll(async () => {
  jest.setTimeout(15000)

  const options = {
    logLevel: 'error',
    sync: false,
    desiredCapabilities: {browserName: 'chrome'},
  }

  browser = webdriverio.remote(options)

  await browser.init()

  await browser.url(
    'file:///Users/bob/work/tuts/ct-wdio-27085/html/testPage.html',
  )
})

afterAll(async () => {
  await browser.end()
})

test('playing with multiple elements', async () => {
  const contactElements = await browser.$$('div.contact')

  const dataPromises = contactElements.map(el => {
    const getText = async (el, selector) => {
      const myEl = await browser.elementIdElement(el.ELEMENT, selector)
      const {value: text} = await browser.elementIdText(myEl.value.ELEMENT)
      return text
    }
    const getData = async el => {
      const [name, phone] = await Promise.all([
        getText(el, 'div.contact-name'),
        getText(el, 'div.contact-phone'),
      ])

      return {
        name,
        phone,
      }
    }

    return getData(el)
  })

  const myContacts = await Promise.all(dataPromises)

  expect(myContacts[2]).toEqual({name: 'Jack Sparrow', phone: '333-333-3333'})
})

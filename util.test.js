const { generateText } = require('./util')

test('output title and price', () => {
    const text = generateText('Book', 29)
    expect(text).toBe('Book 29')
})
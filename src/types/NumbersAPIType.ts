interface NumbersAPIType {
    types: 'trivia' | 'math' | 'date' | 'year',
    number: number | 'random',
    response: string,
    date: `${number}/${number}`
}

export default NumbersAPIType
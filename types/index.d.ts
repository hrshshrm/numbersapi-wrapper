declare module 'wrapper-numbersapi'

export class NumbersAPIOptions {
    /** The protocol to be used
     * @default 'http'
     */
    protocol?: 'http';
    /** The hostname of the NumbersAPI instance
     * @default '://numbersapi.com'
     */
    hostName?: string;
    /** The json boolean of the NumbersAPI instance
     * @default false
     */
    json?: boolean;
    /** The json boolean of the NumbersAPI instance
     * @default 'default'
     */
    notFound?: 'default' | 'ceil' | 'floor';
    constructor(config?: NumbersAPIOptions);
}

export interface NumbersAPIType {
    types: 'trivia' | 'math' | 'date' | 'year';
    number: number | 'random';
    response: string;
    date: `${number}/${number}`;
}

export default class NumbersAPI {
    constructor(options?: NumbersAPIOptions);
    getConfig(): NumbersAPIOptions;
    getNumberTrivia(num: NumbersAPIType["number"], callback?: (result: any, error?: any) => any): Promise<any>;
    getMathTrivia(num: NumbersAPIType["number"], callback?: (result: any, error?: any) => any): Promise<any>;
    getYearTrivia(num: NumbersAPIType["number"], callback?: (result: any, error?: any) => any): Promise<any>;
    getDateTrivia(num: NumbersAPIType["date"] | 'random', callback?: (result: any, error?: any) => any): Promise<any>;
}
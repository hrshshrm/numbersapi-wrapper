/* 
Numbers API Wrapper Library - http://numbersapi.com/
*/

import moment from 'moment'

import NumbersAPIOptions from './types/NumbersAPIOptions.js'
import NumbersAPIType from './types/NumbersAPIType.js'
import handleError from './utils/ErrorHandler.js'
import getResponse from './utils/Getter.js'

class NumbersAPI {
    options: NumbersAPIOptions

    constructor(options?: NumbersAPIOptions) {
        this.options = new NumbersAPIOptions(options)
    }

    getConfig() {
        return this.options
    }

    async getResource(
        endpoint: string,
        callback?: (result: any, error?: any) => any
    ): Promise<any> {
        try {
            if (!endpoint) {
                throw new Error(
                    'Param "endpoint" is required needs to be a string'
                )
            }

            if (typeof endpoint === 'string') {
                return getResponse<any>(this.options, endpoint, callback)
            } else {
                throw new Error(
                    'Param "endpoint" needs to be a string or array of strings'
                )
            }
        } catch (error) {
            handleError(error, callback)
        }
    }

    async getTrivia(
        num: NumbersAPIType["number"],
        type: NumbersAPIType["types"],
        callback?: (
            result: any,
            error?: any
        ) => any
    ): Promise<any> {
        try {
            if (num) {
                // If the user has submitted a Number or an 'random', return the JSON promise
                if (
                    typeof num === 'number' ||
                    num === 'random'
                ) {
                    return getResponse<any>(
                        this.options,
                        `${this.options.protocol}${this.options.hostName}/${num}/${type}${this.options.json ? '?json' : ''}`,
                        callback
                    )
                } else {
                    throw new Error(
                        'Param "num" is required (Must be a number or the string "random")'
                    )
                }
            } else {
                throw new Error(
                    'Param "num" is required (Must be a number or the string "random")'
                )
            }
        } catch (error) {
            handleError(error, callback)
        }
    }

    async getNumberTrivia(
        num: NumbersAPIType["number"],
        callback?: (
            result: any,
            error?: any
        ) => any
    ): Promise<any> {
        try {
            if (num) {
                // If the user has submitted a Number or an 'random', return the JSON promise
                if (
                    typeof num === 'number' ||
                    num === 'random'
                ) {
                    return getResponse<any>(
                        this.options,
                        `${this.options.protocol}${this.options.hostName}/${num}/trivia${this.options.json ? '?json' : ''}`,
                        callback
                    )
                } else {
                    throw new Error(
                        'Param "num" is required (Must be a number or the string "random")'
                    )
                }
            } else {
                throw new Error(
                    'Param "num" is required (Must be a number or the string "random")'
                )
            }
        } catch (error) {
            handleError(error, callback)
        }
    }

    async getMathTrivia(
        num: NumbersAPIType["number"],
        callback?: (
            result: any,
            error?: any
        ) => any
    ): Promise<any> {
        try {
            if (num) {
                // If the user has submitted a Number or an 'random', return the JSON promise
                if (
                    typeof num === 'number' ||
                    num === 'random'
                ) {
                    return getResponse<any>(
                        this.options,
                        `${this.options.protocol}${this.options.hostName}/${num}/math${this.options.json ? '?json' : ''}`,
                        callback
                    )
                } else {
                    throw new Error(
                        'Param "num" is required (Must be a number or the string "random")'
                    )
                }
            } else {
                throw new Error(
                    'Param "num" is required (Must be a number or the string "random")'
                )
            }
        } catch (error) {
            handleError(error, callback)
        }
    }

    async getYearTrivia(
        num: NumbersAPIType["number"],
        callback?: (
            result: any,
            error?: any
        ) => any
    ): Promise<any> {
        try {
            if (num) {
                // If the user has submitted a Number or an 'random', return the JSON promise
                if (
                    typeof num === 'number' ||
                    num === 'random'
                ) {
                    return getResponse<any>(
                        this.options,
                        `${this.options.protocol}${this.options.hostName}/${num}/year${this.options.json ? '?json' : ''}`,
                        callback
                    )
                } else {
                    throw new Error(
                        'Param "num" is required (Must be a number or the string "random")'
                    )
                }
            } else {
                throw new Error(
                    'Param "num" is required (Must be a number or the string "random")'
                )
            }
        } catch (error) {
            handleError(error, callback)
        }
    }

    async getDateTrivia(
        num: NumbersAPIType["date"] | 'random',
        callback?: (
            result: any,
            error?: any
        ) => any
    ): Promise<any> {
        try {
            if (num) {
                const checkDate = moment(num, 'MM/DD',true).isValid()
                // If the user has submitted a Number or an 'random', return the JSON promise
                if (
                    checkDate ||
                    num === 'random'
                ) {
                    return getResponse<any>(
                        this.options,
                        `${this.options.protocol}${this.options.hostName}/${num}/date${this.options.json ? '?json' : ''}`,
                        callback
                    )
                } else {
                    throw new Error(
                        'Param "num" is required (Must be a of format "DD/MM" or the string "random")'
                    )
                }
            } else {
                throw new Error(
                    'Param "num" is required (Must be a of format "DD/MM" or the string "random")'
                )
            }
        } catch (error) {
            handleError(error, callback)
        }
    }
}

export default NumbersAPI
import axios, { AxiosResponse } from "axios"
import NumbersAPIOptions from "../types/NumbersAPIOptions.js"
import handleError from "./ErrorHandler.js"

// getter function
async function getResponse<T>(
    values: NumbersAPIOptions,
    url: string,
    callback?: (result: any, error?: any) => any
): Promise<any> {
    const options = {
        baseURL: `${values.protocol}${values.hostName}/`,
    }
    try {
        if(values.cacheEnabled && values.cache) {
            const cachedResult = values.cache.get(url);

            if (cachedResult) {
                if (callback) {
                    callback(cachedResult);
                }
                return cachedResult;
            }
        }

        const response: AxiosResponse<T, any> = await axios.get<T>(url, options)

        if (response.status !== 200) {
            handleError(response, callback)
        } else {
            // If everything was good
            // cache the object in memory-cache
            // only if cacheLimit > 0
            const responseData = response.data

            if (values.cache && values.cacheDuration) { 
                values.cache.set<T>(url, responseData, values.cacheDuration);
            }

            // If a callback is present
            if (callback) {
                // Call it, without errors
                callback(responseData)
            } else {
                return responseData
            }
        }
    } catch (error) {
        handleError(error, callback)
    }
}

export default getResponse
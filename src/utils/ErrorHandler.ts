// error handler function
function handleError(
    error: any,
    callback?: (result: any, error?: boolean | any) => any
) {
    if (callback) {
        callback('NumebrsAPI Error', error)
    } else {
        throw error
    }
}

export default handleError
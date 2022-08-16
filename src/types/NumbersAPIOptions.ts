// Options for Numbers API
class NumbersAPIOptions {
    /** The protocol to be used
     * @default 'http'
     */
    protocol?: 'http'

    /** The hostname of the NumbersAPI instance
     * @default '://numbersapi.com'
     */
    hostName?: string

    /** The json boolean of the NumbersAPI instance
     * @default false
     */
    json?: boolean

    /** The json boolean of the NumbersAPI instance
     * @default 'default'
     */
    notFound?: 'default' | 'ceil' | 'floor'

    /* eslint-disable default-param-last */
    constructor(config: NumbersAPIOptions = {}) {
        this.protocol = 'http'
        this.hostName = '://numbersapi.com'
        this.json = false
        this.notFound = 'default'

        if (config.protocol) {
            this.protocol = config.protocol
        }
        if (config.hostName) {
            this.hostName = `://${config.hostName}`
        }
        if (config.json) {
            this.json = config.json
        }
        if (config.notFound) {
            this.notFound = config.notFound
        }
    }
}

export default NumbersAPIOptions    
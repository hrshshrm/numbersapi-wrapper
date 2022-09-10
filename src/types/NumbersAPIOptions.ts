import NodeCache from 'node-cache';

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

    /** The cache boolean of the NumbersAPI instance
     * @default false
     */
    cacheEnabled?: boolean

    /** The cache NodeCache instance of the NumbersAPI instance
     * @default false
     */
    cache?: NodeCache

    /** The cacheLimit integer of the NumbersAPI instance
     * @default 120 * 1000 // (120 seconds)
     */
    cacheDuration?: number

    /* eslint-disable default-param-last */
    constructor(config: NumbersAPIOptions = {}) {
        this.protocol = 'http'
        this.hostName = '://numbersapi.com'
        this.json = false
        this.notFound = 'default'
        this.cacheEnabled = false
        this.cacheDuration = 120 * 1000; // 120 seconds

        if (config.json) {
            this.json = config.json
        }
        if (config.notFound) {
            this.notFound = config.notFound
        }
        if (config.cacheEnabled) {
            this.cacheEnabled = config.cacheEnabled
            this.cache = new NodeCache()
        }
        if (config.cacheEnabled && config.cacheDuration) {
            this.cacheDuration = config.cacheDuration * 1000
        }
    }
}

export default NumbersAPIOptions    
//https://leetcode.com/problems/logger-rate-limiter

class Logger {
    messageMap: Map<string, number>

    constructor() {
        this.messageMap = new Map<string, number>()
    }

    shouldPrintMessage(timestamp: number, message: string): boolean {
        if(this.messageMap.get(message) === undefined) {
            this.messageMap.set(message, timestamp)
            return true
        }

        const prevTimestamp = this.messageMap.get(message)

        if(timestamp - prevTimestamp! >= 10) {
            this.messageMap.set(message, timestamp)
            return true
        }

        return false
    }
}
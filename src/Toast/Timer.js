/**
 * This class just ticks and does something every X ms.
 */
class Timer {
    #period;
    #function;
    static test = 1;
    constructor(period) {
        this.#period = period;
        this.#function = () => {
        }
        setInterval(() => this.#run(), this.#period)
    }
    set func(newFunction) {
        this.#function = newFunction;
    }
    #run() {
        this.#function();
    }
}

const timer = new Timer(100);
export default timer;
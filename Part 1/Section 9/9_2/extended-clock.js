class extendedClock extends clock {
    constructor(options) {
        super(options);

        // We use object destructuring to get 'precision' from the input object 'options'
        // If 'precision' does not exist in 'options', the default value is '1000'
        let { precision = 1000 } = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}
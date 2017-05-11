module.exports = {
    one() {
        if (arguments[0])
            return eval("1 " + arguments[0]);

        return 1
    },
    two() {
        if (arguments[0])
            return eval("2 " + arguments[0]);;
        return 2
    },
    three() {
        if (arguments[0])
            return eval("3 " + arguments[0]);;
        return 3
    },
    four() {
        if (arguments[0])
            return eval("4 " + arguments[0]);;
        return 4
    },
    five() {
        if (arguments[0])
            return eval("5 " + arguments[0]);;
        return 5
    },
    six() {
        if (arguments[0])
            return eval("6 " + arguments[0]);;
        return 6
    },
    seven() {
        if (arguments[0])
            return eval("7 " + arguments[0]);;
        return 7
    },
    eight() {
        if (arguments[0])
            return eval("8 " + arguments[0]);;
        return 8
    },
    nine() {
        if (arguments[0])
            return eval("9 " + arguments[0]);;
        return 9
    },

    plus() {
        return "+ " + arguments[0];
    },
    minus() {
        return "- " + arguments[0];
    },
    times() {
        return "* " + arguments[0];
    },
    dividedBy() {
        return "/  " + arguments[0];
    }
};

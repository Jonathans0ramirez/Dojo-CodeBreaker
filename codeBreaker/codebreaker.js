class CodeBreaker {
    constructor(secret) {
        this.secret = secret
    }

    setSecret(secret) {
        this.secret = secret
    }

    guessNumber(number) {
        let result = "";
        for (let i = 0; i < 4; i++) {
            if (number.substring(i, i + 1) === this.secret.substring(i, i + 1)) {
                result = result + "x";
            } else {
                if (this.secret.includes(number.substring(i, i + 1))) {
                    result = result + "-";
                }
            }
        }
        return result
    }
}

module.exports.CodeBreaker = CodeBreaker

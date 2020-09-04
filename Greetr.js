(function (global, $) {
    const Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    const supportedLang = [ 'en', 'sp' ] // Does not get exposed to the outside world

    const greetings = {
        'en': 'Hello',
        'sp': 'Hola'
    };

    const formalGreetings = {
        'en': 'Greetings',
        'sp': 'Saludos'
    }; 

    const logMessages = {
        'en': 'Logged In',
        'sp': 'Inició sesión'
    }
    

    Greetr.prototype = {} // All Methods here to any instance of Geetr, saves memory space

    Greetr.init = function (firstName, lastName, language) {
            const self = this;
            self.firstName = firstName || ''
            self.lastName = lastName || ''
            self.language = language || 'en'
    }

    Greetr.init.prototype = Greetr.prototype

    global.Greeter = global.G$ = Greetr

})(window, $)
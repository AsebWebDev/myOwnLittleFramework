(function (global, $) {
    const Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    const supportedLang = [ 'en', 'sp' ] // Does not get exposed to the outside world

    var greetings = {
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
    

    Greetr.prototype = {
        getFirstName: function() {
            return this.firstName
        },
        getLastName: function() {
            return this.lastName
        },
        fullName: function() {
            return this.getFirstName() + ' ' + this.getLastName()
        },
        validate: function() {
            if (supportedLang.indexOf(this.language) === -1) {
                throw 'Invalid Language'
            }
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.fullName() + '!'
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName() + '.'
        },

        greet: function(formal) {
            let msg 
            if (formal) msg = this.formalGreeting()
            else msg = this.greeting()

            if (console) console.log(msg)

            return this
        },

        log: function () {
            if (console) console.log(logMessages[this.language] + ': ' + this.fullName() )
            return this
        },

        setLang: function(lang) {
            this.language = lang
            this.validate()
            return this
        }


    } // All Methods here to any instance of Geetr, saves memory space

    Greetr.init = function (firstName, lastName, language) {
            const self = this;
            self.firstName = firstName || ''
            self.lastName = lastName || ''
            self.language = language || 'en'
    }

    Greetr.init.prototype = Greetr.prototype

    global.Greeter = global.G$ = Greetr

})(window, $)
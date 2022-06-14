const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: '',
            arrayNames: [],
            error: {
                message: '',
                visible: false,
            },
            result: '',
        }
    },
    computed: {
        isReady() {
            return this.arrayNames.length > 1;
        },
    },
    methods: {
        addNameToList() {
            const userName = this.inputName;
            if(this.validate(userName)){
                this.arrayNames.push(userName);
                this.inputName = '';
                console.log(this.arrayNames);
            } else {
                console.log('error');
            }
        },

        validate(value) {
            this.error = {
                message: '',
                visible: 'false',
            }

            if(value === ''){
                this.error = {
                    message: 'Sorry, no empty names.',
                    visible: 'true',
                }
                return false;
            } else if (this.arrayNames.includes(value)){
                this.error = {
                    message: 'The name must be unique!',
                    visible: 'true',
                }
                return false;
            }

            return true;
        },

        removeName(index) {
            this.arrayNames.splice(index, 1);
        },

        showResults() {
            this.result = this.getRandomName();
            this.state = false;
        },

        getRandomName() {
            return this.arrayNames[Math.floor(Math.random() * this.arrayNames.length)];
        },

        getNewResult(){
            let newName;
            do {
                newName = this.getRandomName();
            }while(newName === this.result);
            this.result = newName;
            this.state = false;
        },

        resetApp(){
            this.state = true;
            this.inputName = '';
            this.arrayNames = [];
            this.error = {
                message: '',
                visible: false,
            };
            this.result = '';
        },
    }
}).mount('#app');
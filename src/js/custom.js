window.addEventListener('alpine:init', () => {
    Alpine.data('cards', () => ({
        'wrapper': false,
        'modalOne': false,
        'modalTwo': false,
        'modalThree': false,
        'modalFour': false,
        'modalFive': false,
        toggleModal(open, modal) {
            this.wrapper = open;
            
            switch(modal) {
                case 1:
                    this.modalOne = open;
                    break;
                
                case 2:
                    this.modalTwo = open;
                    break;
                
                case 3:
                    this.modalThree = open;
                    break;
                
                case 4:
                    this.modalFour = open;
                    break;
                    
                case 5:
                    this.modalFive = open;
                    break;

                default:
                    console.log('No modal found!');
            }
        }
    }));

    Alpine.data('directives', () => ({
        'directiveOne': false,
        'directiveTwo': false,
        'directiveThree': false,
        'directiveFour': false,
        'directiveFive': false,
    }));
    
    Alpine.data('classToggle', () => ({
        'toggle': 0,
        'colors': [
            'red', 
            'green',
            'yellow',
        ],
        changeClass() {
            if(this.toggle === 0){
                return 'bg-red-500';
            } else if(this.toggle === 1) {
                return 'bg-green-500';
            } else if(this.toggle === 2) {
                return 'bg-yellow-500';
            } else {
                return 'bg-blue-500';
            }
        }
    }));
});
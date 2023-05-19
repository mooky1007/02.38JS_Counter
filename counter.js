class Counter {
    constructor(target) {
        this.target = document.querySelector(target);
        this.count = 0;
        this.init();
    }

    init() {
        const buttons = this.target.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const action = button.dataset.action;
                this.updateCount(action);
            });
        });
    }

    updateCount(action) {
        if (action === 'increase') {
            this.count++;
        } else if (action === 'decrease') {
            this.count--;
        } else if (action === 'reset') {
            this.count = 0;
        }
        this.render();
    }

    render() {
        const counterNumber = this.target.querySelector('.counter_number');
        counterNumber.textContent = this.count;
    }
}

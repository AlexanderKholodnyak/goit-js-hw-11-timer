import './styles.css';

const dayValue = document.querySelector('span[data-value="days"]');
const hourValue = document.querySelector('span[data-value="hours"]');
const minValue = document.querySelector('span[data-value="mins"]');
const secValue = document.querySelector('span[data-value="secs"]');


class CountdownTimer{
    constructor({ selector, targetDate}){
        
        this.targetDate = targetDate;

        this.init();
    }


    init() {
        this.start();
        setInterval(() => {
            this.start();
        }, 500);
    }
    
    start() {
        
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            
            const time = this.getTimeComponents(deltaTime);
            this.updateClockFace(time);
    
    }

    updateClockFace({ days, hours, mins, secs }) {
        const time = `${days}${hours}${mins}${secs}`;
        
        dayValue.textContent = `${days}`;
        hourValue.textContent = `${hours}`;
        minValue.textContent = `${mins}`;
        secValue.textContent = `${secs}`;
    }


    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
    

    pad(value) {
        return String(value).padStart(2, '0');
    }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021 23:59:59'),
});


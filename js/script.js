class Calculator{
    constructor(buttons, display, equal, del, reset, root, t1, t2, t3, error){
        this.buttons = document.querySelectorAll(buttons);
        this.display = document.querySelector(display);
        this.colors = document.querySelector(root);
        this.themeOne = document.querySelector(t1);
        this.themeTwo = document.querySelector(t2);
        this.themeThree = document.querySelector(t3);
        this.equal = document.querySelector(equal);
        this.del = document.querySelector(del);
        this.reset = document.querySelector(reset);
        this.error = document.querySelector(error);

        this.result = this.result.bind(this)
        this.delOne = this.delOne.bind(this)
        this.clear = this.clear.bind(this)
        this.setTheThemeOne = this.setTheThemeOne.bind(this)
        this.setTheThemeTwo = this.setTheThemeTwo.bind(this)
        this.setTheThemeThree = this.setTheThemeThree.bind(this)
    }

    result(){

        let displayContent = this.display.textContent;
        let lastChar = displayContent.charAt(displayContent.length - 1);

        if(lastChar === '.' || lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {           
            this.display.style.color = 'red'
            setTimeout(() => {
                this.display.style.color = 'var(--display-header-color)';
            }, 2000);
            return
        }

        this.display.textContent = eval(displayContent);
    }

    delOne(){
        this.display.textContent = this.display.textContent.slice(0,-1); 
    }

    clear(){
        this.display.textContent = this.display.textContent = '' 
    }

    setTheThemeOne(){
        this.colors.style.setProperty('--main-back-1', 'hsl(222, 26%, 31%)');
        this.colors.style.setProperty('--keypad-back-1', 'hsl(223, 31%, 20%)');
        this.colors.style.setProperty('--display-back-1', 'hsl(224, 36%, 15%)');
        this.colors.style.setProperty('--key-number-color-1', 'hsl(221, 14%, 31%)');
        this.colors.style.setProperty('--key-back-1', 'hsl(30, 25%, 89%)');
        this.colors.style.setProperty('--key-shadow-1', 'hsl(28, 16%, 65%)');
        this.colors.style.setProperty('--del-reset-back-1', 'hsl(225, 21%, 49%)');
        this.colors.style.setProperty('--del-reset-shadow-1', 'hsl(224, 28%, 35%)');
        this.colors.style.setProperty('--equal-back-1', 'hsl(6, 63%, 50%)');
        this.colors.style.setProperty('--equal-shadow-1','hsl(6, 70%, 34%)');
        this.colors.style.setProperty('--others-keys-colors-1','white');
        this.colors.style.setProperty('--display-header-color','white');
        this.themeOne.style.background = 'hsl(6, 63%, 50%)';
        this.themeTwo.style.background = 'transparent';
        this.themeThree.style.background = 'transparent';
    }

    setTheThemeTwo(){
        this.colors.style.setProperty('--main-back-1', 'hsl(0, 0%, 90%)');
        this.colors.style.setProperty('--keypad-back-1', 'hsl(0, 5%, 81%)');
        this.colors.style.setProperty('--display-back-1', 'hsl(0, 0%, 93%)');
        this.colors.style.setProperty('--key-number-color-1', 'hsl(60, 10%, 19%)');
        this.colors.style.setProperty('--key-back-1', 'hsl(45, 7%, 89%)');
        this.colors.style.setProperty('--key-shadow-1', 'hsl(35, 11%, 61%)');
        this.colors.style.setProperty('--del-reset-back-1', 'hsl(185, 42%, 37%)');
        this.colors.style.setProperty('--del-reset-shadow-1', 'hsl(185, 58%, 25%)');
        this.colors.style.setProperty('--equal-back-1', 'hsl(25, 98%, 40%)');
        this.colors.style.setProperty('--equal-shadow-1','hsl(25, 99%, 27%)');
        this.colors.style.setProperty('--others-keys-colors-1','white');
        this.colors.style.setProperty('--display-header-color','hsl(60, 10%, 19%)');
        this.themeTwo.style.background = 'hsl(25, 98%, 40%)'
        this.themeOne.style.background = 'transparent';
        this.themeThree.style.background = 'transparent';
    }

    setTheThemeThree(){
        this.colors.style.setProperty('--main-back-1', 'hsl(268, 75%, 9%)');
        this.colors.style.setProperty('--keypad-back-1', 'hsl(268, 71%, 12%)');
        this.colors.style.setProperty('--display-back-1', 'hsl(268, 71%, 12%)');
        this.colors.style.setProperty('--key-number-color-1', 'hsl(52, 100%, 62%)');
        this.colors.style.setProperty('--key-back-1', 'hsl(268, 47%, 21%)');
        this.colors.style.setProperty('--key-shadow-1', 'hsl(290, 70%, 36%)');
        this.colors.style.setProperty('--del-reset-back-1', 'hsl(281, 89%, 26%)');
        this.colors.style.setProperty('--del-reset-shadow-1', 'hsl(285, 91%, 52%)');
        this.colors.style.setProperty('--equal-back-1', 'hsl(176, 100%, 44%)');
        this.colors.style.setProperty('--equal-shadow-1','hsl(177, 92%, 70%)');
        this.colors.style.setProperty('--others-keys-colors-1','white');
        this.colors.style.setProperty('--display-header-color', 'hsl(52, 100%, 62%)');
        this.themeThree.style.background = 'hsl(176, 100%, 44%)'
        this.themeOne.style.background = 'transparent';
        this.themeTwo.style.background = 'transparent';
    }

    init(){
        this.buttons.forEach(button=>{
            button.addEventListener('click',()=>{
                this.display.textContent += button.dataset.text
            })
        });

        this.equal.addEventListener('click',this.result)
        this.del.addEventListener('click',this.delOne)
        this.reset.addEventListener('click',this.clear)
        this.themeOne.addEventListener('click', this.setTheThemeOne)
        this.themeTwo.addEventListener('click', this.setTheThemeTwo)
        this.themeThree.addEventListener('click', this.setTheThemeThree)
    }
}

const calculator = new Calculator('.calc-buttons', '.display', '#equal', '#del', '#reset', ':root', '.option-one', '.option-two', '.option-three', '.error')
calculator.init()
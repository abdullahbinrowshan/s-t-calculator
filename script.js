class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear() {

    }

    delete(){

    }

    appendNumber(){

    }

    compute(){

    }

    updateDisplay(){

    }
}



const numberButtons = document.querySelectorAll(['data-number']);
const operationButtons = document.querySelectorAll(['data-operation']);
const deleteButton = document.querySelectorAll(['data-delete']);
const allClearButton = document.querySelectorAll(['data-all-clear']);
const previousOperandButton = document.querySelectorAll(['data-previous-operand']);
const currentOperandButton = document.querySelectorAll(['data-current-operand']);

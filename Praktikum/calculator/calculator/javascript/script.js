const inputFieldInput = document.querySelector(".input-field-input");
const numButton = document.querySelectorAll(".num");
const acButton = document.querySelector(".ac");
const deButton = document.querySelector(".de");
const devButton = document.querySelector(".dev");
const mulButton = document.querySelector(".mul");
const minButton = document.querySelector(".min");
const addButton = document.querySelector(".add");
const modButton = document.querySelector(".mod");
const sumButton = document.querySelector(".sum");

const dev = (prevValue, newValue) => {
    const sum = parseFloat(prevValue) / parseFloat(newValue);
    inputFieldInput.value = sum;
};

const mul = (prevValue, newValue) => {
    const sum = parseFloat(prevValue) * parseFloat(newValue);
    inputFieldInput.value = sum;
};

const min = (prevValue, newValue) => {
    const sum = parseFloat(prevValue) - parseFloat(newValue);
    inputFieldInput.value = sum;
};

const add = (prevValue, newValue) => {
    const sum = parseFloat(prevValue) + parseFloat(newValue);
    inputFieldInput.value = sum;
};

const mod = (prevValue, newValue) => {
    const sum = parseFloat(prevValue) % parseFloat(newValue);
    inputFieldInput.value = sum;
};

const insertOperand = (button, operand) => {
    if (inputFieldInput.value !== "") {
        if (inputFieldInput.value.includes(operand)) {
            return;
        }

        inputFieldInput.value = inputFieldInput.value + button.innerHTML;
    }
};

const checkOperand = (operand) => {
    if (inputFieldInput.value.includes(operand)) {
        const prevValue = inputFieldInput.value.substring(0, inputFieldInput.value.indexOf(operand));
        const newValue = inputFieldInput.value.substring(inputFieldInput.value.indexOf(operand) + 1, inputFieldInput.value.length);

        return { prevValue, newValue };
    }

    return null;
};

acButton.addEventListener("click", () => {
    inputFieldInput.value = "";
});

deButton.addEventListener("click", () => {
    inputFieldInput.value = inputFieldInput.value.substring(0, inputFieldInput.value.length - 1);
});

numButton.forEach((button) =>
    button.addEventListener("click", () => {
        inputFieldInput.value = inputFieldInput.value + button.innerHTML;
    })
);

devButton.addEventListener("click", () => {
    insertOperand(devButton, "/");
});

mulButton.addEventListener("click", () => {
    insertOperand(mulButton, "x");
});

minButton.addEventListener("click", () => {
    insertOperand(minButton, "-");
});

addButton.addEventListener("click", () => {
    insertOperand(addButton, "+");
});

modButton.addEventListener("click", () => {
    insertOperand(modButton, "%");
});

sumButton.addEventListener("click", () => {
    if (inputFieldInput.value.includes("/")) {
        const { prevValue, newValue } = checkOperand("/");
        dev(prevValue, newValue);
    }
    if (inputFieldInput.value.includes("x")) {
        const { prevValue, newValue } = checkOperand("x");
        mul(prevValue, newValue);
    }
    if (inputFieldInput.value.includes("-")) {
        const { prevValue, newValue } = checkOperand("-");
        min(prevValue, newValue);
    }
    if (inputFieldInput.value.includes("+")) {
        const { prevValue, newValue } = checkOperand("+");
        add(prevValue, newValue);
    }
    if (inputFieldInput.value.includes("%")) {
        const { prevValue, newValue } = checkOperand("%");
        mod(prevValue, newValue);
    }
});

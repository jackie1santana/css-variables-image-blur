/* eslint-disable max-len */
import '../public/style.css';

/* Selecting all the inputs in the controls class and assigning them to the inputs variable. */
const inputs = document.querySelectorAll('.controls input') as NodeListOf<HTMLInputElement>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleUpdate = (e: HTMLInputElement): void => {
     /* Checking if the input has a data-sizing attribute. If it does, it will set the suffix to the
     value of the data-sizing attribute. If it doesn't, it will set the suffix to an empty string. */
     const suffix = e.dataset.sizing || ''
    /* Setting the CSS variable to the value of the input via root of html & the values will change via javascript. */
    document.documentElement.style.setProperty(`--${e.name}`, e.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', (): void => {
     handleUpdate(input)
}));

inputs.forEach(input => input.addEventListener('mousemove', (): void => {
     handleUpdate(input)
}));

<script setup lang="ts">
import { ref } from 'vue';

  const jsQuestions = [
  {
    question: "What is the difference between var, let, and const?",
    answer: "var is function-scoped and can be redeclared. let and const are block-scoped; let can be reassigned, const cannot."
  },
  {
    question: "What are JavaScript data types?",
    answer: "Primitive types: string, number, bigint, boolean, undefined, symbol, null. Non-primitive: objects."
  },
  {
    question: "What is hoisting?",
    answer: "JavaScript moves function and variable declarations to the top of their scope before execution."
  },
  {
    question: "What is the difference between == and ===?",
    answer: "== checks equality with type coercion, === checks equality without type coercion (strict equality)."
  },
  {
    question: "What is a closure?",
    answer: "A closure is a function that remembers variables from its outer scope even after the scope has closed."
  },
  {
    question: "What is an arrow function?",
    answer: "A shorter syntax for writing functions that does not have its own 'this' or 'arguments' binding."
  },
  {
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but not assigned. null is an intentional empty value."
  },
  {
    question: "What is the difference between synchronous and asynchronous code?",
    answer: "Synchronous code executes line by line; asynchronous code allows tasks to run in the background without blocking."
  },
  {
    question: "What is the event loop in JavaScript?",
    answer: "The event loop handles asynchronous callbacks by moving them from the task queue into the call stack when ready."
  },
  {
    question: "What are promises?",
    answer: "Promises represent the result of an asynchronous operation: pending, fulfilled, or rejected."
  },
  {
    question: "What is async/await?",
    answer: "Syntactic sugar for working with promises; async marks a function returning a promise, await pauses until the promise resolves."
  },
  {
    question: "What is the difference between let and const?",
    answer: "Both are block-scoped. let allows reassignment, const does not allow reassignment after initialization."
  },
  {
    question: "What is an Immediately Invoked Function Expression (IIFE)?",
    answer: "A function that runs immediately after it is defined: (function(){ ... })()."
  },
  {
    question: "What are template literals?",
    answer: "Strings enclosed by backticks (``) that support interpolation using ${expression} and multiline text."
  },
  {
    question: "What is destructuring in JavaScript?",
    answer: "A syntax that allows unpacking values from arrays or properties from objects into distinct variables."
  },
  {
    question: "What are higher-order functions?",
    answer: "Functions that can take other functions as arguments or return them as results (e.g., map, filter, reduce)."
  },
  {
    question: "What is the difference between for...in and for...of?",
    answer: "for...in iterates over object keys, for...of iterates over iterable values like arrays, strings, maps."
  },
  {
    question: "What is the difference between localStorage and sessionStorage?",
    answer: "Both store data in the browser. localStorage persists until cleared, sessionStorage clears when the tab closes."
  },
  {
    question: "What is JSON?",
    answer: "JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data, based on key-value pairs."
  },
  {
    question: "What is the difference between call, apply, and bind?",
    answer: "call and apply invoke a function with a specified 'this' (apply takes an array of arguments). bind returns a new function with 'this' fixed."
  }
  ];

  var questions_count = ref(1);
  const show_answer = ref(false);
  const question_length = jsQuestions.length;
  
</script>

<template>
  <div class="content">
      <div class="main">
    <div class="header">
    <h1>Flash Cards</h1>
    <p> {{ questions_count }} / {{ question_length }}</p>
  </div>

  <div class="progress-bar" :style="{'--width': questions_count / question_length * 100}">
    <div class="progress-fill"></div>
    <span class="progress-label">{{ questions_count * 5 }}% </span>
  </div>
  <div class="container">
    <div class="container-content">
      <span v-if="show_answer"> {{ jsQuestions[questions_count -1].answer }}</span>
      <span v-else> {{ jsQuestions[questions_count - 1].question }}</span>
    </div>
    <div class="container-content-buttons">
      <div>
        <svg fill="#000000" width="20px" height="22px" viewBox="-102 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>i-left</title><path d="M244 160L148 256 244 352 212 384 84 256 212 128 244 160Z"></path></g></svg>
        <button @click="questions_count--; show_answer = false">Previous</button>
      </div>
        <button v-if="show_answer === false" @click="show_answer = !show_answer">Show Answer</button>
        <button v-if="show_answer === true" @click="show_answer = !show_answer">Hide Answer</button>
      <div>
        <button @click="questions_count++; show_answer = false">Next</button>
        <svg fill="#000000" width="20px" height="22px" viewBox="-102 0 512 512" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>i-left</title><path d="M244 160L148 256 244 352 212 384 84 256 212 128 244 160Z"></path></g></svg>
      </div>
    </div>
  </div>
  </div>
  </div>

  
</template>

<style scoped>
  *, *::before, *::after {
    box-sizing: border-box;
  }

  .content {
    margin: 20px;
    /* max-width: 550px; */
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .header {
    display: inline-flex;
    width: 100%;
    min-width: 310px;
    justify-content: space-between;
  }

  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-width: 650px;
  }

  .header p {
    margin-top: 30px;
  }

.progress-bar {
  position: relative;
  width: 100%;
  min-width: 310px;
  height: 3em;
  border: 2px solid rgb(0, 195, 255);
  border-radius: 0.6em;
  overflow: hidden;
  padding: 0.2em; /* nur äußerer Rahmen */
  box-sizing: border-box;
}

.progress-fill {
  height: 100%;
  width: calc(var(--width) * 1%); /* Prozentwert aus Vue */
  background-color: #069;
  border-radius: inherit;
  transition: width 0.3s ease; /* smooth animiert */
}

.progress-label {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}

  .container {
    width: 100%;
    border: 2px solid rgb(0, 195, 255);
    display: block;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-top: 15px;
    text-align: center;
    border-radius: 1em;
    /* max-width: 550px; */
    min-width: 300px;
  }

  .container-content {
    height: 350px;
    background-color: rgba(47, 143, 190, 0.466);
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    padding: 30px;
    text-align: center;
    border-radius: 0.3em;
  }

  .container-content-buttons {
    display: flex;
    background-color: rgba(47, 143, 190, 0.466);
    border-radius: 0.5em;
    justify-content: space-between;
    margin-top: 5px;
  }
  
  .container-content-buttons button {
    border: none;
    padding: 10px;
    background-color: transparent;
    font-size: 14px;
    cursor: pointer;
  }
  svg{
    position: relative;
    top: 0.4em;
    margin: 0 5px 0 5px;
    cursor: pointer;
  }
</style>

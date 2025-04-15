// /app/api/challenges/route.ts (with integer duration)
import { NextResponse } from "next/server";

const challenges = [
  {
    id:"1",
    title: "Find the Missing Number in Array",
    category: "Algo coding",
    description: `
      <p>Given an array containing <code>n</code> distinct numbers taken from <code>0</code> to <code>n</code>, find the one number that is missing from the array.</p>
      <pre><code>
function missingNumber(nums) {
  // your code here
}
      </code></pre>
      <p><strong class="example">Example 1:</strong></p>
<div class="example-block">
<p><strong>Input:</strong>&nbsp;<span class="example-io">nums = [3,0,1]</span></p>
<p><strong>Output:</strong>&nbsp;<span class="example-io">2</span></p>
<p><strong>Explanation:</strong></p>
<p><code>n = 3</code>&nbsp;since there are 3 numbers, so all numbers are in the range&nbsp;<code>[0,3]</code>. 2 is the missing number in the range since it does not appear in&nbsp;<code>nums</code>.</p>
</div>
<p><strong class="example">Example 2:</strong></p>
<div class="example-block">
<p><strong>Input:</strong>&nbsp;<span class="example-io">nums = [0,1]</span></p>
<p><strong>Output:</strong>&nbsp;<span class="example-io">2</span></p>
<p><strong>Explanation:</strong></p>
<p><code>n = 2</code>&nbsp;since there are 2 numbers, so all numbers are in the range&nbsp;<code>[0,2]</code>. 2 is the missing number in the range since it does not appear in&nbsp;<code>nums</code>.</p>
</div>
<p><strong class="example">Example 3:</strong></p>
<div class="example-block">
<p><strong>Input:</strong>&nbsp;<span class="example-io">nums = [9,6,4,2,3,5,7,0,1]</span></p>
<p><strong>Output:</strong>&nbsp;<span class="example-io">8</span></p>
<p><strong>Explanation:</strong></p>
<p><code>n = 9</code>&nbsp;since there are 9 numbers, so all numbers are in the range&nbsp;<code>[0,9]</code>. 8 is the missing number in the range since it does not appear in&nbsp;<code>nums</code>.</p>
</div>
<div id="simple-translate" class="simple-translate-system-theme">
<div>
<div class="simple-translate-button isShow">&nbsp;</div>
</div>
</div>
    `,
    difficulty: "easy",
    "completed": false,
    tags: ["Math", "Array"],
    starterCode: "function missingNumber(nums) {\n  \n}",
    solutionCode: `
    <p>
    To solve this, we need to find the missing number in an array where the numbers should range from 0 to n, but one number is missing.

First, calculate the expected sum:
I know the sum of numbers from 0 to n can be calculated using the formula n * (n + 1) / 2. This gives me the sum if no numbers were missing.

Next, find the actual sum:
I can use the reduce() method on the array nums to sum all the elements in the array. This will give me the sum of the numbers that are actually present in the array.

Finally, the missing number is the difference:
The missing number can be found by subtracting the actual sum from the expected sum. That’s it!</p>
    <pre>
<code>
function missingNumber(nums)
{
const n=nums.length;
const sum= (n* (n+1)) /2;
const actual=nums.reduce((a, b) =&gt;a+b, 0);
return sum-actual;
}
</code>
</pre>`,
    author: "Tanuj Bhatt",
    solvedBy: 180,
    createdAt: "2024-06-01T12:00:00Z",
    updatedAt: "2024-06-01T12:00:00Z",
    duration: 20,
    previewImage: "/images/missing-number.png",
    videoExplanation: "https://youtube.com/example1",
    skillLevel: ["Beginner"],
    estimatedReadingTime: 5,
    isPremium: false,
    isFeatured: true,
    likes: 240,
    comments: []
  },
  {
    id: "21",
    title: "Find the Single Number",
    category: "Algo coding",
    description: `
      <p>Given a non-empty array of integers <code>nums</code>, every element appears twice except for one. Find that single one.</p>
      <pre><code>
  function singleNumber(nums) {
    // your code here
  }
      </code></pre>
      <p><strong class="example">Example 1:</strong></p>
      <div class="example-block">
      <p><strong>Input:</strong> <span class="example-io">nums = [2,2,1]</span></p>
      <p><strong>Output:</strong> <span class="example-io">1</span></p>
      </div>
      <p><strong class="example">Example 2:</strong></p>
      <div class="example-block">
      <p><strong>Input:</strong> <span class="example-io">nums = [4,1,2,1,2]</span></p>
      <p><strong>Output:</strong> <span class="example-io">4</span></p>
      </div>
    `,
    difficulty: "easy",
    "completed": false,
    tags: ["Bit Manipulation", "Array"],
    starterCode: "function singleNumber(nums) {\n  \n}",
    solutionCode: `
      <p>We use the XOR operation. When we XOR two same numbers, the result is 0. So XORing all numbers together, the result will be the single number.</p>
      <pre><code>
  function singleNumber(nums) {
    return nums.reduce((a, b) => a ^ b, 0);
  }
      </code></pre>
    `,
    author: "Tanuj Bhatt",
    solvedBy: 152,
    createdAt: "2024-06-01T13:00:00Z",
    updatedAt: "2024-06-01T13:00:00Z",
    duration: 20,
    previewImage: "/images/single-number.png",
    videoExplanation: "https://youtube.com/example2",
    skillLevel: ["Beginner"],
    estimatedReadingTime: 5,
    isPremium: false,
    isFeatured: true,
    likes: 120,
    comments: [],
    testCases: [
      { input: [2, 2, 1], expectedOutput: 1 },
      { input: [4, 1, 2, 1, 2], expectedOutput: 4 },
      { input: [1], expectedOutput: 1 }
    ]
  }
,  
{
  id: "31",
  title: "Two Sum",
  category: "Algo coding",
  description: `
    <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
    <pre><code>
function twoSum(nums, target) {
  // your code here
}
    </code></pre>
    <p><strong class="example">Example 1:</strong></p>
    <div class="example-block">
    <p><strong>Input:</strong> <span class="example-io">nums = [2,7,11,15], target = 9</span></p>
    <p><strong>Output:</strong> <span class="example-io">[0,1]</span></p>
    </div>
    <p><strong class="example">Example 2:</strong></p>
    <div class="example-block">
    <p><strong>Input:</strong> <span class="example-io">nums = [3,2,4], target = 6</span></p>
    <p><strong>Output:</strong> <span class="example-io">[1,2]</span></p>
    </div>
  `,
  difficulty: "easy",
  "completed": false,
  tags: ["Array", "Hash Map"],
  starterCode: "function twoSum(nums, target) {\n  \n}",
  solutionCode: `
    <p>We can use a hash map to store the difference needed for each number, and check if we have seen that difference before.</p>
    <pre><code>
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
}
    </code></pre>
  `,
  author: "Tanuj Bhatt",
  solvedBy: 305,
  createdAt: "2024-06-01T14:00:00Z",
  updatedAt: "2024-06-01T14:00:00Z",
  duration: 15,
  previewImage: "/images/two-sum.png",
  videoExplanation: "https://youtube.com/example3",
  skillLevel: ["Beginner"],
  estimatedReadingTime: 5,
  isPremium: false,
  isFeatured: true,
  likes: 360,
  comments: [],
  testCases: [
    { input: [[2,7,11,15], 9], expectedOutput: [0,1] },
    { input: [[3,2,4], 6], expectedOutput: [1,2] },
    { input: [[3,3], 6], expectedOutput: [0,1] }
  ]
},
{
  id: "41",
  title: "Valid Anagram",
  category: "Algo coding",
  description: `
    <p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.</p>
    <pre><code>
function isAnagram(s, t) {
  // your code here
}
    </code></pre>
    <p><strong class="example">Example 1:</strong></p>
    <div class="example-block">
    <p><strong>Input:</strong> <span class="example-io">s = "anagram", t = "nagaram"</span></p>
    <p><strong>Output:</strong> <span class="example-io">true</span></p>
    </div>
    <p><strong class="example">Example 2:</strong></p>
    <div class="example-block">
    <p><strong>Input:</strong> <span class="example-io">s = "rat", t = "car"</span></p>
    <p><strong>Output:</strong> <span class="example-io">false</span></p>
    </div>
  `,
  difficulty: "easy",
  "completed": false,
  tags: ["String", "Hash Map"],
  starterCode: "function isAnagram(s, t) {\n  \n}",
  solutionCode: `
    <p>We sort both strings and compare them. If they are equal, it's an anagram.</p>
    <pre><code>
function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}
    </code></pre>
  `,
  author: "Tanuj Bhatt",
  solvedBy: 212,
  createdAt: "2024-06-01T15:00:00Z",
  updatedAt: "2024-06-01T15:00:00Z",
  duration: 10,
  previewImage: "/images/valid-anagram.png",
  videoExplanation: "https://youtube.com/example4",
  skillLevel: ["Beginner"],
  estimatedReadingTime: 3,
  isPremium: false,
  isFeatured: true,
  likes: 180,
  comments: [],
  testCases: [
    { input: ["anagram", "nagaram"], expectedOutput: true },
    { input: ["rat", "car"], expectedOutput: false },
    { input: ["listen", "silent"], expectedOutput: true }
  ]
}

,
  {
    id:"2",
    title: "Responsive Login Page Design",
    category: "UI coding",
    description: `
      <p>Create a responsive login page using HTML and CSS. The page should work well on both desktop and mobile views.</p>
      <pre><code>
&lt;form class="login-form"&gt;
  &lt;input type="text" placeholder="Username" /&gt;
  &lt;input type="password" placeholder="Password" /&gt;
  &lt;button&gt;Login&lt;/button&gt;
&lt;/form&gt;
      </code></pre>
    `,
    difficulty: "easy",
    "completed": false,
    tags: ["HTML", "CSS", "Responsive"],
    starterCode: "<form>\n  <!-- form inputs here -->\n</form>",
    solutionCode: "<form class='login-form'>...</form>",
    author: "Ritika Singh",
    solvedBy: 300,
    createdAt: "2024-06-02T12:00:00Z",
    updatedAt: "2024-06-02T12:00:00Z",
    duration: 30,
    previewImage: "/images/login-form.png",
    videoExplanation: "https://youtube.com/example2",
    skillLevel: ["Beginner"],
    estimatedReadingTime: 5,
    isPremium: false,
    isFeatured: false,
    likes: 270,
    comments: []
  },
  {
    id:"3",
    title: "Debounce Function Implementation",
    category: "JS functions",
    description: `
      <p>Implement a debounce function in JavaScript which delays the processing of the input until a certain time has elapsed since the last input event.</p>
      <pre><code>
function debounce(func, delay) {
  // your code here
}
      </code></pre>
    `,
    difficulty: "medium",
    "completed": false,
    tags: ["Debounce", "JS", "Timing"],
    starterCode: "function debounce(func, delay) {\n  \n}",
    solutionCode: "function debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), delay);\n  };\n}",
    author: "Arjun Mishra",
    solvedBy: 140,
    createdAt: "2024-06-03T12:00:00Z",
    updatedAt: "2024-06-03T12:00:00Z",
    duration: 30,
    previewImage: "/images/debounce.png",
    videoExplanation: "https://youtube.com/example3",
    skillLevel: ["Intermediate"],
    estimatedReadingTime: 6,
    isPremium: false,
    isFeatured: false,
    likes: 200,
    comments: []
  },
  {
    id:"4",
    title: "Check for Palindrome",
    category: "Algo coding",
    description: `
      <p>Write a function to check whether a given string is a palindrome.</p>
      <pre><code>
function isPalindrome(str) {
  // your code here
}
      </code></pre>
    `,
    difficulty: "easy",
    "completed": false,
    tags: ["String", "Palindrome"],
    starterCode: "function isPalindrome(str) {\n  \n}",
    solutionCode: "function isPalindrome(str) {\n  return str === str.split('').reverse().join('');\n}",
    author: "Kajal Roy",
    solvedBy: 220,
    createdAt: "2024-06-04T12:00:00Z",
    updatedAt: "2024-06-04T12:00:00Z",
    duration: 15,
    previewImage: "/images/palindrome.png",
    videoExplanation: "https://youtube.com/example4",
    skillLevel: ["Beginner"],
    estimatedReadingTime: 4,
    isPremium: false,
    isFeatured: false,
    likes: 310,
    comments: []
  },
  {
    id:"5",
    title: "Accordion UI Component",
    category: "UI coding",
    description: `
      <p>Create an accordion component with smooth transitions using HTML, CSS, and JavaScript.</p>
      <pre><code>
&lt;div class="accordion"&gt;
  &lt;div class="accordion-item"&gt;...&lt;/div&gt;
&lt;/div&gt;
      </code></pre>
    `,
    difficulty: "medium",
    "completed": false,
    tags: ["Accordion", "HTML", "CSS", "JS"],
    starterCode: "<div class='accordion'></div>",
    solutionCode: "<div class='accordion'>...</div>",
    author: "Neha Khatri",
    solvedBy: 170,
    createdAt: "2024-06-05T12:00:00Z",
    updatedAt: "2024-06-05T12:00:00Z",
    duration: 30,
    previewImage: "/images/accordion.png",
    videoExplanation: "https://youtube.com/example5",
    skillLevel: ["Intermediate"],
    estimatedReadingTime: 6,
    isPremium: false,
    isFeatured: false,
    likes: 180,
    comments: []
  },
  {
    id:"6",
    title: "Throttle Function in JavaScript",
    category: "JS functions",
    description: `
      <p>Implement a throttle function to control the frequency of function execution.</p>
      <pre><code>
function throttle(func, limit) {
  // your code here
}
      </code></pre>
    `,
    difficulty: "medium",
    "completed": false,
    tags: ["Throttle", "JS", "Performance"],
    starterCode: "function throttle(func, limit) {\n  \n}",
    solutionCode: "function throttle(func, limit) {\n  let lastCall = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastCall >= limit) {\n      lastCall = now;\n      func.apply(this, args);\n    }\n  };\n}",
    author: "Deepak Saini",
    solvedBy: 100,
    createdAt: "2024-06-06T12:00:00Z",
    updatedAt: "2024-06-06T12:00:00Z",
    duration: 30,
    previewImage: "/images/throttle.png",
    videoExplanation: "https://youtube.com/example6",
    skillLevel: ["Intermediate"],
    estimatedReadingTime: 7,
    isPremium: false,
    isFeatured: false,
    likes: 140,
    comments: []
  },
  {
    id:"7",
    title: "Sticky Navbar on Scroll",
    category: "UI coding",
    description: `
      <p>Create a sticky navbar that remains fixed at the top of the page when the user scrolls down.</p>
      <pre><code>
.navbar {
  position: sticky;
  top: 0;
}
      </code></pre>
    `,
    difficulty: "easy",
    "completed": false,
    tags: ["CSS", "Sticky", "Scroll"],
    starterCode: "<nav class='navbar'>Navigation</nav>",
    solutionCode: "<nav class='navbar'>...</nav>",
    author: "Isha Rawat",
    solvedBy: 270,
    createdAt: "2024-06-07T12:00:00Z",
    updatedAt: "2024-06-07T12:00:00Z",
    duration: 20,
    previewImage: "/images/sticky-navbar.png",
    videoExplanation: "https://youtube.com/example7",
    skillLevel: ["Beginner"],
    estimatedReadingTime: 4,
    isPremium: false,
    isFeatured: false,
    likes: 280,
    comments: []
  },
  {
    id:"8",
    title: "Binary Search Implementation",
    category: "Algo coding",
    description: `
      <p>Implement binary search on a sorted array and return the index of the target element.</p>
      <pre><code>
function binarySearch(arr, target) {
  // your code here
}
      </code></pre>
    `,
    difficulty: "medium",
    "completed": false,
    tags: ["Array", "Search", "Binary Search"],
    starterCode: "function binarySearch(arr, target) {\n  \n}",
    solutionCode: "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
    author: "Samar Yadav",
    solvedBy: 230,
    createdAt: "2024-06-08T12:00:00Z",
    updatedAt: "2024-06-08T12:00:00Z",
    duration: 25,
    previewImage: "/images/binary-search.png",
    videoExplanation: "https://youtube.com/example8",
    skillLevel: ["Intermediate"],
    estimatedReadingTime: 6,
    isPremium: false,
    isFeatured: true,
    likes: 290,
    comments: []
  },
  {
    id:"9",
    title: "Flatten Nested Arrays",
    category: "JS functions",
    description: `
      <p>Write a function to flatten an array with nested sub-arrays of arbitrary depth.</p>
      <pre><code>
function flattenArray(arr) {
  // your code here
}
      </code></pre>
    `,
    difficulty: "hard",
    "completed": false,
    tags: ["Array", "Recursion"],
    starterCode: "function flattenArray(arr) {\n  \n}",
    solutionCode: "function flattenArray(arr) {\n  return arr.flat(Infinity);\n}",
    author: "Tanisha Batra",
    solvedBy: 130,
    createdAt: "2024-06-09T12:00:00Z",
    updatedAt: "2024-06-09T12:00:00Z",
    duration: 35,
    previewImage: "/images/flatten-array.png",
    videoExplanation: "https://youtube.com/example9",
    skillLevel: ["Advanced"],
    estimatedReadingTime: 7,
    isPremium: true,
    isFeatured: false,
    likes: 170,
    comments: []
  },
  {
    id:"10",
    title: "Card Layout with CSS Grid",
    category: "UI coding",
    description: `
      <p>Create a responsive card layout using CSS Grid. Cards should adjust based on screen size.</p>
      <pre><code>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
      </code></pre>
    `,
    difficulty: "easy",
    "completed": false,
    tags: ["CSS", "Grid", "Responsive"],
    starterCode: "<div class='container'>\n  <!-- cards -->\n</div>",
    solutionCode: "<div class='container'>...</div>",
    author: "Rehan Ali",
    solvedBy: 190,
    createdAt: "2024-06-10T12:00:00Z",
    updatedAt: "2024-06-10T12:00:00Z",
    duration: 20,
    previewImage: "/images/card-layout.png",
    videoExplanation: "https://youtube.com/example10",
    skillLevel: ["Beginner"],
    estimatedReadingTime: 5,
    isPremium: false,
    isFeatured: true,
    likes: 300,
    comments: []
  }
];


// const challenges = [
//   {
//     id: "1",
//     title: "Build a Responsive Navbar",
//     category: "UI coding",
//     description: "Create a responsive navigation bar that collapses into a hamburger menu on smaller screens using only HTML and CSS.",
//     difficulty: "easy",
//     tags: ["HTML", "CSS", "Responsive"],
//     starterCode: "<!-- Write your HTML here -->\n<nav>\n  <!-- nav items -->\n</nav>",
//     solutionCode: "<nav> ... </nav> <!-- complete solution -->",
//     createdAt: "2024-06-01T12:00:00Z",
//     duration: 30
//   },
//   {
//     id: "2",
//     title: "Create a Todo App in React",
//     category: "UI coding",
//     description: "Build a simple Todo app using React with functionality to add, remove, and toggle tasks.",
//     difficulty: "medium",
//     tags: ["React", "useState", "Forms"],
//     starterCode: "export default function TodoApp() {\n  // start here\n  return <div>Todo App</div>;\n}",
//     solutionCode: "export default function TodoApp() {\n  const [todos, setTodos] = useState([]);\n  // full logic\n}",
//     createdAt: "2024-06-03T12:00:00Z",
//     duration: 60
//   },
//   {
//     id: "3",
//     title: "Tabs Component with React",
//     category: "UI coding",
//     description: "Implement a Tabs component that switches between different panels when the tab headers are clicked.",
//     difficulty: "hard",
//     tags: ["React", "UI", "Components"],
//     starterCode: "function Tabs() {\n  // your code here\n  return <div>Tabs</div>;\n}",
//     solutionCode: "function Tabs() {\n  const [activeTab, setActiveTab] = useState('Tab1');\n  return (\n    <div>\n      <button onClick={() => setActiveTab('Tab1')}>Tab1</button>\n      <button onClick={() => setActiveTab('Tab2')}>Tab2</button>\n      <div>{activeTab === 'Tab1' ? 'Content 1' : 'Content 2'}</div>\n    </div>\n  );\n}",
//     createdAt: "2024-06-05T12:00:00Z",
//     duration: 90
//   },
//   {
//     id: "4",
//     title: "Reverse a String",
//     category: "JS functions",
//     description: "Write a JavaScript function to reverse a given string.",
//     difficulty: "easy",
//     tags: ["JavaScript", "String", "Functions"],
//     starterCode: "function reverseString(str) {\n  // your code here\n}",
//     solutionCode: "function reverseString(str) {\n  return str.split('').reverse().join('');\n}",
//     createdAt: "2024-06-06T12:00:00Z",
//     duration: 15
//   },
//   {
//     id: "5",
//     title: "Find the Largest Number",
//     category: "Algo coding",
//     description: "Write a function that returns the largest number from a given array.",
//     difficulty: "easy",
//     tags: ["JavaScript", "Array", "Algorithm"],
//     starterCode: "function findLargest(arr) {\n  // your code here\n}",
//     solutionCode: "function findLargest(arr) {\n  return Math.max(...arr);\n}",
//     createdAt: "2024-06-07T12:00:00Z",
//     duration: 20
//   },
//   {
//     id: "6",
//     title: "FizzBuzz",
//     category: "Algo coding",
//     description: "Write a program that prints numbers from 1 to 100. But for multiples of 3 print 'Fizz' and for the multiples of 5 print 'Buzz'. For numbers which are multiples of both 3 and 5 print 'FizzBuzz'.",
//     difficulty: "easy",
//     tags: ["JavaScript", "Loops", "Logic"],
//     starterCode: "for (let i = 1; i <= 100; i++) {\n  // your code here\n}",
//     solutionCode: "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');\n  else if (i % 3 === 0) console.log('Fizz');\n  else if (i % 5 === 0) console.log('Buzz');\n  else console.log(i);\n}",
//     createdAt: "2024-06-08T12:00:00Z",
//     duration: 25
//   },
//   {
//     id: "7",
//     title: "Debounce Function Implementation",
//     category: "JS functions",
//     description: "Implement a debounce function that delays the execution of a callback until after a specified time has elapsed since the last call.",
//     difficulty: "medium",
//     tags: ["JavaScript", "Performance", "Functions"],
//     starterCode: "function debounce(fn, delay) {\n  // your code here\n}",
//     solutionCode: "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
//     createdAt: "2024-06-09T12:00:00Z",
//     duration: 40
//   },
//   {
//     id: "8",
//     title: "Throttle Function Implementation",
//     category: "JS functions",
//     description: "Implement a throttle function that ensures a function is only called once every X milliseconds.",
//     difficulty: "medium",
//     tags: ["JavaScript", "Throttle", "Functions"],
//     starterCode: "function throttle(fn, delay) {\n  // your code here\n}",
//     solutionCode: "function throttle(fn, delay) {\n  let lastCall = 0;\n  return function(...args) {\n    const now = new Date().getTime();\n    if (now - lastCall >= delay) {\n      lastCall = now;\n      fn(...args);\n    }\n  };\n}",
//     createdAt: "2024-06-10T12:00:00Z",
//     duration: 40
//   },
//   {
//     id: "9",
//     title: "Custom Modal Component",
//     category: "UI coding",
//     description: "Create a reusable modal component in React that supports open/close state, backdrop click to close, and customizable content.",
//     difficulty: "medium",
//     tags: ["React", "UI", "Components"],
//     starterCode: "export function Modal({ isOpen, onClose, children }) {\n  // your code here\n}",
//     solutionCode: "export function Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n  return (\n    <div className='modal-bg' onClick={onClose}>\n      <div className='modal-content' onClick={(e) => e.stopPropagation()}>\n        {children}\n      </div>\n    </div>\n  );\n}",
//     createdAt: "2024-06-11T12:00:00Z",
//     duration: 50
//   },
//   {
//     id: "10",
//     title: "Accordion Component",
//     category: "UI coding",
//     description: "Build an accordion component with React where only one panel can be expanded at a time.",
//     difficulty: "easy",
//     tags: ["React", "Accordion", "UI"],
//     starterCode: "export function Accordion() {\n  // your code here\n}",
//     solutionCode: "export function Accordion() {\n  const [openIndex, setOpenIndex] = useState(null);\n  const toggle = (index) => {\n    setOpenIndex(openIndex === index ? null : index);\n  };\n  return (\n    <div>\n      {[1, 2, 3].map((item, i) => (\n        <div key={i}>\n          <button onClick={() => toggle(i)}>Panel {i + 1}</button>\n          {openIndex === i && <p>Content for panel {i + 1}</p>}\n        </div>\n      ))}\n    </div>\n  );\n}",
//     createdAt: "2024-06-12T12:00:00Z",
//     duration: 30
//   },
//   {
//     id: "11",
//     title: "Dark Mode Toggle",
//     category: "UI coding",
//     description: "Create a dark mode toggle switch in React that switches between light and dark themes using Tailwind CSS.",
//     difficulty: "easy",
//     tags: ["React", "Tailwind CSS", "Themes"],
//     starterCode: "export default function ThemeToggle() {\n  // your code here\n  return <button>Toggle Theme</button>;\n}",
//     solutionCode: "export default function ThemeToggle() {\n  const [dark, setDark] = useState(false);\n  return (\n    <div className={dark ? 'dark' : ''}>\n      <button onClick={() => setDark(!dark)}>Toggle Theme</button>\n    </div>\n  );\n}",
//     createdAt: "2024-06-13T12:00:00Z",
//     duration: 20
//   },
//   {
//     id: "12",
//     title: "Palindrome Checker",
//     category: "Algo coding",
//     description: "Create a function that checks if a given string is a palindrome (same forwards and backwards).",
//     difficulty: "easy",
//     tags: ["JavaScript", "Strings", "Logic"],
//     starterCode: "function isPalindrome(str) {\n  // your code here\n}",
//     solutionCode: "function isPalindrome(str) {\n  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return clean === clean.split('').reverse().join('');\n}",
//     createdAt: "2024-06-13T14:00:00Z",
//     duration: 15
//   },
//   {
//     id: "13",
//     title: "Image Slider in React",
//     category: "UI coding",
//     description: "Build an image slider component in React with next/previous buttons and auto-slide feature.",
//     difficulty: "medium",
//     tags: ["React", "Components", "UI"],
//     starterCode: "export default function Slider() {\n  // your code here\n  return <div>Image Slider</div>;\n}",
//     solutionCode: "export default function Slider() {\n  const [index, setIndex] = useState(0);\n  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];\n  useEffect(() => {\n    const interval = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);\n    return () => clearInterval(interval);\n  }, []);\n  return (\n    <div>\n      <img src={images[index]} />\n      <button onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}>Prev</button>\n      <button onClick={() => setIndex((i) => (i + 1) % images.length)}>Next</button>\n    </div>\n  );\n}",
//     createdAt: "2024-06-13T16:00:00Z",
//     duration: 45
//   },
//   {
//     id: "14",
//     title: "Flatten Nested Array",
//     category: "Algo coding",
//     description: "Write a function to flatten an arbitrarily nested array into a single-level array.",
//     difficulty: "hard",
//     tags: ["JavaScript", "Recursion", "Arrays"],
//     starterCode: "function flattenArray(arr) {\n  // your code here\n}",
//     solutionCode: "function flattenArray(arr) {\n  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);\n}",
//     createdAt: "2024-06-13T17:30:00Z",
//     duration: 50
//   },
//   {
//     id: "15",
//     title: "LocalStorage Counter",
//     category: "JS functions",
//     description: "Build a counter in JavaScript that stores its value in localStorage so it persists on page refresh.",
//     difficulty: "easy",
//     tags: ["JavaScript", "localStorage", "DOM"],
//     starterCode: "let count = 0;\n// your code here to sync with localStorage",
//     solutionCode: "let count = localStorage.getItem('count') || 0;\ndocument.getElementById('increment').addEventListener('click', () => {\n  count++;\n  localStorage.setItem('count', count);\n  document.getElementById('value').innerText = count;\n});",
//     createdAt: "2024-06-13T19:00:00Z",
//     duration: 25
//   },
//   {
//     id: "16",
//     title: "Infinite Scroll List",
//     category: "UI coding",
//     description: "Implement infinite scroll in a list where new items are fetched and added as the user scrolls down.",
//     difficulty: "medium",
//     tags: ["React", "Scrolling", "Hooks"],
//     starterCode: "export default function InfiniteScroll() {\n  // your code here\n  return <div>Scroll List</div>;\n}",
//     solutionCode: "export default function InfiniteScroll() {\n  const [items, setItems] = useState([...Array(20).keys()]);\n  useEffect(() => {\n    const handleScroll = () => {\n      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {\n        setItems(prev => [...prev, ...Array(10).keys().map(i => i + prev.length)]);\n      }\n    };\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, []);\n  return <ul>{items.map(i => <li key={i}>Item {i}</li>)}</ul>;\n}",
//     createdAt: "2024-06-13T20:00:00Z",
//     duration: 40
//   },
//   {
//     id: "17",
//     title: "Debounce Input Search",
//     category: "JS functions",
//     description: "Create an input field with a debounce function that fetches suggestions from an API only after the user stops typing.",
//     difficulty: "medium",
//     tags: ["JavaScript", "Debounce", "API"],
//     starterCode: "function debounce(fn, delay) {\n  // your debounce logic here\n}\n\n// Use with input element",
//     solutionCode: "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\ndocument.getElementById('search').addEventListener('input', debounce((e) => {\n  fetch(`/api?q=${e.target.value}`).then(res => res.json()).then(console.log);\n}, 500));",
//     createdAt: "2024-06-13T21:00:00Z",
//     duration: 35
//   },
//   {
//     id: "18",
//     title: "Sticky Header on Scroll",
//     category: "UI coding",
//     description: "Implement a sticky header in plain HTML/CSS/JS that remains fixed at the top when scrolling.",
//     difficulty: "easy",
//     tags: ["CSS", "HTML", "JavaScript"],
//     starterCode: "<header id=\"main-header\">Header</header>\n<script>\n// your code here\n</script>",
//     solutionCode: "<header id=\"main-header\" style=\"position: sticky; top: 0; background: white; z-index: 1000;\">Header</header>",
//     createdAt: "2024-06-13T22:00:00Z",
//     duration: 15
//   },
//   {
//     id: "19",
//     title: "Binary Search Algorithm",
//     category: "Algo coding",
//     description: "Write a binary search function that returns the index of a number in a sorted array.",
//     difficulty: "medium",
//     tags: ["JavaScript", "Algorithms", "Search"],
//     starterCode: "function binarySearch(arr, target) {\n  // your code here\n}",
//     solutionCode: "function binarySearch(arr, target) {\n  let low = 0, high = arr.length - 1;\n  while (low <= high) {\n    let mid = Math.floor((low + high) / 2);\n    if (arr[mid] === target) return mid;\n    else if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}",
//     createdAt: "2024-06-13T23:00:00Z",
//     duration: 30
//   },
//   {
//     id: "20",
//     title: "Generate Random Password",
//     category: "JS functions",
//     description: "Create a function that generates a secure random password with uppercase, lowercase, digits, and special characters.",
//     difficulty: "easy",
//     tags: ["JavaScript", "Security", "Strings"],
//     starterCode: "function generatePassword(length) {\n  // your code here\n}",
//     solutionCode: "function generatePassword(length) {\n  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';\n  let result = '';\n  for (let i = 0; i < length; i++) {\n    result += chars.charAt(Math.floor(Math.random() * chars.length));\n  }\n  return result;\n}",
//     createdAt: "2024-06-14T00:00:00Z",
//     duration: 10
//   }
// ];

export async function GET() {
  return NextResponse.json(challenges);
}

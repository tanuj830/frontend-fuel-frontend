// app/api/questions/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  const questions = [
    {
      id: "ui-react-001",
      title: "Build a Responsive Navbar in React",
      category: "UI coding",
      description: `
<p><strong>Description:</strong></p>
<p>
  In this task, you are required to <strong>create a responsive navigation bar</strong> using <strong>React</strong>. The navbar should dynamically adapt its layout based on the screen size. On larger screens, the navigation links should be displayed horizontally in a typical top menu format. On smaller screens (e.g., mobile devices), the navbar should collapse into a <em>hamburger menu</em> that reveals or hides the navigation links when clicked.
</p>

<p><strong>Features your solution should include:</strong></p>
<ul>
  <li>A navigation bar that stays at the top of the page.</li>
  <li>A responsive layout using <code>flexbox</code> or <code>grid</code>.</li>
  <li>A hamburger button that toggles the visibility of the links on smaller devices.</li>
  <li>Smooth transitions or animations (optional but encouraged).</li>
</ul>

<p><strong>Bonus Points:</strong></p>
<ul>
  <li>Use <code>Tailwind CSS</code> for styling and responsiveness.</li>
  <li>Make the component reusable and customizable.</li>
  <li>Ensure accessibility by using proper <code>aria</code> attributes.</li>
</ul>

<p><strong>Example Starter Code:</strong></p>
<pre><code>function Navbar() {
  return (
    &lt;nav&gt;
      {/* Your code here */}
    &lt;/nav&gt;
  );
}

export default Navbar;
</code></pre>

<p><strong>What You’ll Learn:</strong></p>
<ul>
  <li>How to build responsive UI components in React.</li>
  <li>Using media queries or Tailwind’s responsive utilities.</li>
  <li>Working with conditional rendering and state toggling.</li>
</ul>
`,
      difficulty: "medium",
      tags: ["react", "responsive design", "navbar", "css", "javascript"],
      starterCode: "function Navbar() {\n  return (\n    <nav>\n      {/* Your code here */}\n    </nav>\n  );\n}\n\nexport default Navbar;",
      solutionCode: "import React, { useState } from 'react';\n\nfunction Navbar() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <nav className=\"bg-gray-800 text-white p-4\">\n      <div className=\"container mx-auto flex justify-between items-center\">\n        <h1 className=\"text-xl font-bold\">Logo</h1>\n        <button className=\"md:hidden\" onClick={() => setIsOpen(!isOpen)}>\n          ☰\n        </button>\n        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>\n          <li>Home</li>\n          <li>About</li>\n          <li>Contact</li>\n        </ul>\n      </div>\n    </nav>\n  );\n}\n\nexport default Navbar;",
      author: "Tanuj Bhatt",
      hint: "Use Tailwind CSS or media queries to toggle menu visibility.",
      solvedBy: 120,
      createdAt: "2024-04-01T10:00:00",
      updatedAt: "2024-04-15T08:30:00",
      duration: 20,
      previewImage: "https://example.com/images/navbar-preview.png",
      videoExplanation: "https://example.com/videos/navbar-explainer.mp4",
      skillLevel: "Intermediate",
      estimatedReadingTime: 5,
      solved: false,
      solvedOn: null,
      isPremium: false,
      isFeatured: true,
      likes: 340,
      questionXP: 100
    },
    {
      id: "ui-react-002",
      title: "Create a Custom Modal Component in React",
      category: "UI coding",
      description: "Design and build a reusable modal component in React with open/close functionality and overlay.",
      difficulty: "easy",
      tags: ["react", "modal", "hooks", "css", "ui"],
      starterCode: "function Modal({ isOpen, onClose }) {\n  if (!isOpen) return null;\n  return (\n    <div className=\"modal\">\n      {/* Your code here */}\n    </div>\n  );\n}\n\nexport default Modal;",
      solutionCode: "function Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n\n  return (\n    <div className=\"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center\">\n      <div className=\"bg-white p-6 rounded shadow-lg\">\n        <button onClick={onClose} className=\"float-right\">✕</button>\n        {children}\n      </div>\n    </div>\n  );\n}\n\nexport default Modal;",
      author: "Tanuj Bhatt",
      hint: "Use portals or conditional rendering and absolute positioning.",
      solvedBy: 85,
      createdAt: "2024-04-05T12:00:00",
      updatedAt: "2024-04-20T09:15:00",
      duration: 15,
      previewImage: "https://example.com/images/modal-preview.png",
      videoExplanation: "https://example.com/videos/modal-tutorial.mp4",
      skillLevel: "Beginner",
      estimatedReadingTime: 3,
      solved: false,
      solvedOn: null,
      isPremium: false,
      isFeatured: false,
      likes: 200,
      questionXP: 60
    },
    {
      id: "ui-react-003",
      title: "Implement a Drag and Drop Todo List",
      category: "UI coding",
      description: "Build a Todo List where items can be reordered using drag-and-drop functionality.",
      difficulty: "hard",
      tags: ["react", "drag and drop", "todo", "dnd-kit", "framer-motion"],
      starterCode: "function TodoList() {\n  return (\n    <div>\n      {/* Your code here */}\n    </div>\n  );\n}\n\nexport default TodoList;",
      solutionCode: "// Using dnd-kit\nimport { DndContext, closestCenter } from '@dnd-kit/core';\n// Continue with setting up DnDProvider, sortable context, etc.\n\nfunction TodoList() {\n  // drag logic here\n  return <div>{/* Draggable todo items */}</div>;\n}",
      author: "Tanuj Bhatt",
      hint: "Use libraries like dnd-kit or react-beautiful-dnd.",
      solvedBy: 55,
      createdAt: "2024-04-10T14:00:00",
      updatedAt: "2024-04-21T11:30:00",
      duration: 30,
      previewImage: "https://example.com/images/todo-dnd-preview.png",
      videoExplanation: "https://example.com/videos/todo-dnd-explainer.mp4",
      skillLevel: "Advanced",
      estimatedReadingTime: 6,
      solved: false,
      solvedOn: null,
      isPremium: true,
      isFeatured: true,
      likes: 410,
      questionXP: 150
    },
    {
      "id": "191",
      "title": "Find the Intersection of Two Arrays",
      "category": "Algo coding",
      "description": `
        <p>Given two arrays <code>nums1</code> and <code>nums2</code>, write a function to compute their intersection. Each element in the result should appear as many times as it shows in both arrays. The result can be in any order.</p>
        <pre><code>
    function intersection(nums1, nums2) {
      // your code here
    }
        </code></pre>
        <p><strong class="example">Example 1:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong>&nbsp;<span class="example-io">nums1 = [1,2,2,1]</span>, <span class="example-io">nums2 = [2,2]</span></p>
        <p><strong>Output:</strong>&nbsp;<span class="example-io">[2, 2]</span></p>
        <p><strong>Explanation:</strong></p>
        <p>The intersection of <code>[1,2,2,1]</code> and <code>[2,2]</code> is <code>[2, 2]</code>.</p>
        </div>
        <p><strong class="example">Example 2:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong>&nbsp;<span class="example-io">nums1 = [4,9,5]</span>, <span class="example-io">nums2 = [9,4,9,8,4]</span></p>
        <p><strong>Output:</strong>&nbsp;<span class="example-io">[4, 9]</span></p>
        <p><strong>Explanation:</strong></p>
        <p>The intersection of <code>[4,9,5]</code> and <code>[9,4,9,8,4]</code> is <code>[4, 9]</code>.</p>
        </div>
      `,
      "difficulty": "easy",
      "completed": false,
      "tags": ["Array", "Set"],
      "starterCode": "function intersection(nums1, nums2) {\n  \n}",
      "solutionCode": `
        <p>
          To solve this, we can use a set to find the intersection between two arrays. A set is a data structure that allows us to store unique elements. By converting the first array to a set, we can then filter out the elements from the second array that are present in that set.
        
          Here’s the approach:
          - Convert the first array to a set.
          - Iterate over the second array and add the elements to the result if they exist in the set.
          - This will ensure that we get the intersection of both arrays.</p>
        <pre>
      <code>
      function intersection(nums1, nums2) {
        const set1 = new Set(nums1);
        return nums2.filter(num => set1.has(num));
      }
      </code>
      </pre>`,
      "author": "Tanuj Bhatt",
      "solvedBy": 180,
      "createdAt": "2024-06-01T12:00:00Z",
      "updatedAt": "2024-06-01T12:00:00Z",
      "duration": 20,  // Integer duration in minutes
      "previewImage": "/images/intersection-of-arrays.png",
      "videoExplanation": "https://youtube.com/example2",
      "skillLevel": ["Beginner"],
      "estimatedReadingTime": 5,
      "isPremium": false,
      "isFeatured": true,
      "likes": 240,
      "comments": [],
      "mainFunction": "intersection",
      "testCases": [
      { "inputs": ["[1,2,2,1]", "[2,2]"], "expectedOutput": "[2, 2]" },
      { "inputs": ["[4,9,5]", "[9,4,9,8,4]"], "expectedOutput": "[4, 9]" },
      { "inputs": ["[1,2,3]", "[4,5,6]"], "expectedOutput": "[]" },
      { "inputs": ["[1,2,3]", "[3,2]", "[1]"], "expectedOutput": "[2]" }
    ]
    }
    ,
    {
      id: "190",
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
        <p><strong>inputs:</strong>&nbsp;<span class="example-io">nums = [3,0,1]</span></p>
        <p><strong>Output:</strong>&nbsp;<span class="example-io">2</span></p>
        <p><strong>Explanation:</strong></p>
        <p><code>n = 3</code>&nbsp;since there are 3 numbers, so all numbers are in the range&nbsp;<code>[0,3]</code>. 2 is the missing number in the range since it does not appear in&nbsp;<code>nums</code>.</p>
        </div>
        <p><strong class="example">Example 2:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong>&nbsp;<span class="example-io">nums = [0,1]</span></p>
        <p><strong>Output:</strong>&nbsp;<span class="example-io">2</span></p>
        <p><strong>Explanation:</strong></p>
        <p><code>n = 2</code>&nbsp;since there are 2 numbers, so all numbers are in the range&nbsp;<code>[0,2]</code>. 2 is the missing number in the range since it does not appear in&nbsp;<code>nums</code>.</p>
        </div>
        <p><strong class="example">Example 3:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong>&nbsp;<span class="example-io">nums = [9,6,4,2,3,5,7,0,1]</span></p>
        <p><strong>Output:</strong>&nbsp;<span class="example-io">8</span></p>
        <p><strong>Explanation:</strong></p>
        <p><code>n = 9</code>&nbsp;since there are 9 numbers, so all numbers are in the range&nbsp;<code>[0,9]</code>. 8 is the missing number in the range since it does not appear in&nbsp;<code>nums</code>.</p>
        </div>
      `,
      difficulty: "easy",
      completed: false,
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
      duration: 20,  // Integer duration in minutes
      previewImage: "/images/missing-number.png",
      videoExplanation: "https://youtube.com/example1",
      skillLevel: ["Beginner"],
      estimatedReadingTime: 5,
      isPremium: false,
      isFeatured: true,
      likes: 240,
      comments: [],
      mainFunction: "missingNumber",
      testCases: [
        { inputs: "[3, 0, 1]", expectedOutput: "2" },
        { inputs: "[0, 1]", expectedOutput: "2" },
        { inputs: "[9, 6, 4, 2, 3, 5, 7, 0, 1]", expectedOutput: "8" }
      ]
    },
    {
      id: "2112",
      title: "Reverse a String",
      category: "JS functions",
      description: `
        <p>Write a function that reverses a given string.</p>
        <pre><code>
    function reverseString(str) {
      // your code here
    }
        </code></pre>
        <p><strong class="example">Example 1:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong> <span class="example-io">str = "hello"</span></p>
        <p><strong>Output:</strong> <span class="example-io">"olleh"</span></p>
        </div>
      `,
      difficulty: "easy",
      completed: false,
      tags: ["String", "Two Pointers"],
      starterCode: "function reverseString(str) {\n  \n}",
      solutionCode: `
        <p>We can split the string into an array, reverse it, and join it back.</p>
        <pre><code>
    function reverseString(str) {
      return str.split('').reverse().join('');
    }
        </code></pre>
      `,
      author: "Tanuj Bhatt",
      solvedBy: 170,
      createdAt: "2024-06-01T14:00:00Z",
      updatedAt: "2024-06-01T14:00:00Z",
      duration: 10,
      previewImage: "/images/reverse-string.png",
      videoExplanation: "https://youtube.com/example3",
      skillLevel: ["Beginner"],
      estimatedReadingTime: 3,
      isPremium: false,
      isFeatured: true,
      likes: 90,
      comments: [],
      mainFunction: "reverseString",
      testCases: [
        { inputs: '"hello"', expectedOutput: '"olleh"' },
        { inputs: '"world"', expectedOutput: '"dlrow"' },
        { inputs: '"a"', expectedOutput: '"a"' }
      ]
    },
    {
      id: "2113",
      title: "Check for Palindrome",
      category: "JS functions",
      description: `
        <p>Write a function to check if a given string is a palindrome (reads the same backward as forward).</p>
        <pre><code>
    function isPalindrome(str) {
      // your code here
    }
        </code></pre>
        <p><strong class="example">Example 1:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong> <span class="example-io">str = "madam"</span></p>
        <p><strong>Output:</strong> <span class="example-io">true</span></p>
        </div>
      `,
      difficulty: "easy",
      completed: false,
      tags: ["String", "Two Pointers"],
      starterCode: "function isPalindrome(str) {\n  \n}",
      solutionCode: `
        <p>Compare the original string with its reversed version.</p>
        <pre><code>
    function isPalindrome(str) {
      return str === str.split('').reverse().join('');
    }
        </code></pre>
      `,
      author: "Tanuj Bhatt",
      solvedBy: 140,
      createdAt: "2024-06-01T15:00:00Z",
      updatedAt: "2024-06-01T15:00:00Z",
      duration: 10,
      previewImage: "/images/palindrome.png",
      videoExplanation: "https://youtube.com/example4",
      skillLevel: ["Beginner"],
      estimatedReadingTime: 3,
      isPremium: false,
      isFeatured: false,
      likes: 80,
      comments: [],
      mainFunction: "isPalindrome",
      testCases: [
        { inputs: '"madam"', expectedOutput: 'true' },
        { inputs: '"racecar"', expectedOutput: 'true' },
        { inputs: '"hello"', expectedOutput: 'false' }
      ]
    },
    {
      id: "2114",
      title: "Find Maximum Number",
      category: "JS functions",
      description: `
        <p>Write a function that finds the maximum number in an array of numbers.</p>
        <pre><code>
    function findMax(arr) {
      // your code here
    }
        </code></pre>
        <p><strong class="example">Example 1:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong> <span class="example-io">arr = [1, 5, 3, 9, 2]</span></p>
        <p><strong>Output:</strong> <span class="example-io">9</span></p>
        </div>
      `,
      difficulty: "easy",
      completed: false,
      tags: ["Array", "Math"],
      starterCode: "function findMax(arr) {\n  \n}",
      solutionCode: `
        <p>Use Math.max with the spread operator to find the maximum.</p>
        <pre><code>
    function findMax(arr) {
      return Math.max(...arr);
    }
        </code></pre>
      `,
      author: "Tanuj Bhatt",
      solvedBy: 125,
      createdAt: "2024-06-01T16:00:00Z",
      updatedAt: "2024-06-01T16:00:00Z",
      duration: 10,
      previewImage: "/images/find-max.png",
      videoExplanation: "https://youtube.com/example5",
      skillLevel: ["Beginner"],
      estimatedReadingTime: 3,
      isPremium: false,
      isFeatured: false,
      likes: 85,
      comments: [],
      mainFunction: "findMax",
      testCases: [
        { inputs: '[1, 5, 3, 9, 2]', expectedOutput: '9' },
        { inputs: '[10, 20, 5]', expectedOutput: '20' },
        { inputs: '[7]', expectedOutput: '7' }
      ]
    }
,    
    {
      id: "2111",
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
        <p><strong>inputs:</strong> <span class="example-io">nums = [2,2,1]</span></p>
        <p><strong>Output:</strong> <span class="example-io">1</span></p>
        </div>
        <p><strong class="example">Example 2:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong> <span class="example-io">nums = [4,1,2,1,2]</span></p>
        <p><strong>Output:</strong> <span class="example-io">4</span></p>
        </div>
      `,
      difficulty: "easy",
      completed: false,
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
      duration: 20,  // Integer duration in minutes
      previewImage: "/images/single-number.png",
      videoExplanation: "https://youtube.com/example2",
      skillLevel: ["Beginner"],
      estimatedReadingTime: 5,
      isPremium: false,
      isFeatured: true,
      likes: 120,
      comments: [],
      mainFunction: "singleNumber",
      testCases: [
        { inputs: "[2, 2, 1]", expectedOutput: "1" },
        { inputs: "[4, 1, 2, 1, 2]", expectedOutput: "4" },
        { inputs: "[1]", expectedOutput: "1" }
      ]
    },
    {
      id: "31111",
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
        <p><strong>inputs:</strong> <span class="example-io">nums = [2,7,11,15], target = 9</span></p>
        <p><strong>Output:</strong> <span class="example-io">[0,1]</span></p>
        </div>
        <p><strong class="example">Example 2:</strong></p>
        <div class="example-block">
        <p><strong>inputs:</strong> <span class="example-io">nums = [3,2,4], target = 6</span></p>
        <p><strong>Output:</strong> <span class="example-io">[1,2]</span></p>
        </div>
      `,
      difficulty: "easy",
      completed: false,
      tags: ["Array", "Hash Map"],
      starterCode: "function twoSum(nums, target) {\n  \n}",
      solutionCode: `
        <p>We can use a hash map to store the numbers we have seen, and check if the complement exists in the map.</p>
        <pre><code>
  function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
  }
        </code></pre>
      `,
      author: "Tanuj Bhatt",
      solvedBy: 130,
      createdAt: "2024-06-01T14:00:00Z",
      updatedAt: "2024-06-01T14:00:00Z",
      duration: 25,  // Integer duration in minutes
      previewImage: "/images/two-sum.png",
      videoExplanation: "https://youtube.com/example3",
      skillLevel: ["Beginner"],
      estimatedReadingTime: 5,
      isPremium: false,
      isFeatured: true,
      likes: 140,
      comments: [],
      mainFunction: "twoSum",
      testCases: [
        { inputs: ["[2, 7, 11, 15]", "9"], expectedOutput: "[0,1]" },
        { inputs: ["[3, 2, 4]", "6"], expectedOutput: "[1,2]" },
        { inputs: ["[1, 2, 3, 4]", "7"], expectedOutput: "[2,3]" }
      ]
      
    }
  ];

  return NextResponse.json(questions);
}

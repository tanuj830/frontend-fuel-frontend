// /app/api/challenges/route.ts (with integer duration)
import { NextResponse } from "next/server";


export const challenges = [
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


export async function GET() {
  return NextResponse.json(challenges);
}

// app/api/questions/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  const featuredQuestions = [
    {
      id: "6811d19fd08b563ba4f9b3ef",
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
      id: "6804d5946d72ae368f552436",
      title: "Find the Intersection of Two Arrays",
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
      id: "6804d3b46d72ae368f552435",
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
  ];

  return NextResponse.json(featuredQuestions);
}

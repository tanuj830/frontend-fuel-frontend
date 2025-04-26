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
    }
  ];

  return NextResponse.json(questions);
}

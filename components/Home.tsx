import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Master Frontend Interviews with Confidence
          </h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive platform for React UI challenges, JavaScript algorithms, and function-based questions.
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-foreground transition">
            Start Preparing Now
          </button>
        </div>

        <div className="mt-10 md:mt-0">
          <Image 
            src="/hero-illustration.png" 
            alt="Hero Illustration" 
            width={500} 
            height={400} 
            className="mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-sidebar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-chart-1 text-2xl">{"</>"}</span>
              <h2 className="text-xl font-semibold">Interactive React Challenges</h2>
            </div>
            <p className="text-muted-foreground">
              Simulate real-world problems to enhance your React skills.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-chart-2 text-2xl">🔢</span>
              <h2 className="text-xl font-semibold">JavaScript Algorithm Practice</h2>
            </div>
            <p className="text-muted-foreground">
              Tackle DSA problems tailored for JavaScript.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-chart-3 text-2xl">⚙️</span>
              <h2 className="text-xl font-semibold">Function-Based Questions</h2>
            </div>
            <p className="text-muted-foreground">
              Deepen your understanding of JavaScript functions with targeted exercises.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-chart-4 text-2xl">📈</span>
              <h2 className="text-xl font-semibold">Progress Tracking</h2>
            </div>
            <p className="text-muted-foreground">
              Monitor your improvement over time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <p className="text-xl italic text-muted-foreground max-w-2xl mx-auto">
          "This platform transformed my interview preparation journey. The React challenges were particularly helpful!"
        </p>
        <p className="mt-4 font-semibold text-primary-foreground">— A. Kumar</p>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 px-6 md:px-20 bg-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Ace Your Frontend Interviews?
        </h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of developers enhancing their skills.
        </p>
        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary transition">
          Get Started Today
        </button>
      </section>
    </div>
  );
}

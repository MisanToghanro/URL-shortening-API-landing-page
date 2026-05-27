
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import LinkBar from "../components/LinkBar";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container mx-auto mb-20 flex flex-col-reverse items-center gap-12 py-12 md:flex-row md:justify-between ">
          <div className="space-y-6 text-center md:w-1/2 md:text-left">
            <h1 className="text-4xl font-bold text-gray-950 md:text-6xl">
              More than just shorter links
            </h1>
            <p className="mx-auto max-w-md text-gray-500 md:mx-0">
              Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>
            <button className="bg-cyan rounded-full px-8 py-3 font-medium text-white transition-opacity hover:opacity-70">
              Get Started
            </button>
          </div>

          <div className="md:w-1/2">
            <img 
              src="/assets/images/illustration-working.svg" 
              alt="Illustration of a person working at a desk" 
              className="w-full"
            />
          </div>
        </section>

        

        {/* Statistics Section */}
        <section className="bg-gray-100 px-6 py-20">
          <LinkBar/>
          
          <div className="container mx-auto mt-28 md:mt-32 ">
            <div className="mb-16 space-y-4 text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Advanced Statistics
              </h2>
              <p className="text-gray-500 mx-auto max-w-lg">
                Track how your links are performing across the web with our advanced statistics dashboard.
              </p>
            </div>
            
            <Cards />
          </div>
        </section>

        {/* CTA (Boost) Section */}
        <section className="bg-purple flex flex-col items-center justify-center p-12 py-16 bg-cover bg-no-repeat" 
        style={{backgroundImage: "url('/assets/images/bg-boost-desktop.svg')"}}>
         
          <div className="space-y-6 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-5xl">
              Boost your links today
            </h2>
            <button className="bg-cyan rounded-full px-10 py-3 font-bold transition-opacity hover:opacity-80">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

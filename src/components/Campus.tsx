export default function Campus() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
      title: "Modern Libraries"
    },
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
      title: "Research Facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&q=80",
      title: "Student Life"
    }
  ];

  return (
    <section id="campus" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Campus Life</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
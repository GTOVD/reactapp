import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data.json';


function App() {
  const cards = data.data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item}
      /*
      img={item.coverImg} 
      rating={item.stats.rating} 
      reviewCount={item.stats.reviewCount} 
      country={item.location}
      title={item.title}
      price={item.price}
      online={item.online}
      openSpots={item.openSpots}
      */
    />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>    
    </div>
  );
}

export default App;

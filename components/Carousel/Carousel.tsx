import { Carousel } from 'react-responsive-carousel'

const HomepageCarousel = ({ mobile }) => (
  <Carousel
    showThumbs={false}
    showStatus={false}
    useKeyboardArrows
    className="presentation-mode"
  >
    <div key="content-0" className="my-slide primary">
      <h1>Membresía</h1>
    </div>
    <div key="content-1" className="my-slide secondary">
      <h1>¿Cómo alquilar un libro?</h1>
    </div>
    <div key="content-2" className="my-slide secondary">
      <h1>Pon tus libros en alquiler</h1>
    </div>
    <div key="content-3" className="my-slide secondary">
      <h1>Sostenibilidad</h1>
    </div>
  </Carousel>
)

export default HomepageCarousel

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './assets/components/Header'
import Card from "./assets/components/Card"
import Footer from "./assets/components/Footer"
import Tags from "./assets/components/Tags"

const App = () => {
  return (
    <div>
      <Header titulo={"Adopta un Perrito"}/>
      <div className= "container">
      <Card
      nombre={"Chiquita"}
      url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvd0XU0MIkgulpqcuIqffD1aZyJEXbxiLiA&usqp=CAU"}
      informacion={"soy un perrito tierno y me gustaria tener un hogar contigo"}
      boton={<Tags bg="success" text="Adoptame"/>}
      />
      <Card
      nombre={"Carolina"}
      url={"https://www.kowalski.es/imagenes/cachorros-labrador-retriever/camada-labrador-04.jpg"}
      informacion={"soy un perrito tierno y me gustaria tener un hogar contigo"}
      boton={<Tags bg="primary" text="Adoptame"/>}
      
      />
      <Card
      nombre={"Max"}
      url={"https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg"}
      informacion={"soy un perrito tierno y me gustaria tener un hogar contigo"}
      boton={<Tags bg="danger" text="Adoptame"/>}
      />
      <Card
      nombre={"Kira"}
      url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMGHDWuYTUdd6ftKJl6h_s538wTagbYeBgg&usqp=CAU"}
      informacion={"soy un perrito tierno y me gustaria tener un hogar contigo"}
      boton={<Tags bg="warning" text="Adoptame"/>}
      />
      </div>
  
      

      <div className= "footer">
      <Footer
      info={"Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto.   Tenemos una variedad de perros con diferentes personalidades y tamaños,  todos en busca de una hogar amoroso.   Cada imagen captura su esencia única.   Adopta un perro y bríndale una segunda oportunidad.  Encuentra a tu compañero peludo para siempre"}
      />
        </div>
    </div>
      
  )
}

export default App
import 'bulma/css/bulma.css';
import Course from './Course';
import './App.css';
import Resim1 from './images/Resim1.jpg';
import Resim2 from './images/Resim2.jpg';
import Resim3 from './images/Resim3.jpg';
import Resim4 from './images/Resim4.jpg';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>

        </div>
      </section>


      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <Course
                image={Resim1}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam aperiam odio consectetur cumque officia molestias reprehenderit sit deleniti quaerat. Asperiores molestiae, accusantium quidem nam deleniti totam laboriosam eum quaerat."
              />
            </div>
            <div className='column'>
              <Course
                image={Resim2}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam aperiam odio consectetur cumque officia molestias reprehenderit sit deleniti quaerat. Asperiores molestiae, accusantium quidem nam deleniti totam laboriosam eum quaerat."
              />
            </div>
            <div className='column'>
              <Course
                image={Resim3}
                title="Komple Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam aperiam odio consectetur cumque officia molestias reprehenderit sit deleniti quaerat. Asperiores molestiae, accusantium quidem nam deleniti totam laboriosam eum quaerat."
              />
            </div>
            <div className='column'>
              <Course
                image={Resim4}
                title="Frontend"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam aperiam odio consectetur cumque officia molestias reprehenderit sit deleniti quaerat. Asperiores molestiae, accusantium quidem nam deleniti totam laboriosam eum quaerat."
              />

            </div>


          </div>
        </section>
      </div>








    </div>
  );
}

export default App;

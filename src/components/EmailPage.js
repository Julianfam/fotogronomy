import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

const subscribeText = 'SUBSCRIBE';

class EmailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  emailSubscriptions = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v0nv5xo', 'template_5xtcpzp', e.target, 'LYRlOjidE5geJfm1E')
      .then(
        (result) => {
          console.log(result.text);
          this.showPopup();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  showPopup = () => {
    this.setState({
      showPopup: true,
    });
    setTimeout(() => {
      this.setState({
        showPopup: false,
      });
    }, 3000); // Oculta el pop-up después de 3 segundos
  };

  render() {
    return (
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{subscribeText}</h2>
        <form className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start contact-form" onSubmit={this.emailSubscriptions}>
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">
              Sigue La Fotografía
            </label>
            <input
              type="email"
              id="footer-field"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter your email here..."
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover-bg-indigo-600 rounded cursor-pointer">
            Subscribirme
          </button>
        </form>
        {this.state.showPopup && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="w-24 h-24 bg-white border border-black p-2 text-center">
              <p className="text-xs">Gracias por suscribirte</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EmailPage;
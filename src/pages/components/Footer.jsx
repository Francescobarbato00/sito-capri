import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contacts Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTATTI</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:underline">
                Capri, Certosa di San Giacomo
              </a>
            </li>
            <li>Telefono: <a href="tel:+3906852641" className="text-white hover:underline">+39 06852641</a></li>
            <li>PEC: <a href="mailto:protocollo@pec.agid.gov.it" className="text-white hover:underline">protocollo@pec.agid.gov.it</a></li>
            <li>Email: <a href="mailto:eventodigitalizzazione@capri.com" className="text-white hover:underline">eventodigitalizzazione@capri.com</a></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">LINK UTILI</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:underline">Amministrazione trasparente</a></li>
            <li><a href="#" className="text-white hover:underline">Domande frequenti</a></li>
          </ul>
        </div>

        {/* Thematic Sites Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">TUTTI I DIRITTI RISERVATI</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:underline">Sistema Pubblico di Identità Digitale</a></li>
            <li><a href="#" className="text-white hover:underline">Piano Triennale per l'informatica nella PA</a></li>
            <li><a href="#" className="text-white hover:underline">Indice nazionale dei domicili digitali</a></li>
            <li><a href="#" className="text-white hover:underline">Developers Italia</a></li>
            <li><a href="#" className="text-white hover:underline">Designers Italia</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">SEGUICI SU</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.349C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.26h3.13V8.836c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.503 0-1.794.715-1.794 1.763v2.314h3.586l-.467 3.446h-3.119V24h6.112C23.403 24 24 23.403 24 22.675V1.326C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.922 4.922 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149 4.918 4.918 0 003.194 9.723a4.902 4.902 0 01-2.229-.616v.062a4.923 4.923 0 003.946 4.827 4.952 4.952 0 01-2.224.085 4.928 4.928 0 004.6 3.419 9.868 9.868 0 01-6.102 2.104c-.398 0-.79-.023-1.17-.068a13.95 13.95 0 007.548 2.212c9.058 0 14.01-7.507 14.01-14.01 0-.214-.005-.428-.014-.64A10.01 10.01 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-white hover:text-gray-400">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.615 3.184A3.096 3.096 0 0017.656.625C15.67 0 12 0 12 0S8.33 0 6.344.625a3.096 3.096 0 00-1.959 2.56C4 5.478 4 8.333 4 8.333s0 2.855.385 4.709a3.096 3.096 0 001.959 2.56C8.33 16.667 12 16.667 12 16.667s3.67 0 5.656-.625a3.096 3.096 0 001.959-2.56C20 11.188 20 8.333 20 8.333s0-2.855-.385-4.709zM9.545 11.188V5.479l5.455 2.854-5.455 2.855z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

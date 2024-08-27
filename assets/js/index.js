const btnAbout = document.querySelector('.btnAbout');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const divForm = document.querySelector('.div-form');
const section2 = document.querySelector('.section2');
const sumbmit = document.querySelector('.btn-info');

let isActive = false;

mostrarProyectos()

btnAbout.addEventListener('click', function () {

    if (!isActive) {
        about.innerHTML = (`
            <section class="about d-flex mt-5 justify-content-center text-light">
                <div>
                    <h2 class="d-flex justify-content-center">Sobre Mí </h2>
                    <p class="text-center">Soy Christopher Nuñez, un desarrollador web especializado en HTML, CSS y JavaScript. Me apasiona crear soluciones web innovadoras y mantenerme al día con las nuevas tecnologías. En mi tiempo libre, disfruto de los videojuegos y siempre estoy listo para nuevos desafíos.</p>
                </div>
            </section>
            <section class="about d-flex mt-5 mb-5 justify-content-center text-light">
                <div>
                    <h2 class="d-flex justify-content-center">Habilidades</h2>
                    <ul>
                        <li><svg width="24px" height="24px" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>
                                            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>
                                            <path
                                                d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                                                fill="white"></path>
                                        </g>
                                    </svg> HTML</li>
                        <li><svg width="24px" height="24px" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path>
                                            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>
                                            <path
                                                d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                                                fill="white"></path>
                                        </g>
                                    </svg> CSS</li>
                        <li><svg width="24px" height="24px" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                            stroke="#CCCCCC" stroke-width="0.8320000000000001"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect>
                                            <path
                                                d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                                                fill="#3E3E3E"></path>
                                            <path
                                                d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                                                fill="#3E3E3E"></path>
                                        </g>
                                    </svg> Javascript</li>
                    </ul>
                </div>
            </section>`);
        isActive = !isActive;
        console.log(isActive)
    } else {
        ocultarHtml(about)
        isActive = !isActive;
    }
});

sumbmit.addEventListener('submit', function (e) {
    e.preventDefault()
    reinicio()
})

function mostrarProyectos() {
    let newCard = ''
    for (const card of cards) {
        newCard += (`
                
                    <div class="card bg-dark text-white col-12 col-md-6 col-lg-4 col-xl-3 m-auto">
                            <img src="${card.img}" width="400" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">${card.cardText}</p>
                                <ul class="d-flex gap-5">
                                    <li><svg width="34px" height="34px" viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                                stroke="#CCCCCC" stroke-width="0.8320000000000001"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect>
                                                <path
                                                    d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                                                    fill="#3E3E3E"></path>
                                                <path
                                                    d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                                                    fill="#3E3E3E"></path>
                                            </g>
                                        </svg>
                                    </li>
                                    <li><svg width="34px" height="34px" viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>
                                                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>
                                                <path
                                                    d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                                                    fill="white"></path>
                                            </g>
                                        </svg>
                                    </li>
                                    <li><svg width="34px" height="34px" viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path>
                                                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>
                                                <path
                                                    d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                                                    fill="white"></path>
                                            </g>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <a href="${card.href}" class="btn btn-primary">Ver proyecto</a>
                        </div>
                    `);

    }
    projects.innerHTML = newCard;

}

function ocultarHtml(element) {
    element.innerHTML = ''
}

function reinicio() {
    const formulario = document.querySelector('#form');
    formulario.reset();
}





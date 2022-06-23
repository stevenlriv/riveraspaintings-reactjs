import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <title>Riveras Paintings</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Riveras Paintings es una compañia puertorriqueña fundada por Luis Daniel Rivera. Luis es un experto en pinturas y sellados de techos. Ha ayudado a más de 785 familias, dejándolas felices y encantadas con su trabajo." />
    <meta name="author" content />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
    <div className> 
      <section className="overflow-hidden"><div className="relative bg-white overflow-hidden" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}>
          <div className="bg-transparent">
            <nav className="flex justify-between p-6 px-4"><div className="flex justify-between items-center w-full">
                <div className="w-1/2 xl:w-1/3">
                  <a className="block max-w-max" href="#">
                    <img className="h-8" src="images/flex-ui-red-light-svg.png" alt="" /></a>
                </div>
                <div className="w-1/2 xl:w-1/3">
                  <ul className="hidden xl:flex xl:justify-center"><li className="mr-12"><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#nosotros">Nosotros</a></li>
                    <li className="mr-12"><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#servicios">Servicios</a></li>
                    <li>
                    </li></ul></div>
                <div className="w-1/2 xl:w-1/3">
                  <div className="hidden xl:flex items-center justify-end"><a className="inline-block py-2 px-4 text-sm leading-5 text-red-50 bg-red-500 hover:bg-red-600 font-medium focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md" href="#estimado">SOLICITA TU ESTIMADO</a></div>
                </div>
              </div>
              <button className="navbar-burger self-center xl:hidden">
                <svg width={35} height={35} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className="text-coolGray-50" width={32} height={32} rx={6} fill="currentColor" /><path className="text-coolGray-500" d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z" fill="currentColor" /></svg></button>
            </nav><div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
              <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
                <nav className="relative p-6 h-full overflow-y-auto"><div className="flex flex-col justify-between h-full">
                    <a className="inline-block" href="#">
                      <img className="h-8" src="flex-ui-assets/logos/flex-ui-red.svg" alt="" /></a>
                    <ul className="py-6"><li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#nosotros">Nosotros</a></li>
                      <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#servicios">Servicios</a></li>
                    </ul><div className="flex flex-wrap">
                    </div>
                  </div>
                </nav><a className="navbar-close absolute top-5 p-4 right-3" href="#">
                  <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987" /></svg></a>
              </div>
            </div>
          </div>
          <div className="pt-12 pb-28 md:pb-72">
            <div className="container px-4 mx-auto">
              <div className="mx-auto text-center max-w-3xl">
                <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-white bg-red-500 uppercase rounded-9xl">SERVICIOS A TODO PUERTO RICO</span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">PINTURAS EN INTERIOR Y EXTERIOR</h1>
                <p className="mb-8 mx-auto text-lg md:text-xl text-coolGray-500 font-medium max-w-3xl">Especialistas con más de 22 años de experiencia pintando casas, compañías y sellando techos</p>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-red-50 font-medium text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 border border-red-500 rounded-md shadow-sm" href="#estimado">SOLICITA TU ESTIMADO</a></div>
                  <div className="w-full md:w-auto py-1 md:py-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 py-20 md:pb-32 mx-auto -mt-32 md:-mt-72">
          <div className="relative mx-auto max-w-max">
            <img className="absolute z-20 -left-8 -top-8 w-28 md:w-auto" src="flex-ui-assets/elements/wave-green.svg" alt="" /><img className="absolute -right-8 -bottom-8 w-28 md:w-auto" src="flex-ui-assets/elements/wave-yellow.svg" alt="" /><div className="relative overflow-hidden rounded-7xl">
              <img src="flex-ui-assets/images/headers/placeholder-video2.png" /><video className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none" poster="images/slide-03.jpeg" muted><source src="https://static.shuffle.dev/files/video-placeholder.mp4" type="video/mp4" /></video></div>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 bg-white overflow-hidden" id="nosotros" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <div className="relative mx-auto md:ml-0 max-w-max">
                <img className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400" src="flex-ui-assets/elements/circle3-blue.svg" alt="" />
                <img className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500" src="flex-ui-assets/elements/dots3-violet.svg" alt="" />
                <img src="images/slide-01.jpeg" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-red-500 bg-red-100 font-medium uppercase rounded-full shadow-sm">NOSOTROS</span>
              <h1 className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">RIVERAS PAINTINGS</h1>
              <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">Riveras Paintings es una compañia puertorriqueña fundada por Luis Daniel Rivera. Luis es un experto en pinturas y sellados de techos. Además es excelente ayudando a personas como usted a dar el cambio a su hogar que tanto desean.</p>
              <a className="inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-red-50 bg-red-500 hover:bg-red-600 font-medium text-center focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm" href="#estimado">SOLICITA TU ESTIMADO</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white" id="servicios" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}>
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-red-500 bg-red-100 font-medium uppercase rounded-full shadow-sm">QUE HACEMOS</span>
            <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">NUESTROS SERVICIOS</h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium" />
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-xl font-semibold text-white">1</div>
                </div>
                <h3 className="md:w-64 mb-4 text-lg md:text-xl font-bold">PINTURA</h3>
                <p className="text-coolGray-500 font-medium">Trabajos en pintura residencial y comercial de alta calidad.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-xl font-semibold text-white">2</div>
                </div>
                <h3 className="md:w-64 mb-4 text-lg md:text-xl font-bold">PINTURA A REJAS</h3>
                <p className="text-coolGray-500 font-medium">Diferentes toques de creatividad y estilo a todo tipo de rejas.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-xl font-semibold text-white">3</div>
                </div>
                <h3 className="md:w-64 mb-4 text-lg md:text-xl font-bold">SELLADO DE TECHOS</h3>
                <p className="text-coolGray-500 font-medium">Tratamientos de techos duraderos con materiales de alta calidad.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
              <div className="relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-xl font-semibold text-white">4</div>
                </div>
                <h3 className="md:w-64 mb-4 text-lg md:text-xl font-bold">LAVADO A PRESION</h3>
                <p className="text-coolGray-500 font-medium">Lavados a techos, previo a sellados de techo o de ser solicitados.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 md:mb-0">
              <div className="relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-xl font-semibold text-white">5</div>
                </div>
                <h3 className="md:w-64 mb-4 text-lg md:text-xl font-bold">ESTUCO, PAREDES Y TECHOS</h3>
                <p className="text-coolGray-500 font-medium">Estuco a techos y paredes de alta calidad.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-xl font-semibold text-white">6</div>
                </div>
                <h3 className="md:w-64 mb-4 text-lg md:text-xl font-bold">MAS...</h3>
                <p className="text-coolGray-500 font-medium">Dinos cuales son tus problemas y veremos si te podemos ayudar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 xl:py-24 bg-white" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}><div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-red-500 bg-red-100 font-medium uppercase rounded-9xl">NUESTROS LOGROS</span>
              <h3 className="mb-12 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">¿PORQUÉ ESCOGERNOS A NOSOTROS?</h3>
              <div className="flex flex-wrap justify-center -mx-4 text-center">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <h2 className="mb-4 text-4xl lg:text-5xl text-coolGray-900 font-bold tracking-tighter">500+</h2>
                  <h3 className="text-lg md:text-xl text-coolGray-500 font-medium">Casas Pintadas</h3>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <h2 className="mb-4 text-4xl lg:text-5xl text-coolGray-900 font-bold tracking-tighter">22</h2>
                  <h3 className="text-lg md:text-xl text-coolGray-500 font-medium">Años de Experiencia</h3>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                  <h2 className="mb-4 text-4xl lg:text-5xl text-coolGray-900 font-bold tracking-tighter">300+</h2>
                  <h3 className="text-lg md:text-xl text-coolGray-500 font-medium">Techos Sellados</h3>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <h2 className="mb-4 text-4xl lg:text-5xl text-coolGray-900 font-bold tracking-tighter">100%</h2>
                  <h3 className="text-lg md:text-xl text-coolGray-500 font-medium">Clientes Satisfechos</h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img className="mx-auto md:mr-0" src="images/slide-02.jpeg" alt="" /></div>
          </div>
        </div>
      </section>
      <section className="py-24 md:pb-28 bg-white" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}><div className="container px-4 mx-auto">
          <div className="mb-16">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-red-500 bg-red-100 font-medium uppercase rounded-9xl">NUESTROS CLIENTES</span>
            <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-semibold tracking-tighter">TESTIMONIOS</h2>
            <p className="text-xl font-medium text-coolGray-500">Con Rivera&apos;s Paintings puedes tener la casa que sueñas.</p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md">
                <h3 className="pb-14 mb-auto text-xl md:text-2xl font-medium">Gran ética de trabajo. Limpiaron todos los días, y terminaron el trabajo en 3 días. He trabajado con ellos más de 3 veces en los últimos años.</h3>
                <h4 className="mb-1 text-lg font-semibold">Juan</h4>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md">
                <h3 className="pb-14 mb-auto text-xl md:text-2xl font-medium">Se aseguraron de hacer todo lo que acordamos hasta el final y no dejaron ningún desorden. Francamente no soy una clienta fácil de complacer y noto cada imperfección, pero el trabajo de José se lo recomendaría a cualquiera.</h3>
                <h4 className="mb-1 text-lg font-semibold">Maria</h4>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md">
                <h3 className="pb-14 mb-auto text-xl md:text-2xl font-medium">Me dieron un estimado muy rápido del trabajo que quería hacer. Hicieron más de lo que esperaba con la preparación de las paredes, el techo y la moldura para que estuviera lista para pintar. He contratado numerosos equipos de pintura, pero el equipo de José va a ser mi preferido de ahora en adelante.</h3>
                <h4 className="mb-1 text-lg font-semibold">Nathalia</h4>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 bg-white" id="estimado" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}><div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-red-500 bg-red-100 font-medium uppercase rounded-9xl">CONTACTO</span>
            <h3 className="mb-4 text-4xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">OBTEN TU ESTIMADO HOY</h3>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">Solicita tu estimado hoy llamandonos por teléfono.</p>
          </div>
          <div className="flex flex-wrap -mx-4 pb-16">
            <div className="w-full md:w-1/3 px-4 mb-10 md:mb-0">
            </div>
            <div className="w-full md:w-1/3 px-4 mb-10 md:mb-0">
              <div className="max-w-xs mx-auto text-center">
                <div className="inline-flex mb-6 items-center justify-center w-12 h-12 bg-red-500 rounded-full">
                  <svg className="h-6 text-white" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.41 13C19.1901 13 18.96 12.93 18.74 12.88C18.2949 12.7805 17.8572 12.6501 17.43 12.49C16.9661 12.3212 16.4562 12.33 15.9984 12.5146C15.5405 12.6992 15.1671 13.0466 14.95 13.49L14.73 13.95C13.7589 13.3992 12.8617 12.7271 12.0601 11.95C11.2829 11.1484 10.6108 10.2512 10.0601 9.28L10.5201 9.07C10.9634 8.85292 11.3108 8.47953 11.4954 8.02169C11.6801 7.56385 11.6888 7.05391 11.5201 6.59C11.3612 6.15903 11.231 5.71808 11.13 5.27C11.08 5.05 11.04 4.82 11.01 4.6C10.8886 3.89562 10.5197 3.25774 9.96967 2.80124C9.41967 2.34474 8.72475 2.09961 8.01005 2.11H5.00005C4.5773 2.10945 4.1592 2.19825 3.77317 2.37058C3.38714 2.54292 3.04189 2.7949 2.76005 3.11C2.47237 3.43365 2.25817 3.81575 2.13215 4.23004C2.00614 4.64432 1.97131 5.08098 2.03005 5.51C2.57364 9.67214 4.47526 13.5387 7.44005 16.51C10.4114 19.4748 14.2779 21.3764 18.4401 21.92C18.5699 21.9299 18.7002 21.9299 18.83 21.92C19.5675 21.9211 20.2794 21.6505 20.83 21.16C21.1452 20.8782 21.3971 20.5329 21.5695 20.1469C21.7418 19.7609 21.8306 19.3428 21.83 18.92V15.92C21.8247 15.229 21.5809 14.5611 21.14 14.0291C20.6991 13.4971 20.088 13.1336 19.41 13ZM19.9 19C19.8997 19.1395 19.8702 19.2775 19.8134 19.4049C19.7565 19.5324 19.6736 19.6465 19.57 19.74C19.4604 19.8399 19.33 19.9141 19.1882 19.9573C19.0464 20.0006 18.8967 20.0117 18.75 19.99C15.0183 19.5026 11.5503 17.802 8.88005 15.15C6.20752 12.4775 4.49208 8.99737 4.00005 5.25C3.97833 5.10333 3.98949 4.95367 4.03272 4.81185C4.07596 4.67003 4.1502 4.5396 4.25005 4.43C4.34467 4.32515 4.46043 4.24154 4.5897 4.18466C4.71897 4.12778 4.85882 4.09892 5.00005 4.1H8.00005C8.23121 4.09435 8.45719 4.16898 8.63951 4.3112C8.82184 4.45341 8.94925 4.65442 9.00005 4.88C9.00005 5.15 9.09005 5.43 9.15005 5.7C9.26563 6.22386 9.41937 6.73857 9.61005 7.24L8.21005 7.9C7.96941 8.01046 7.78241 8.21185 7.69005 8.46C7.59003 8.70346 7.59003 8.97654 7.69005 9.22C9.12925 12.3028 11.6073 14.7808 14.69 16.22C14.9335 16.32 15.2066 16.32 15.45 16.22C15.6982 16.1276 15.8996 15.9406 16.01 15.7L16.64 14.3C17.156 14.4881 17.6838 14.6418 18.22 14.76C18.48 14.82 18.76 14.87 19.0301 14.91C19.2556 14.9608 19.4566 15.0882 19.5989 15.2705C19.7411 15.4529 19.8157 15.6788 19.81 15.91L19.9 19ZM14 2C13.7701 2 13.53 2 13.3 2C13.0348 2.02254 12.7894 2.14952 12.6178 2.353C12.4462 2.55647 12.3625 2.81978 12.385 3.085C12.4076 3.35022 12.5346 3.59562 12.738 3.76721C12.9415 3.93881 13.2048 4.02254 13.47 4H14C15.5913 4 17.1175 4.63214 18.2427 5.75736C19.3679 6.88258 20 8.4087 20 10C20 10.18 20 10.35 20 10.53C19.9779 10.7938 20.0612 11.0556 20.2318 11.2581C20.4024 11.4606 20.6463 11.5871 20.91 11.61H20.99C21.2404 11.611 21.482 11.5181 21.6671 11.3496C21.8523 11.1811 21.9675 10.9493 21.99 10.7C21.99 10.47 21.99 10.23 21.99 10C21.9901 7.88 21.1486 5.84668 19.6504 4.34668C18.1523 2.84667 16.12 2.00265 14 2ZM16 10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4805 10.8946 16.7348 11 17 11C17.2653 11 17.5196 10.8946 17.7072 10.7071C17.8947 10.5196 18 10.2652 18 10C18 8.93913 17.5786 7.92172 16.8285 7.17157C16.0783 6.42143 15.0609 6 14 6C13.7348 6 13.4805 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7C13 7.26522 13.1054 7.51957 13.2929 7.70711C13.4805 7.89464 13.7348 8 14 8C14.5305 8 15.0392 8.21071 15.4143 8.58579C15.7893 8.96086 16 9.46957 16 10Z" fill="currentColor" /></svg></div>
                <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-800 font-bold">Teléfono</h3>
                <p className="text-xl text-coolGray-500 font-medium">(787) 904-9659</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
            </div>
          </div>
        </div>
        <div className="h-2 bg-red-500" />
      </section>
    </div>
  </div>
  )
}

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Users, Home, ShieldCheck, ChevronRight, Menu, X, Globe, BookOpen, HandHeart, Scale, ScrollText, Star, Send, Handshake, Bird, MapPin, Mail, Phone, Copy, Check, Palette, Type, MousePointer, Anchor, HandMetal, Scroll, ArrowRight, User, Plane, Coins, Baby, Landmark, Calendar, CreditCard, HelpCircle, DollarSign, Building } from 'lucide-react';

// --- COMPONENTS ---

// 1. HEADER (SHARED)
const Header = ({ currentPage, onNavigate, isMenuOpen, setIsMenuOpen }) => (
  <nav className="bg-navy-900 text-white sticky top-0 z-50 shadow-xl border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-24 items-center">
        {/* Logo Area */}
        <div 
          className="flex-shrink-0 flex items-center gap-4 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
            <img 
              src="http://menorahtothenations.com/wp-content/uploads/2025/09/cropped-cropped-4.png"
              alt="Menorah Logo" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const nextSibling = e.currentTarget.nextSibling;
                if (nextSibling instanceof HTMLElement) {
                  nextSibling.style.display = 'flex';
                }
              }}
            />
            <div className="hidden relative w-12 h-12 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-4-8a4 4 0 018 0M4 14a8 8 0 0116 0" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v-2a2 2 0 014 0v2" />
                <circle cx="12" cy="3" r="1" fill="currentColor" className="text-gold-400" />
                <circle cx="8" cy="6" r="1" fill="currentColor" className="text-gold-400" />
                <circle cx="16" cy="6" r="1" fill="currentColor" className="text-gold-400" />
              </svg>
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wider text-white">MENORAH</span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-cyan">To The Nations</span>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onNavigate('home')}
            className={`${currentPage === 'home' ? 'text-brand-cyan' : 'text-slate-300'} hover:text-white transition-colors text-sm uppercase tracking-wide font-medium`}
          >
            Inicio
          </button>
          <button 
            onClick={() => onNavigate('mission')}
            className={`${currentPage === 'mission' ? 'text-brand-cyan' : 'text-slate-300'} hover:text-white transition-colors text-sm uppercase tracking-wide font-medium`}
          >
            Nuestra Misión
          </button>
          <button 
            onClick={() => onNavigate('ministries')}
            className={`${currentPage === 'ministries' ? 'text-brand-cyan' : 'text-slate-300'} hover:text-white transition-colors text-sm uppercase tracking-wide font-medium`}
          >
            Ministerios
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`${currentPage === 'contact' ? 'text-brand-cyan' : 'text-slate-300'} hover:text-white transition-colors text-sm uppercase tracking-wide font-medium`}
          >
            Contacto
          </button>
          <button 
            onClick={() => onNavigate('donate')}
            className="bg-brand-cyan hover:bg-cyan-400 text-navy-900 px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all shadow-lg hover:shadow-cyan-400/50 transform hover:-translate-y-0.5 border border-cyan-300/20"
          >
            Donar Ahora
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-navy-800 border-t border-slate-700">
        <div className="px-4 pt-2 pb-8 space-y-2">
          <button onClick={() => {onNavigate('home'); setIsMenuOpen(false)}} className="block w-full text-left px-3 py-4 text-base font-medium text-white border-b border-slate-700">Inicio</button>
          <button onClick={() => {onNavigate('mission'); setIsMenuOpen(false)}} className="block w-full text-left px-3 py-4 text-base font-medium text-white border-b border-slate-700">Nuestra Misión</button>
          <button onClick={() => {onNavigate('ministries'); setIsMenuOpen(false)}} className="block w-full text-left px-3 py-4 text-base font-medium text-white border-b border-slate-700">Ministerios</button>
           <button onClick={() => {onNavigate('contact'); setIsMenuOpen(false)}} className="block w-full text-left px-3 py-4 text-base font-medium text-white border-b border-slate-700">Contacto</button>
          <button onClick={() => {onNavigate('donate'); setIsMenuOpen(false)}} className="w-full mt-4 bg-brand-cyan text-navy-900 px-6 py-3 rounded-full font-bold uppercase tracking-widest shadow-lg">
            Donar Ahora
          </button>
        </div>
      </div>
    )}
  </nav>
);

// 2. FOOTER (SHARED)
const Footer = ({ onNavigate }) => (
  <footer className="bg-navy-900 text-slate-400 py-12 border-t border-white/5 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-serif font-bold text-xl text-white">MENORAH</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Una corporación sin fines de lucro de Texas organizada exclusivamente para fines caritativos, religiosos y educativos.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Enlaces Rápidos</h4>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => onNavigate('mission')} className="hover:text-brand-cyan transition-colors text-left">Sobre Nosotros</button></li>
            <li><button onClick={() => onNavigate('ministries')} className="hover:text-brand-cyan transition-colors text-left">Nuestros Ministerios</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-cyan transition-colors text-left">Contacto</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li>info@menorahtothenations.org</li>
            <li>Texas, United States</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Transparencia Financiera</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Menorah To The Nations. Todos los derechos reservados.</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span>IRS 501(c)(3) Compliant Organization</span>
        </div>
      </div>
    </div>
  </footer>
);

// 3. HOME PAGE CONTENT
const HomePage = ({ onNavigate }) => (
  <>
    {/* Hero Section */}
    <div className="relative bg-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
          <img 
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Ayuda humanitaria" 
          className="w-full h-full object-cover filter grayscale sepia-[.2] contrast-125"
          />
          <div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 text-center">
        <div className="inline-block mb-6 px-4 py-1 border border-brand-cyan/30 rounded-full bg-navy-900/50 backdrop-blur-sm">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase">Registered 501(c)(3) Non-Profit</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 leading-tight">
          Restaurando la Dignidad. <br/>
          <span className="text-brand-cyan italic drop-shadow-lg">Preservando la Esperanza.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 font-light leading-relaxed mb-10">
          Cumpliendo el mandato bíblico de cuidar a la viuda, al huérfano y al necesitado. Extendemos la luz de la compasión desde Texas hasta las naciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => onNavigate('donate')}
            className="bg-brand-cyan hover:bg-cyan-400 text-navy-900 px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest transition-all shadow-xl hover:shadow-cyan-400/40 w-full sm:w-auto border border-cyan-400/50"
          >
            Extiende tu mano hoy
          </button>
          <button 
            onClick={() => onNavigate('mission')}
            className="bg-transparent border border-white/30 hover:border-brand-cyan hover:text-brand-cyan text-white px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest transition-all w-full sm:w-auto backdrop-blur-sm"
          >
            Conoce nuestra labor
          </button>
        </div>
      </div>
    </div>

    {/* Mission Summary (Short Version for Home) */}
    <section id="mision" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <ScrollText className="w-10 h-10 text-brand-cyan mx-auto mb-4" />
         <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Nuestra Esencia</h2>
         <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
           Menorah for the Nations es una organización sin fines de lucro dedicada a vivir el mandato bíblico de cuidar a viudas y huérfanos. Operamos bajo los valores de la Torá y la guía rabínica, construyendo puentes de compasión.
         </p>
         <div className="mt-8">
           <button onClick={() => onNavigate('mission')} className="text-navy-900 font-bold uppercase text-xs tracking-widest border-b-2 border-brand-cyan hover:text-brand-cyan transition-colors pb-1">Leer Misión Completa</button>
         </div>
      </div>
    </section>

    {/* The 3 Pillars */}
    <section id="ministerios" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-navy-500 font-bold tracking-widest uppercase text-sm">Nuestros Ministerios</span>
          <h2 className="text-4xl font-serif font-bold text-navy-900 mt-3">Pilares de Justicia y Compasión</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Pillar 1: Widows */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-cyan group relative overflow-hidden">
            <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-cyan transition-colors duration-300">
              <Heart className="w-8 h-8 text-navy-900 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Apoyo a Viudas</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Brindamos dignidad y protección a través de asistencia financiera, combatiendo el aislamiento con comunidad y apoyo espiritual.
            </p>
          </div>

          {/* Pillar 2: Orphans */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-navy-900 group">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-navy-900 transition-colors duration-300">
              <Users className="w-8 h-8 text-navy-900 group-hover:text-brand-cyan transition-colors" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Cuidado de Huérfanos</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Construimos un futuro con propósito mediante educación, mentoría y cobertura de necesidades médicas.
            </p>
          </div>

          {/* Pillar 3: Community */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-cyan group">
            <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand-cyan transition-colors duration-300">
              <HandHeart className="w-8 h-8 text-navy-900 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Alcance Comunitario</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Practicamos <em>Tikkun Olam</em> (reparación del mundo) mediante alivio a la pobreza y fortalecimiento de comunidades.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <button onClick={() => onNavigate('ministries')} className="bg-navy-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-navy-800 flex items-center gap-2 mx-auto">
                 Ver Todos los Ministerios <ArrowRight size={16} />
             </button>
        </div>
      </div>
    </section>

    {/* Pattern Break - Biblical Banner */}
    <section className="bg-navy-900 py-20 relative overflow-hidden border-b border-brand-cyan/20">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transform pointer-events-none"></div>
      <div className="absolute top-0 right-1/3 w-64 h-full bg-gradient-to-l from-transparent via-brand-cyan/5 to-transparent -skew-x-12 transform pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <BookOpen className="w-8 h-8 text-brand-cyan mx-auto mb-6 opacity-60" />
        <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-8">
          "Aprended a hacer el bien; buscad el juicio, restituid al agraviado, haced justicia al huérfano, amparad a la viuda."
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-brand-cyan w-16 opacity-50"></div>
          <span className="text-brand-cyan font-bold tracking-[0.25em] uppercase text-sm">Isaías 1:17</span>
          <div className="h-px bg-brand-cyan w-16 opacity-50"></div>
        </div>
      </div>
    </section>

    {/* Nuestro Impacto */}
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(#1E293B 1.5px, transparent 1.5px)`,
             backgroundSize: '24px 24px',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
           }}>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
          <span className="text-brand-cyan font-bold tracking-widest uppercase text-xs mb-2 block">Alcance Global</span>
          <h2 className="text-4xl font-serif font-bold text-navy-900">Nuestro Impacto</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-cyan group-hover:text-navy-900 transition-all text-navy-900">
               <Star className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif">1 Misión</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Con huérfanos, viudas y comunidades.</p>
          </div>
           {/* Card 2 */}
          <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-cyan group-hover:text-navy-900 transition-all text-navy-900">
               <Send className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif">Primeros Viajes</h3>
            <p className="text-slate-500 text-sm leading-relaxed">En preparación para el impacto global.</p>
          </div>
           {/* Card 3 */}
          <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-cyan group-hover:text-navy-900 transition-all text-navy-900">
               <Handshake className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif">100% Sin Fines de Lucro</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Gestión transparente y verificada.</p>
          </div>
           {/* Card 4 */}
          <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-cyan group-hover:text-navy-900 transition-all text-navy-900">
               <Bird className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif">Compromiso Solidario</h3>
            <p className="text-slate-500 text-sm leading-relaxed">6 Proyectos en desarrollo activo.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Transparency Section */}
    <section id="transparencia" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-brand-cyan" />
              <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm">Integridad y Confianza</span>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6">Mayordomía Transparente</h2>
            <p className="text-slate-300 mb-6 leading-relaxed text-lg font-light">
              Operamos bajo la estricta supervisión de nuestra Junta Directiva y en cumplimiento total con las regulaciones 501(c)(3) del IRS.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center mt-1 text-brand-cyan">✓</div>
                <div><strong className="block text-white font-serif">Supervisión de la Junta</strong></div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center mt-1 text-brand-cyan">✓</div>
                <div><strong className="block text-white font-serif">Cumplimiento IRS & OFAC</strong></div>
              </li>
            </ul>
          </div>
          <div className="relative">
             <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl relative">
                <div className="space-y-6 opacity-90">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                     <span className="font-serif text-lg">Estatus Legal</span>
                     <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold uppercase">Activo</span>
                  </div>
                   <div className="flex items-center justify-between pb-2">
                     <span className="font-serif text-lg">Tipo</span>
                     <span className="text-slate-300 text-sm text-right">501(c)(3) Public Charity</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact CTA Section */}
    <section id="contacto" className="py-24 bg-brand-light relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">¿Listo para hacer la diferencia?</h2>
          <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto">
             Ya sea donando, ofreciendo tu tiempo como voluntario o compartiendo nuestra misión, tu participación es vital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button onClick={() => onNavigate('contact')} className="bg-white text-navy-900 border border-slate-200 hover:border-brand-cyan px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:text-brand-cyan transition-all shadow-sm">
                Contactar
             </button>
              <button onClick={() => onNavigate('donate')} className="bg-brand-cyan text-navy-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-cyan-400 transition-colors shadow-lg">
                Donar Ahora
             </button>
          </div>
       </div>
    </section>
  </>
);

// 4. MISSION PAGE CONTENT
const MissionPage = ({ onNavigate }) => (
  <div className="bg-white">
    {/* Page Header / Hero */}
    <div className="relative bg-navy-900 py-24 sm:py-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-navy-900">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sobre Nosotros</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Nuestra Misión y <br/><span className="text-brand-cyan">Fundamentos</span>
            </h1>
            <div className="w-20 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>
    </div>

    {/* Main Content - Based on PDF */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Table of Contents (Sticky) */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-brand-light p-8 rounded-2xl border border-brand-cyan/20 sticky top-32">
                    <h3 className="font-serif font-bold text-navy-900 text-xl mb-6">En esta página</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-navy-800 font-medium">
                            <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                            El Mandato Bíblico
                        </li>
                        <li className="flex items-center gap-3 text-slate-500 hover:text-navy-900 transition-colors cursor-pointer">
                            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                            Raíces Judías
                        </li>
                        <li className="flex items-center gap-3 text-slate-500 hover:text-navy-900 transition-colors cursor-pointer">
                            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                            Nuestros Valores
                        </li>
                        <li className="flex items-center gap-3 text-slate-500 hover:text-navy-900 transition-colors cursor-pointer">
                            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                            Junta Directiva
                        </li>
                    </ul>
                    
                    <div className="mt-8 pt-8 border-t border-brand-cyan/20">
                         <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <BookOpen className="w-8 h-8 text-navy-900 mx-auto mb-3" />
                            <p className="font-serif italic text-navy-800 text-sm mb-4">
                                "Defendiendo la causa del huérfano y de la viuda."
                            </p>
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Deuteronomio 10:18</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Detailed Content */}
            <div className="lg:col-span-8">
                {/* Introduction */}
                <div className="prose prose-lg max-w-none text-slate-600">
                    <p className="text-xl leading-relaxed font-light text-navy-800 mb-8">
                        <strong className="font-bold text-navy-900">MENORAH FOR THE NATIONS</strong> es una corporación sin fines de lucro de Texas organizada exclusivamente para fines caritativos, religiosos y educativos bajo la Sección 501(c)(3) del Código de Rentas Internas.
                    </p>
                    
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-6 flex items-center gap-3">
                        <span className="bg-navy-900 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">1</span>
                        El Mandato Bíblico
                    </h3>
                    <p className="mb-6">
                        Nuestra misión es vivir el mandato bíblico de cuidar a las viudas y huérfanos, proporcionar ayuda compasiva a los pobres y equipar a las comunidades a través de la enseñanza, el compañerismo y el aliento espiritual. Creemos que la verdadera religión se manifiesta en el cuidado tangible de los vulnerables.
                    </p>

                    <h3 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-6 flex items-center gap-3">
                        <span className="bg-navy-900 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">2</span>
                        Raíces Judías y Alianzas de Fe
                    </h3>
                    <div className="bg-navy-50 p-6 rounded-xl border-l-4 border-navy-900 mb-6">
                         <p className="italic text-navy-800 m-0">
                            "Operamos profundamente arraigados en la práctica religiosa judía, los valores de la Torá y la guía del liderazgo rabínico."
                         </p>
                    </div>
                    <p className="mb-6">
                        Si bien la organización se compromete a extender la compasión y la asociación a todas las comunidades basadas en la fe, su orientación principal es hacia la herencia judía, la vida de la sinagoga y la sabiduría de la enseñanza rabínica. A través de este fundamento, buscamos preservar y promover los valores judíos de justicia, compasión y responsabilidad por los vulnerables, mientras construimos puentes de cooperación con otros socios basados en la fe.
                    </p>

                    <h3 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-6 flex items-center gap-3">
                         <span className="bg-navy-900 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">3</span>
                         Nuestros Valores Fundamentales
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                         <div className="border border-slate-200 rounded-xl p-6 hover:border-brand-cyan transition-colors">
                            <Scale className="text-brand-cyan w-10 h-10 mb-4" />
                            <h4 className="font-serif font-bold text-navy-900 text-lg mb-2">Tzedaká (Justicia)</h4>
                            <p className="text-sm text-slate-500">
                                Entendemos la caridad no solo como benevolencia, sino como un acto de justicia y rectitud necesario para reparar el mundo.
                            </p>
                         </div>
                         <div className="border border-slate-200 rounded-xl p-6 hover:border-brand-cyan transition-colors">
                            <HandHeart className="text-brand-cyan w-10 h-10 mb-4" />
                            <h4 className="font-serif font-bold text-navy-900 text-lg mb-2">Jesed (Misericordia)</h4>
                            <p className="text-sm text-slate-500">
                                Amor leal en acción. Brindamos cuidado emocional y espiritual, asegurando que cada persona sea tratada con la dignidad de ser creada a imagen de Dios.
                            </p>
                         </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-6 flex items-center gap-3">
                        <span className="bg-navy-900 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">4</span>
                        Junta Directiva y Liderazgo
                    </h3>
                    <p className="mb-8 text-slate-600">
                        Todas las operaciones se llevan a cabo bajo la supervisión de nuestra Junta Directiva, garantizando el cumplimiento de los requisitos 501(c)(3).
                    </p>

                    {/* NEW TEAM SECTION */}
                    <div className="grid md:grid-cols-3 gap-8 not-prose mb-12">
                        {/* Member 1 */}
                        <div className="text-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-slate-200">
                                <img 
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Miembro de la Junta" 
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-navy-900/90 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-xs">Supervisión Estratégica</p>
                                </div>
                            </div>
                            <h4 className="font-serif font-bold text-lg text-navy-900">Nombre Apellido</h4>
                            <p className="text-brand-cyan text-xs font-bold tracking-widest uppercase mt-1">Presidente</p>
                        </div>
                         {/* Member 2 */}
                        <div className="text-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-slate-200">
                                <img 
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Miembro de la Junta" 
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-navy-900/90 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-xs">Gestión Financiera</p>
                                </div>
                            </div>
                            <h4 className="font-serif font-bold text-lg text-navy-900">Nombre Apellido</h4>
                            <p className="text-brand-cyan text-xs font-bold tracking-widest uppercase mt-1">Tesorero</p>
                        </div>
                         {/* Member 3 */}
                        <div className="text-center group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-slate-200">
                                <img 
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Miembro de la Junta" 
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-navy-900/90 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-xs">Cumplimiento Legal</p>
                                </div>
                            </div>
                            <h4 className="font-serif font-bold text-lg text-navy-900">Nombre Apellido</h4>
                            <p className="text-brand-cyan text-xs font-bold tracking-widest uppercase mt-1">Secretario</p>
                        </div>
                    </div>

                    
                    <div className="mt-12">
                         <button onClick={() => onNavigate('ministries')} className="bg-navy-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-navy-800 flex items-center gap-2">
                             Ver nuestros Ministerios <ArrowRight size={16} />
                         </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

// 5. MINISTRIES PAGE (Detalles de los 6 Ministerios)
const MinistriesPage = ({ onNavigate }) => (
  <div className="bg-white">
    {/* Page Header / Hero */}
    <div className="relative bg-navy-900 py-24 sm:py-32 overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 bg-navy-900">
            <div className="absolute top-0 right-1/4 -mt-20 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
         </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Nuestras Áreas de Acción</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Ministerios y <br/><span className="text-brand-cyan">Proyectos</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg font-light leading-relaxed">
               Cada iniciativa está diseñada para cumplir un propósito específico dentro de nuestro mandato de tzedaká y misericordia.
            </p>
        </div>
    </div>

    {/* Ministries Grid (6 Cards) */}
    <div className="bg-brand-light py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             
             {/* 1. Fortalecimiento de los Santos */}
             <div className="bg-white rounded-xl shadow-lg border-t-4 border-brand-cyan p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-cyan transition-colors">
                   <Users className="w-7 h-7 text-navy-900 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Fortalecimiento de los Santos</h3>
                <ul className="space-y-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Plane className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                      <span>Incluye viajes cortos (1-2 semanas) a lugares sin comunidad establecida.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Landmark className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                      <span>Alianzas para el uso de edificios para reuniones comunitarias.</span>
                   </li>
                </ul>
             </div>

             {/* 2. Apoyo a Huérfanos */}
             <div className="bg-white rounded-xl shadow-lg border-t-4 border-navy-900 p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
                   <Baby className="w-7 h-7 text-navy-900 group-hover:text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Apoyo a Huérfanos</h3>
                <ul className="space-y-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Plane className="w-4 h-4 text-navy-900 mt-1 flex-shrink-0" />
                      <span>Podría incluir viajes de apoyo directo.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Coins className="w-4 h-4 text-navy-900 mt-1 flex-shrink-0" />
                      <span className="font-bold text-navy-800">10% de todas las donaciones.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600 ml-7">
                       <span className="italic text-xs">Apoyo principalmente financiero.</span>
                   </li>
                </ul>
             </div>

             {/* 3. Apoyo a Viudas */}
             <div className="bg-white rounded-xl shadow-lg border-t-4 border-brand-cyan p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-cyan transition-colors">
                   <Heart className="w-7 h-7 text-navy-900 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Apoyo a Viudas</h3>
                <ul className="space-y-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Plane className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                      <span>Podría incluir viajes de visitación.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Coins className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                      <span className="font-bold text-navy-800">10% de todas las donaciones.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600 ml-7">
                       <span className="italic text-xs">Apoyo principalmente financiero.</span>
                   </li>
                </ul>
             </div>

             {/* 4. Apoyar a los Pobres */}
             <div className="bg-white rounded-xl shadow-lg border-t-4 border-navy-900 p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
                   <HandHeart className="w-7 h-7 text-navy-900 group-hover:text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Apoyo a la Comunidad</h3>
                <ul className="space-y-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                      <span>No incluye viajes (Enfoque local/remoto).</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Coins className="w-4 h-4 text-navy-900 mt-1 flex-shrink-0" />
                      <span>Apoyo financiero según necesidad específica.</span>
                   </li>
                </ul>
             </div>

             {/* 5. Enseñanza de la Palabra */}
             <div className="bg-white rounded-xl shadow-lg border-t-4 border-brand-cyan p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-cyan transition-colors">
                   <BookOpen className="w-7 h-7 text-navy-900 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Enseñanza a las Naciones</h3>
                <ul className="space-y-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Plane className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                      <span>Incluye viajes misioneros de enseñanza.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Users className="w-4 h-4 text-brand-cyan mt-1 flex-shrink-0" />
                      <span>Límite de 6 viajes por pareja colaboradora.</span>
                   </li>
                </ul>
             </div>

             {/* 6. Ayuda a Judíos Sefardíes */}
             <div className="bg-white rounded-xl shadow-lg border-t-4 border-navy-900 p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
                   <Globe className="w-7 h-7 text-navy-900 group-hover:text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Ayuda Sefardí</h3>
                <ul className="space-y-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Coins className="w-4 h-4 text-navy-900 mt-1 flex-shrink-0" />
                      <span>Donaciones específicas.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <ScrollText className="w-4 h-4 text-navy-900 mt-1 flex-shrink-0" />
                      <span>Ayuda con la ciudadanía española sefardí.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-slate-600">
                      <Type className="w-4 h-4 text-navy-900 mt-1 flex-shrink-0" />
                      <span>Aprendizaje de idiomas para comunicación.</span>
                   </li>
                </ul>
             </div>

          </div>

          <div className="mt-20 text-center">
             <div className="inline-block bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-2xl">
                <h4 className="font-serif font-bold text-navy-900 text-xl mb-4">¿Quieres ser parte de esto?</h4>
                <p className="text-slate-600 mb-6">
                   Tu generosidad hace posible cada uno de estos ministerios. Únete hoy.
                </p>
                <div className="flex justify-center gap-4">
                   <button onClick={() => onNavigate('donate')} className="bg-brand-cyan text-navy-900 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-cyan-400 transition-colors shadow-lg">
                      Donar Ahora
                   </button>
                   <button onClick={() => onNavigate('contact')} className="border border-navy-200 text-navy-900 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:border-navy-900 transition-colors">
                      Voluntariado
                   </button>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
);

// 6. CONTACT PAGE (New)
const ContactPage = () => (
    <div className="bg-white">
        {/* Header */}
        <div className="relative bg-navy-900 py-20 text-center text-white">
             <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contáctanos</h1>
             <p className="text-slate-300 max-w-2xl mx-auto">Estamos aquí para responder tus preguntas y conectarte con nuestra misión.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Left Side: Info & Map Placeholder */}
                <div>
                     <div className="space-y-8 mb-12">
                         <div className="flex items-start gap-4">
                             <div className="bg-brand-cyan/10 p-3 rounded-full text-navy-900"><Mail size={24}/></div>
                             <div>
                                 <h3 className="font-serif font-bold text-navy-900 text-lg">Correo Electrónico</h3>
                                 <p className="text-slate-600">info@menorahtothenations.org</p>
                                 <p className="text-slate-500 text-xs mt-1">Respondemos en 24-48 horas hábiles.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <div className="bg-brand-cyan/10 p-3 rounded-full text-navy-900"><MapPin size={24}/></div>
                             <div>
                                 <h3 className="font-serif font-bold text-navy-900 text-lg">Ubicación</h3>
                                 <p className="text-slate-600">Texas, United States</p>
                                 <p className="text-slate-500 text-xs mt-1">Sede Administrativa</p>
                             </div>
                         </div>
                     </div>

                     {/* Visual Map Placeholder */}
                     <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64 bg-slate-100 relative group">
                          {/* Simulated Map Image */}
                          <img 
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                            alt="Mapa"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                               <button className="bg-white text-navy-900 px-6 py-2 rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform">
                                   Ver en Google Maps
                               </button>
                          </div>
                     </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-brand-cyan">
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">Envíanos un mensaje</h3>
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy-800 ml-1">Nombre</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy-800 ml-1">Apellido</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy-800 ml-1">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all" placeholder="ejemplo@email.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy-800 ml-1">Motivo</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all appearance-none cursor-pointer">
                                <option>Quiero hacer una donación</option>
                                <option>Voluntariado</option>
                                <option>Información General</option>
                                </select>
                                <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none rotate-90" size={16} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy-800 ml-1">Mensaje</label>
                            <textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all h-32 resize-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
                        </div>
                        <button className="w-full bg-brand-cyan text-navy-900 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-cyan-400 transition-colors shadow-lg mt-4">Enviar Mensaje</button>
                    </form>
                </div>
            </div>

            {/* Simple FAQ Section */}
            <div className="mt-24 border-t border-slate-200 pt-16">
                 <h2 className="text-3xl font-serif font-bold text-navy-900 mb-10 text-center">Preguntas Frecuentes</h2>
                 <div className="max-w-3xl mx-auto space-y-4">
                      {/* FAQ Item 1 */}
                      <div className="border border-slate-200 rounded-lg p-5 hover:border-brand-cyan transition-colors bg-white shadow-sm">
                           <div className="flex justify-between items-center cursor-pointer">
                                <h4 className="font-bold text-navy-900">¿Cómo puedo obtener un recibo de donación?</h4>
                                <ChevronRight className="rotate-90 text-slate-400" size={20} />
                           </div>
                           <p className="text-slate-600 text-sm mt-3">Todas las donaciones reciben automáticamente un recibo por correo electrónico. Para un resumen anual, contáctanos en enero.</p>
                      </div>
                      {/* FAQ Item 2 */}
                      <div className="border border-slate-200 rounded-lg p-5 hover:border-brand-cyan transition-colors bg-white shadow-sm">
                           <div className="flex justify-between items-center cursor-pointer">
                                <h4 className="font-bold text-navy-900">¿Aceptan donaciones de ropa o bienes materiales?</h4>
                                <ChevronRight className="rotate-90 text-slate-400" size={20} />
                           </div>
                           <p className="text-slate-600 text-sm mt-3">Sí, aceptamos donaciones en especie. Por favor, completa el formulario seleccionando "Información General" para coordinar la logística.</p>
                      </div>
                 </div>
            </div>
        </div>
    </div>
);

// 7. DONATE PAGE (High Conversion)
const DonatePage = () => {
    const [amount, setAmount] = useState(100);
    const [frequency, setFrequency] = useState('monthly'); // 'monthly' | 'once'

    return (
        <div className="bg-slate-50">
            {/* Header */}
            <div className="bg-navy-900 py-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Haz tu Donación</h1>
                    <p className="text-brand-cyan font-bold tracking-widest uppercase text-xs">Tu generosidad transforma vidas</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-16">
                 <div className="grid lg:grid-cols-12 gap-12">
                      
                      {/* Main Donation Widget (Left/Top) */}
                      <div className="lg:col-span-7">
                           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                                {/* Frequency Tabs */}
                                <div className="flex border-b border-slate-100">
                                     <button 
                                        onClick={() => setFrequency('once')}
                                        className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${frequency === 'once' ? 'bg-white text-navy-900 border-b-2 border-brand-cyan' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                     >
                                         Una Vez
                                     </button>
                                     <button 
                                        onClick={() => setFrequency('monthly')}
                                        className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${frequency === 'monthly' ? 'bg-white text-navy-900 border-b-2 border-brand-cyan' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                     >
                                         <Heart size={16} className={frequency === 'monthly' ? 'text-brand-cyan fill-current' : ''} />
                                         Mensual
                                     </button>
                                </div>

                                <div className="p-8">
                                     <h3 className="text-navy-900 font-serif font-bold text-xl mb-6">Elige un monto para donar</h3>
                                     
                                     {/* Amount Grid */}
                                     <div className="grid grid-cols-3 gap-4 mb-6">
                                          {[25, 50, 100, 250, 500, 1000].map((val) => (
                                              <button 
                                                key={val}
                                                onClick={() => setAmount(val)}
                                                className={`py-4 rounded-xl border-2 font-bold text-lg transition-all ${amount === val ? 'border-brand-cyan bg-cyan-50 text-navy-900' : 'border-slate-200 text-slate-600 hover:border-brand-cyan hover:text-navy-900'}`}
                                              >
                                                  ${val}
                                              </button>
                                          ))}
                                     </div>

                                     {/* Custom Amount */}
                                     <div className="mb-8">
                                          <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Otro Monto</label>
                                          <div className="relative">
                                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                              <input 
                                                type="number" 
                                                value={amount}
                                                onChange={(e) => setAmount(Number(e.target.value))}
                                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none font-bold text-navy-900"
                                              />
                                          </div>
                                     </div>

                                     {/* Submit Button */}
                                     <button className="w-full bg-brand-cyan hover:bg-cyan-400 text-navy-900 py-5 rounded-full font-bold uppercase tracking-widest text-lg shadow-lg hover:shadow-cyan-400/30 transition-all transform hover:-translate-y-1">
                                         Donar ${amount} {frequency === 'monthly' ? 'Mensuales' : ''}
                                     </button>

                                     <div className="mt-6 flex items-center justify-center gap-4 text-slate-400 grayscale opacity-60">
                                          <CreditCard size={24} />
                                          <span className="text-xs font-bold">Secure Payment via PayPal / Stripe</span>
                                     </div>
                                </div>
                           </div>
                      </div>

                      {/* Right Sidebar: Trust & Offline */}
                      <div className="lg:col-span-5 space-y-8">
                           {/* Impact Box */}
                           <div className="bg-navy-900 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                <h3 className="font-serif font-bold text-xl mb-4 relative z-10">Tu impacto</h3>
                                <p className="text-slate-300 text-sm mb-4 relative z-10">
                                    Con <strong>${amount}</strong>, estás ayudando directamente a cubrir necesidades esenciales de viudas y huérfanos este mes.
                                </p>
                                <div className="flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-widest relative z-10">
                                     <ShieldCheck size={16} />
                                     Donación Segura
                                </div>
                           </div>

                           {/* Offline Methods */}
                           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <h3 className="font-serif font-bold text-navy-900 text-lg mb-6 flex items-center gap-2">
                                     <Landmark size={20} className="text-slate-400" />
                                     Otros Métodos (Offline)
                                </h3>
                                
                                <div className="space-y-6">
                                     <div>
                                          <h4 className="font-bold text-navy-800 text-sm mb-2">Cheque Personal</h4>
                                          <p className="text-slate-500 text-xs leading-relaxed bg-slate-50 p-3 rounded border border-slate-100">
                                              A nombre de: <strong>Menorah To The Nations</strong><br/>
                                              Dirección: [Tu Dirección Postal Aquí],<br/>
                                              Texas, USA.
                                          </p>
                                     </div>
                                     <div>
                                          <h4 className="font-bold text-navy-800 text-sm mb-2">Zelle</h4>
                                          <p className="text-slate-500 text-xs leading-relaxed bg-slate-50 p-3 rounded border border-slate-100 flex items-center justify-between">
                                              <span>donations@menorahtothenations.org</span>
                                              <Copy size={14} className="cursor-pointer hover:text-brand-cyan" />
                                          </p>
                                     </div>
                                </div>
                           </div>
                      </div>
                 </div>
            </div>
        </div>
    );
};

// 8. APP COMPONENT (CONTROLLER)
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      
      {/* Shared Header */}
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* Page Routing */}
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'mission' && <MissionPage onNavigate={setCurrentPage} />}
      {currentPage === 'ministries' && <MinistriesPage onNavigate={setCurrentPage} />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'donate' && <DonatePage />}

      {/* Shared Footer */}
      <Footer onNavigate={setCurrentPage} />

      {/* Floating Button for Style Guide (Only show on Home for clarity, or both) */}
      <a href="#style-guide" className="fixed bottom-4 right-4 z-[100] bg-navy-900 text-white px-6 py-3 rounded-full shadow-2xl border-2 border-brand-cyan flex items-center gap-2 hover:scale-105 transition-transform font-bold text-xs uppercase tracking-widest cursor-pointer">
        <Palette size={16} className="text-brand-cyan" />
        Ver Guía de Desarrollo 👇
      </a>

       {/* DEVELOPER STYLE GUIDE SECTION (Always visible at bottom for reference) */}
      <section id="style-guide" className="bg-slate-800 py-20 border-t-8 border-brand-cyan">
        <div className="max-w-5xl mx-auto px-6 bg-white shadow-2xl rounded-xl p-10 overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy-900 via-brand-cyan to-navy-900"></div>
           <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
              <div className="bg-navy-900 text-white p-2 rounded">
                 <Copy size={24} />
              </div>
              <div>
                 <h2 className="text-2xl font-bold text-navy-900 m-0">Guía de Desarrollo (Style Guide)</h2>
                 <p className="text-slate-500 text-sm">Copia estos valores en la configuración de <strong>Colores Globales</strong> de Elementor</p>
              </div>
           </div>
           <div className="grid md:grid-cols-2 gap-12">
              {/* Colors */}
              <div>
                 <div className="flex items-center gap-2 mb-4">
                    <Palette className="text-brand-cyan" size={20} />
                    <h3 className="text-lg font-bold text-navy-900 uppercase tracking-wider text-sm">1. Colores Globales (Elementor)</h3>
                 </div>
                 <div className="space-y-3">
                    <div className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors">
                       <div className="w-16 h-16 rounded-lg bg-navy-900 shadow-md border border-slate-200 flex items-center justify-center text-white text-xs font-bold">1</div>
                       <div><p className="font-bold text-navy-900">Principal (Primary)</p><code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-600 border border-slate-300">#0F172A</code></div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors">
                       <div className="w-16 h-16 rounded-lg bg-slate-700 shadow-md border border-slate-200 flex items-center justify-center text-white text-xs font-bold">2</div>
                       <div><p className="font-bold text-navy-900">Secundario (Secondary)</p><code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-600 border border-slate-300">#334155</code></div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors">
                       <div className="w-16 h-16 rounded-lg bg-slate-600 shadow-md border border-slate-200 flex items-center justify-center text-white text-xs font-bold">3</div>
                       <div><p className="font-bold text-navy-900">Texto (Text)</p><code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-600 border border-slate-300">#475569</code></div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors">
                       <div className="w-16 h-16 rounded-lg bg-brand-cyan shadow-md border border-slate-200 flex items-center justify-center text-navy-900 text-xs font-bold">4</div>
                       <div><p className="font-bold text-navy-900">Énfasis (Accent)</p><code className="bg-slate-100 px-2 py-1 rounded text-sm text-slate-600 border border-slate-300">#5CE1E6</code></div>
                    </div>
                 </div>
              </div>
              {/* Typography */}
              <div>
                 <div className="flex items-center gap-2 mb-4">
                    <Type className="text-brand-cyan" size={20} />
                    <h3 className="text-lg font-bold text-navy-900 uppercase tracking-wider text-sm">2. Tipografía Global</h3>
                 </div>
                 <div className="space-y-6">
                    <div className="p-4 border border-slate-200 rounded-lg">
                       <p className="text-slate-500 text-xs uppercase mb-1">Encabezados (H1, H2)</p>
                       <p className="text-3xl font-serif font-bold text-navy-900 mb-2">Playfair Display</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-lg">
                       <p className="text-slate-500 text-xs uppercase mb-1">Cuerpo (P)</p>
                       <p className="text-lg font-sans text-slate-600 mb-2">Montserrat</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
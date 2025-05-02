import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Check, MessageSquare, Users, Zap, Bot } from "lucide-react";
import HeroImage from "../components/HeroImage";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import PricingCard from "../components/PricingCard";
import FaqItem from "../components/FaqItem";
import PhoneInput from "../components/PhoneInput";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    formattedPhone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handlePhoneChange = (rawValue: string, formattedValue: string) => {
    setFormData(prev => ({
      ...prev,
      phone: rawValue,
      formattedPhone: formattedValue
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Por favor, complete todos los campos requeridos");
      return;
    }
    setIsSubmitting(true);
    try {
      // Preparamos los datos para enviar al webhook con el formato correcto del teléfono
      const webhookData = {
        ...formData,
        phone: formData.formattedPhone || `+595 ${formData.phone}` // Aseguramos que tenga formato correcto
      };

      // Log para debug
      console.log("Datos a enviar al webhook:", webhookData);

      // Aquí implementaremos el llamado al webhook más adelante
      toast.success("¡Gracias por contactarnos! Pronto nos comunicaremos contigo.");
      setFormData({
        name: "",
        company: "",
        phone: "",
        formattedPhone: "",
        message: ""
      });
    } catch (error) {
      toast.error("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Efecto para animaciones al cargar
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e6f4ff] to-[#c5e7ff] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <img alt="Chatea Logo" className="h-12 mr-3" src="/lovable-uploads/42aab7c1-8df0-4739-a395-64a0a969203b.png" />
                
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202633] mb-6">
                Convierte tu WhatsApp<br />
                en un <span className="text-[#36a7e3]">Potente Vendedor</span><br />
                que Nunca Duerme
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                Olvídate de mensajes perdidos y clientes insatisfechos. Con la IA de Chatea, automatiza respuestas, captura leads 24/7 y multiplica tus ventas sin contratar personal adicional.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Atención inmediata con inteligencia artificial 24/7</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Personalización inteligente para cada cliente</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Gestión centralizada para todo tu equipo</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>ROI positivo desde el primer mes garantizado</span>
                </div>
              </div>
              <Button className="animate-pulse-subtle bg-[#36a7e3] hover:bg-[#2686bb] text-white text-lg font-medium px-8 py-6" onClick={() => {
              const contactForm = document.getElementById('contactForm');
              contactForm?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                ¡Quiero potenciar mis ventas ahora!
              </Button>
              <p className="text-xs text-gray-600 mt-3">
                +1,500 empresas ya están aumentando sus ventas con Chatea
              </p>
            </div>
            <div className="animate-fade-in">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#202633]">Mira cómo Chatea revoluciona tu atención al cliente</h2>
            <p className="text-xl text-gray-600">Descubre por qué cientos de empresas confían en nuestra tecnología de IA para multiplicar sus ventas</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div style={{
            position: "relative",
            paddingTop: "56.25%"
          }}>
              <iframe src="https://iframe.mediadelivery.net/embed/364591/38c49cee-f2a2-4533-9924-19ddabdc9387?autoplay=true&loop=false&muted=false&preload=true&responsive=true" style={{
              border: 0,
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%"
            }} loading="lazy" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen={true} title="Chatea Demo"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#202633]">
                ¿Estás perdiendo ventas por no responder a tiempo?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <p className="text-gray-700">El 78% de tus clientes potenciales compran con quien responde primero - ¿y si ese no eres tú?</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <p className="text-gray-700">Cada minuto que no respondes, pierdes dinero y tu competencia gana terreno</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <p className="text-gray-700">Tu equipo agotado repitiendo las mismas respuestas básicas en lugar de cerrar ventas</p>
                </div>
              </div>
              <Button className="mt-8 bg-[#36a7e3] hover:bg-[#2686bb] text-white font-medium" onClick={() => {
              const contactForm = document.getElementById('contactForm');
              contactForm?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Solucionar estos problemas ahora
              </Button>
            </div>
            <div className="animate-fade-in order-first md:order-last">
              <img alt="Problemas de comunicación" className="w-full h-auto rounded-lg shadow-lg border border-[#36a7e3]/20" src="/lovable-uploads/7522cfd1-5b99-4179-ab97-abd6321b69ba.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-[#202633] text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              La solución definitiva: Chatea con Inteligencia Artificial integrada
            </h2>
            <p className="text-xl opacity-90">
              Tecnología avanzada que transforma conversaciones en ventas automáticamente, mientras tu equipo se enfoca en lo importante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={<MessageSquare className="h-10 w-10" />} title="Automatización Inteligente con IA" description="Respuestas automáticas con IA que entienden preguntas complejas y personalizan cada interacción para aumentar conversiones" />
            <FeatureCard icon={<Bot className="h-10 w-10" />} title="Atención 24/7 Sin Descanso" description="Tu vendedor virtual nunca duerme, nunca se cansa y siempre responde en segundos, capturando leads que tu competencia pierde" />
            <FeatureCard icon={<Zap className="h-10 w-10" />} title="Analytics y Optimización" description="Datos precisos sobre cada conversación para optimizar tu estrategia y aumentar tu tasa de conversión mes a mes" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#202633]">
            Empresas que multiplicaron sus ventas con Chatea
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard image="/placeholder.svg" name="Carlos Mendoza" position="Director de Ventas" company="TechSolutions" testimonial="Desde que implementamos Chatea, nuestras conversiones aumentaron un 43%. La automatización con IA nos permite atender más clientes sin contratar personal adicional." />
            <TestimonialCard image="/placeholder.svg" name="Ana García" position="CEO" company="Moda Express" testimonial="Chatea transformó nuestra atención al cliente. Ahora respondemos en segundos y nuestros clientes están encantados. Las ventas han subido un 37% en solo dos meses." />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contactForm" className="py-20 bg-gradient-to-br from-[#e6f4ff] to-[#c5e7ff]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#202633]">
              ¡Transforme su atención al cliente y venda más HOY!
            </h2>
            <p className="text-xl text-gray-700">
              Complete el formulario y le mostraremos cómo multiplicar sus ventas mientras reduce costos
            </p>
            <p className="text-blue-600 font-medium mt-2">AUMENTE SU CONVERSIÓN</p>
          </div>

          <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Nombre completo *
              </label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#36a7e3] focus:border-transparent" placeholder="Ingrese su nombre" required />
            </div>
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
                Nombre de tu Empresa
              </label>
              <input id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#36a7e3] focus:border-transparent" placeholder="Nombre de su empresa" />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                Teléfono *
              </label>
              <PhoneInput value={formData.phone} onChange={handlePhoneChange} required={true} />
              <p className="text-xs text-gray-500 mt-1">
                Formato: 0991 111 222
              </p>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                ¿En qué podemos ayudarte?
              </label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} className="border-gray-300 focus:ring-2 focus:ring-[#36a7e3] focus:border-transparent" placeholder="Cuéntanos sobre tu negocio y necesidades específicas..." rows={4} />
            </div>
            <Button type="submit" className="w-full bg-[#42E2B8] hover:bg-[#35B396] text-[#001F5C] text-lg font-medium py-6" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Comenzar Prueba Gratuita de 7 días"}
            </Button>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm text-gray-600">7 días de Prueba GRATIS</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm text-gray-600">No necesitas ingresar tu tarjeta crédito</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm text-gray-600">No te preocupes, cuidamos tus datos personales</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm text-gray-600">Contrato Mensual, puedes cancelar en cualquier momento</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm text-gray-600">Te ayudamos con la configuración inicial</span>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#202633]">
              Planes diseñados para maximizar tu ROI
            </h2>
            <p className="text-gray-600">
              Escoge el plan ideal para tu negocio y empieza a multiplicar tus ventas hoy mismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard title="Prueba" price="0" description="Pruébalo por 7 días" features={["5 usuarios simultáneos", "1 Conexión a Whatsapp", "Bot para atención", "Gestión del departamento", "Soporte vía WhatsApp"]} ctaText="Probar 7 Días GRATIS" popular={false} discount="*Luego de los 7 días se deberá elegir un Plan" />
            <PricingCard title="Plan Emprendedor" price="500.000" description="Ideal si quieres conectar hasta 1 Whatsapp" features={["5 usuarios simultáneos", "1 Conexión a Whatsapp", "Bot para atención con IA", "Gestión del departamento", "Soporte vía WhatsApp"]} ctaText="Comprar Ahora" popular={true} discount="*Tenemos hasta un 20% de descuento en el pago del PLAN ANUAL" />
            <PricingCard title="Plan Equipo de Ventas" price="800.000" description="Ideal si ya tienes un equipo de ventas con hasta 10 vendedores" features={["10 usuarios simultáneos", "2 Conexiones a Whatsapp", "Bot para atención con IA avanzada", "Gestión del departamento", "Soporte prioritario vía WhatsApp"]} ctaText="Comprar Ahora" popular={false} discount="*Tenemos hasta un 30% de descuento en el pago del PLAN ANUAL" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#202633]">
            Preguntas frecuentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FaqItem question="¿Cómo funciona la Inteligencia Artificial de Chatea?" answer="Nuestra IA avanzada analiza cada mensaje entrante para entender la intención del cliente, proporciona respuestas personalizadas basadas en tu catálogo y servicios, y aprende continuamente para mejorar las conversiones. Todo esto mientras mantiene un tono conversacional que tus clientes adorarán." />
            <FaqItem question="¿Necesito conocimientos técnicos para implementarlo?" answer="¡Absolutamente no! Chatea está diseñado para ser extremadamente intuitivo. Te asignamos un especialista que configura todo por ti en menos de 24 horas, y te capacitamos para que aproveches todas las funcionalidades al máximo." />
            <FaqItem question="¿Es compatible con otros sistemas que ya uso?" answer="Sí, Chatea se integra perfectamente con la mayoría de CRMs populares y otras herramientas de negocio como Salesforce, HubSpot y más. Además, nuestra API permite conectar con prácticamente cualquier sistema existente en tu empresa." />
            <FaqItem question="¿Cuánto tiempo toma ver resultados con Chatea?" answer="La mayoría de nuestros clientes experimentan un aumento en sus conversiones en la primera semana. El sistema comienza a capturar leads que antes se perdían de inmediato, y la tasa de conversión mejora continuamente conforme la IA se adapta a tu negocio específico." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#202633] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/67cf97cd-8cf5-4918-9c3c-f36bda8dfa49.png" alt="Chatea Logo" className="h-10 mr-3" />
                <span className="font-medium">Chatea</span>
              </div>
              <p className="text-sm opacity-70 mb-4">
                Transformando la manera en que las empresas se comunican con sus clientes a través de WhatsApp con inteligencia artificial avanzada.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#36a7e3]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#36a7e3]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#36a7e3]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Enlaces Útiles</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">Testimonios</a></li>
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Soporte Técnico</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">Estado del sistema</a></li>
                <li><a href="#" className="hover:text-[#36a7e3] transition-colors">API para desarrolladores</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm opacity-70 text-center">
            <p>© {new Date().getFullYear()} Chatea. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Users, 
  Shield,
  Eye,
  Heart,
  Award,
  Wallet,
  Fuel,
  Wind,
  Settings as Cog,
  CheckCircle2,
  MessageCircle as WhatsappIcon,
  Facebook,
  Instagram,
  Globe
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { translations } from '@/translations/index'

const cars = [
  { 
    name: 'Citroën C3', 
    type: 'Économique', 
    image: '/c3e.jpg',
    price: '249 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée'
    ],
    description: 'Parfaite pour la ville, économique et confortable.'
  },
  { 
    name: 'Renault Clio 5', 
    type: 'Économique', 
    image: '/clio24.jpg',
    price: '300 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée'
    ],
    description: 'Compacte et agile, idéale pour la conduite urbaine.'
  },
  { 
    name: 'Dacia Logan', 
    type: 'Économique', 
    image: '/logan.webp',
    price: '249 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée'
    ],
    description: 'Berline spacieuse et économique.'
  },
  { 
    name: 'Dacia Duster', 
    type: 'SUV', 
    image: '/dacia.jpg',
    price: '350 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée'
    ],
    description: 'SUV robuste et polyvalent.'
  },
  { 
    name: 'Dacia Stepway', 
    type: 'SUV', 
    image: '/stepway.webp',
    price: '249 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée'
    ],
    description: 'Le crossover urbain pratique et économique.'
  },
  { 
    name: 'Peugeot C Elysée', 
    type: 'Économique', 
    image: '/Celyse.jpg',
    price: '249 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée'
    ],
    description: 'Berline confortable et économique, idéale pour les longs trajets.'
  },
  { 
    name: 'Volkswagen T-Roc', 
    type: 'SUV', 
    image: '/te.jpg',
    price: '600 DH/jour',
    fuel: 'Diesel',
    transmission: 'Automatique',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée',
      'Caméra de recul'
    ],
    description: 'SUV compact moderne avec un excellent confort de conduite.'
  },
  { 
    name: 'Range Rover evoque', 
    type: 'SUV Premium', 
    image: '/range.jpg',
    price: '890 DH/jour',
    fuel: 'Diesel',
    transmission: 'Automatique',
    features: [
      '5 places',
      'Climatisation automatique',
      'Système audio premium',
      'GPS',
      'Caméra 360°',
      'Toit panoramique',
      'Sièges en cuir'
    ],
    description: 'SUV de luxe alliant élégance et performances exceptionnelles.'
  },
  { 
    name: 'Volkswagen Golf 8', 
    type: 'Compacte', 
    image: '/8.jpg',
    price: '700 DH/jour',
    fuel: 'Diesel',
    transmission: 'Automatique',
    features: [
      '5 places',
      'Climatisation automatique',
      'Bluetooth',
      'GPS',
      'Caméra de recul',
      'Digital Cockpit',
      'Apple CarPlay/Android Auto'
    ],
    description: 'La référence des compactes, moderne et technologique.'
  },
  { 
    name: 'Hyundai Accent', 
    type: 'Économique', 
    image: '/accent.png',
    price: '300 DH/jour',
    fuel: 'Diesel',
    transmission: 'Automatique',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée'
    ],
    description: 'Berline fiable et économique, parfaite pour tous vos déplacements.'
  },
  { 
    name: 'Opel Corsa', 
    type: 'Économique', 
    image: '/lite.avif',
    price: '249 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée'
    ],
    description: 'Citadine polyvalente et économique.'
  },
  {
    name: 'Peugeot 208',
    type: 'Économique',
    image: '/208.jpeg',
    price: '300 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée',
      'Écran tactile'
    ],
    description: 'Citadine moderne au design distinctif avec un excellent confort de conduite.'
  },
  { 
    name: 'Opel Crossland', 
    type: 'SUV', 
    image: '/land.jpg',
    price: '300 DH/jour',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    features: [
      '5 places',
      'Climatisation',
      'Bluetooth',
      'ABS',
      'Airbags',
      'Direction assistée',
      'Caméra de recul'
    ],
    description: 'SUV compact pratique et confortable pour la ville comme pour les voyages.'
  },
  
]

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [language, setLanguage] = useState<'FR' | 'AR'>('FR')

  const t = translations[language]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleReservation = (carName: string) => {
    const message = encodeURIComponent(`Bonjour, je souhaite réserver la voiture ${carName}. Pouvez-vous me donner plus d'informations ?`)
    window.open(`https://wa.me/212661551965?text=${message}`, '_blank')
  }

  const toggleLanguage = () => {
    const newLang = language === 'FR' ? 'AR' : 'FR'
    setLanguage(newLang)
  }

  useEffect(() => {
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr'
    document.documentElement.lang = language.toLowerCase()
  }, [language])

  return (
    <div className={`min-h-screen bg-white ${language === 'AR' ? 'text-right' : 'text-left'}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-2">
        <div className="container mx-auto px-4">
          {/* Fixed width container with absolute positioning for static layout */}
          <div className="relative flex items-center justify-between" style={{ direction: 'ltr' }}>
            {/* Logo - Fixed position */}
            <div className="w-[220px]">
              <Image
                src="/jeffal.png"
                alt="Jeffal Car Logo"
                width={220}
                height={220}
                className="mr-2"
              />
            </div>

            {/* Center Navigation Buttons - Fixed position */}
            <div className="hidden md:flex items-center justify-center space-x-8 flex-1 mx-8">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('home')}
                className="transition-colors duration-300 text-white hover:text-[#FFD700] w-24"
              >
                Accueil
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('catalog')}
                className="transition-colors duration-300 text-white hover:text-[#FFD700] w-24"
              >
                Catalogue
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="transition-colors duration-300 text-white hover:text-[#FFD700] w-24"
              >
                À Propos
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="transition-colors duration-300 text-white hover:text-[#FFD700] w-24"
              >
                Contact
              </Button>
            </div>

            {/* Right Side Items - Fixed position */}
            <div className="hidden md:flex items-center space-x-6 w-[300px] justify-end">
              {/* Language toggle */}
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="text-white hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-2 w-20"
              >
                <Globe className="h-4 w-4 text-[#FFD700]" />
                <span>{language}</span>
              </Button>

              {/* Phone number - Updated to open WhatsApp */}
              <a 
                href="https://wa.me/212661551965"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-[#FFD700]/80 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <WhatsappIcon size={20} />
                <span className="font-semibold">+212 661-551965</span>
              </a>
            </div>

            {/* Mobile Menu Button - Fixed position */}
            <Button variant="ghost" className="md:hidden py-1" onClick={toggleMenu}>
              {isMenuOpen ? 
                <X className="text-white" /> : 
                <Menu className="text-white" />
              }
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center p-4 overflow-y-auto" style={{ direction: 'ltr' }}>
          {/* Close button */}
          <Button 
            variant="ghost" 
            className="absolute top-4 right-4" 
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Logo for mobile */}
          <div className="mb-8">
            <Image
              src="/jeffal.png"
              alt="Jeffal Car Logo"
              width={150}
              height={150}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('home')}
              className="text-xl hover:text-orange-500"
            >
              Accueil
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('catalog')}
              className="text-xl hover:text-orange-500"
            >
              Catalogue
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-xl hover:text-orange-500"
            >
              À Propos
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="text-xl hover:text-orange-500"
            >
              Contact
            </Button>
          </div>

          {/* Language and Contact */}
          <div className="flex flex-col items-center space-y-4">
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-xl hover:text-orange-500 flex items-center gap-2"
            >
              <Globe className="h-5 w-5" />
              {language}
            </Button>
            
            <a 
              href="https://wa.me/212661551965"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#FFD700] hover:text-[#FFD700]/80 flex items-center gap-2"
            >
              <WhatsappIcon className="h-5 w-5" />
              +212 661-551965
            </a>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/maherlocation" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/jeffal_car/?__pwa=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-600 hover:text-pink-700"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Home Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <Image
          src="/post1.jpg"
          alt="Jeffal Car Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
            {t.welcome} <span className="text-[#FFD700]">Jeffal Car</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            {t.heroSubtitle}
          </p>
          <Button
            onClick={() => scrollToSection('catalog')}
            className="bg-blue-800 text-white hover:bg-blue-700 transition-colors duration-300 animate-pulse"
          >
            {t.discoverButton}
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">{t.ourFleet}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {cars.map((car, index) => (
              <Card 
                key={index} 
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedCar(car)
                  setIsDialogOpen(true)
                }}
              >
                <div className="relative h-72">
                  <Image
                    src={car.image}
                    alt={car.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-blue-800">{car.type}</p>
                  <p className="text-blue-600 font-semibold mt-2">
                    {language === 'FR' ? 'À partir de ' : 'ابتداء من '}{car.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Car Details Dialog */}
        <DialogPrimitive.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedCar && (
            <DialogPrimitive.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:max-w-[600px] w-[95%] p-0 overflow-hidden bg-white rounded-xl shadow-2xl z-50">
              {/* Overlay */}
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10" />
              
              {/* Hero Image Section */}
              <div className="relative h-64 w-full">
                <Image
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-90"
                />
                <div className="absolute top-4 right-4">
                  <DialogPrimitive.Close className="rounded-full p-2 bg-black/50 hover:bg-black/70 transition-colors cursor-pointer">
                    <X className="h-4 w-4 text-white" />
                  </DialogPrimitive.Close>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto bg-white">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-black">{selectedCar.name}</h2>
                    <p className="text-blue-600 font-semibold text-lg">
                      {language === 'FR' ? 'À partir de ' : 'ابتداء من '}{selectedCar.price}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {selectedCar.type}
                  </span>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#FFD700]" />
                    <span className="text-black">{t?.carFeatures?.seats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-[#FFD700]" />
                    <span className="text-black">{t?.carFeatures?.diesel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="h-5 w-5 text-[#FFD700]" />
                    <span className="text-black">{t?.carFeatures?.ac}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cog className="h-5 w-5 text-[#FFD700]" />
                    <span className="text-black">
                      {selectedCar.transmission === 'Automatique' ? 
                        (language === 'FR' ? 'Automatique' : 'أوتوماتيك') : 
                        (language === 'FR' ? 'Manuelle' : 'يدوي')}
                    </span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black">{t?.dailyPrice || 'Prix journalier'}</span>
                    <span className="font-semibold text-blue-800">
                      {language === 'FR' ? 'À partir de ' : 'ابتداء من '}{selectedCar.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black">{t?.insurance || 'Assurance incluse'}</span>
                    <CheckCircle2 className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">{t?.mileage || 'Kilométrage'}</span>
                    <span className="font-semibold text-blue-800">{t?.mileageLimit || '250 km/jour'}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-blue-800 hover:bg-blue-700 text-white py-6 rounded-lg flex items-center justify-center gap-2 text-lg"
                  onClick={() => handleReservation(selectedCar.name)}
                >
                  <WhatsappIcon className="h-5 w-5" />
                  {t.bookNow}
                </Button>
              </div>
            </DialogPrimitive.Content>
          )}
        </DialogPrimitive.Root>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 md:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center">{t.aboutTitle} Jeffal Car</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Vision Card */}
            <div className="group hover:scale-105 transition-all duration-300">
              <Card className="h-full bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                    <Eye className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t?.vision?.title || 'Notre Vision'}</h3>
                  <p className="text-gray-600">{t?.vision?.description || 'Rendre la location de voitures accessible à tous, avec un service de qualité et des véhicules fiables à des prix compétitifs.'}</p>
                </CardContent>
              </Card>
            </div>

            {/* Values Card */}
            <div className="group hover:scale-105 transition-all duration-300">
              <Card className="h-full bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                    <Heart className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t?.values?.title || 'Nos Valeurs'}</h3>
                  <ul className="text-gray-600 space-y-2">
                    {t?.values?.list?.map((value, index) => (
                      <li key={index}>✓ {value}</li>
                    )) || (
                      <>
                        <li>✓ Transparence totale</li>
                        <li>✓ Service client premium</li>
                        <li>✓ Qualité garantie</li>
                        <li>✓ Prix compétitifs</li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Experience Card */}
            <div className="group hover:scale-105 transition-all duration-300">
              <Card className="h-full bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                    <Award className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t?.experience?.title || 'Notre Expérience'}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <span className="text-3xl font-bold text-[#FFD700]">10+</span>
                      <p>{t?.experience?.years || 'Années d\'expérience'}</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-[#FFD700]">1000+</span>
                      <p>{t?.experience?.clients || 'Clients satisfaits'}</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-[#FFD700]">100%</span>
                      <p>{t?.experience?.quality || 'Engagement qualité'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">{t?.whyChooseUs}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#FFD700]/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <p className="text-gray-600">{t?.advantages?.insured}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#FFD700]/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <p className="text-gray-600">{t?.advantages?.available}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#FFD700]/10 rounded-full flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <p className="text-gray-600">{t?.advantages?.transparent}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/hist.webp"
                  alt="Jeffal Car Service"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Shuttle Section */}
      <section className="py-10 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">{t.airportService}</h2>
          <p className="text-center text-base md:text-lg mb-8 md:mb-12 text-gray-700">
            {t.airportSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Casablanca Airport Card */}
            <div className="group hover:scale-105 transition-all duration-300">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/casa.jpeg"
                    alt={t?.airports?.casablanca?.name || "Aéroport de Casablanca"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-800">
                    {t?.airports?.casablanca?.name || "Aéroport de Casablanca"}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {t?.airports?.casablanca?.fullName || "Mohammed V International Airport"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Marrakech Airport Card */}
            <div className="group hover:scale-105 transition-all duration-300">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/merr.jpg"
                    alt={t?.airports?.marrakech?.name || "Aéroport de Marrakech"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-800">
                    {t?.airports?.marrakech?.name || "Aéroport de Marrakech"}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {t?.airports?.marrakech?.fullName || "Menara Airport"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Oujda Airport Card */}
            <div className="group hover:scale-105 transition-all duration-300">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/oujda.jpg"
                    alt={t?.airports?.oujda?.name || "Aéroport d'Oujda"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-800">
                    {t?.airports?.oujda?.name || "Aéroport d'Oujda"}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {t?.airports?.oujda?.fullName || "Angads Airport"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-blue-800 hover:bg-blue-700 text-white"
              onClick={() => {
                const message = encodeURIComponent(t.bookShuttle)
                window.open(`https://wa.me/212661551965?text=${message}`, '_blank')
              }}
            >
              {t.bookShuttle}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">{t.findUs}</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            {/* Map */}
            <div className="w-full lg:w-2/3 h-[300px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.9067172352433!2d-1.8936560150600472!3d34.67176688022473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd786300682d8883%3A0x976c8d66703b3fc1!2sHammam%20antalya!5e0!3m2!1sfr!2sma!4v1731076182226!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3 lg:pl-12">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">{t.contactInfo}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="text-[#FFD700] mr-4" size={38} />
                      <p>HAY ZAITOUN BD ABDRERAHIM BOUBID LOT MNIA NR 26, Oujda 60000</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-[#FFD700] mr-4" size={24} />
                      <p>0661551965</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-[#FFD700] mr-4" size={24} />
                      <p>{t.schedule}</p>
                    </div>
                  </div>
                  <Button 
                    className="mt-6 bg-blue-800 hover:bg-blue-700 text-white transition-colors duration-300 flex items-center justify-center gap-2"
                    onClick={() => {
                      const message = encodeURIComponent(t.contactMessage)
                      window.open(`https://wa.me/212661551965?text=${message}`, '_blank')
                    }}
                  >
                    <WhatsappIcon className="h-5 w-5" />
                    {t.contactButton}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 Jeffal Car. {t.rights}</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.facebook.com/jeffal.med.5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FFD700] hover:text-[#FFD700]/80 transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/jeffal_car/?__pwa=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FFD700] hover:text-[#FFD700]/80 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
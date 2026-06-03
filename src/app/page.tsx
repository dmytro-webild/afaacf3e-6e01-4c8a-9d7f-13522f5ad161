"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmall"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Plugins",
          id: "#products",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="SoundVault"
      button={{
        text: "Download Now",
        href: "#products",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Find Your Perfect Sound Plugin Instantly"
      description="Search thousands of music plugins in one place. Filter by genre, DAW compatibility, and price. Download safely with instant access to your tools."
      testimonials={[
        {
          name: "Sarah Johnson",
          handle: "@sound_architect",
          testimonial: "SoundVault transformed my workflow! Finding specific plugins for my projects used to be a headache, but now it's seamless and efficient. A game-changer for any producer.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/influencer-holding-coffee-cup-recording-podcast-home-studio_482257-7797.jpg",
        },
        {
          name: "Michael Chen",
          handle: "@mix_master",
          testimonial: "The compatibility filters are incredibly accurate. No more guessing if a plugin will work with my DAW. SoundVault provides reliable recommendations every time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-producing-music-indoors_23-2148924305.jpg",
        },
        {
          name: "Emily Rodriguez",
          handle: "@beats_by_em",
          testimonial: "As a home studio enthusiast, I appreciate how easy SoundVault makes it to discover new tools. The descriptions are clear, and the download process is super simple.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-man-radio_23-2148802310.jpg",
        },
        {
          name: "David Kim",
          handle: "@sonic_innovator",
          testimonial: "Finally, a centralized platform that addresses the fragmented plugin ecosystem. SoundVault saves me countless hours and helps me stay updated with the latest innovations.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-boy-holding-guitar_23-2149542289.jpg",
        },
        {
          name: "Lena White",
          handle: "@synth_guru",
          testimonial: "SoundVault's interface is super intuitive. I found a rare vintage synth plugin in minutes. It's truly a must-have for serious producers.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-musician-wearing-headphones_23-2150206723.jpg",
        },
      ]}
      buttons={[
        {
          text: "Start Discovering Plugins",
          href: "#products",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/influencer-filming-keyboard-review-pressing-different-buttons-show-typing-capabilities_482257-123040.jpg",
          alt: "Sarah Johnson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-studio_23-2149200029.jpg",
          alt: "Michael Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confident-african-american-businessman-black-classic-jacket-isolated-dark-background_613910-17869.jpg",
          alt: "Emily Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-unshaved-dark-skinned-guy-holding-hands-headphones-while-listening-music-being-excited-looking-aside-sitting-park_176420-19807.jpg",
          alt: "David Kim",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-cheerful-male-singer-happily-recording-new-song-modern-sound-studio_574295-1716.jpg",
          alt: "Lena White",
        },
      ]}
      avatarText="Trusted by 100,000+ producers and engineers"
      imageSrc="http://img.b2bpic.net/free-photo/abstract-neon-lights-wonder-wheel_23-2148328075.jpg"
      imageAlt="Futuristic music studio with glowing audio equipment"
      showBlur={true}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Your Gateway to Infinite ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/talented-producer-using-usb-stick-edit-recorded-audio-files_482257-83361.jpg",
          alt: "Digital Audio Workstation screen",
        },
        {
          type: "text",
          content: " Audio Possibilities",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Smart Search & Filters",
          description: "Quickly find the perfect plugin using advanced filters for genre, instrument, DAW compatibility, and price range. Our intelligent search learns your preferences.",
          imageSrc: "http://img.b2bpic.net/free-photo/electronic-musical-instrument-audio-mixer-sound-equalizer-analog-modular-synthesizer_1381-5.jpg",
          imageAlt: "Abstract visualization of a search bar finding audio plugins",
        },
        {
          title: "Detailed Comparisons",
          description: "Access in-depth specifications, user reviews, and compatibility information side-by-side. Make informed decisions with comprehensive data at your fingertips.",
          imageSrc: "http://img.b2bpic.net/free-photo/headphone-stylus-graphic-digital-tablet-with-musical-note-screen-white-backdrop_23-2147889323.jpg",
          imageAlt: "Comparison chart of audio plugin features",
        },
        {
          title: "Secure & Instant Downloads",
          description: "Download your chosen plugins directly and securely, with instant access. Say goodbye to fragmented ecosystems and unclear version management.",
          imageSrc: "http://img.b2bpic.net/free-vector/web-hosting-icons-isometric-set-three-vertical-mobile-app-banners-with-buttons-page-switches-vector-illustration_1284-80943.jpg",
          imageAlt: "Secure download icon with animation",
        },
      ]}
      title="Unleash Your Creative Potential"
      description="SoundVault simplifies your plugin discovery, ensuring you spend less time searching and more time creating."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Vintage Synth Pro",
          price: "$99",
          variant: "VST/AU/AAX",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-radio-equipment-arrangement_23-2148802303.jpg",
          imageAlt: "Vintage analog synthesizer plugin interface",
        },
        {
          id: "p2",
          name: "Vocal Clarity Suite",
          price: "$129",
          variant: "VST/AU/AAX",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wearing-headphones_23-2149199981.jpg",
          imageAlt: "Sleek, modern vocal effects plugin interface",
        },
        {
          id: "p3",
          name: "Mastering Essentials",
          price: "$199",
          variant: "VST/AU/AAX",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-studio_23-2150232118.jpg",
          imageAlt: "Powerful mastering suite plugin interface",
        },
        {
          id: "p4",
          name: "Granular Playground",
          price: "$79",
          variant: "VST/AU",
          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-woman-touching-digital-tablet-screen_23-2147862942.jpg",
          imageAlt: "Creative granular synthesis plugin interface",
        },
        {
          id: "p5",
          name: "Retro Drum Machine",
          price: "$69",
          variant: "VST/AU/AAX",
          imageSrc: "http://img.b2bpic.net/free-photo/musical-keys-tablet-with-stylus-table_169016-48754.jpg",
          imageAlt: "Classic drum machine emulation plugin interface",
        },
        {
          id: "p6",
          name: "Acoustic Guitar Pro",
          price: "$149",
          variant: "VST/AU",
          imageSrc: "http://img.b2bpic.net/free-photo/electric-guitar-with-neon-light_23-2151376079.jpg",
          imageAlt: "High-fidelity acoustic guitar simulation plugin interface",
        },
      ]}
      title="Explore Our Curated Plugin Catalog"
      description="Dive into a diverse collection of VST, AU, and AAX plugins, hand-picked for quality and performance."
      tag="Featured Plugins"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10,000+",
          title: "Plugins Available",
          description: "Access a massive library across all categories.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-space-used-recording-music-electronic-tools-home-studio_482257-100234.jpg",
          imageAlt: "Glowing number 10,000+ representing audio plugins",
        },
        {
          id: "m2",
          value: "100%",
          title: "DAW Compatibility",
          description: "Seamlessly integrates with all major Digital Audio Workstations.",
          imageSrc: "http://img.b2bpic.net/free-photo/online-music-laptop_53876-94893.jpg",
          imageAlt: "Stylized icon representing various Digital Audio Workstations",
        },
        {
          id: "m3",
          value: "500,000+",
          title: "Satisfied Producers",
          description: "Join a thriving community of musicians and engineers.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-happy-guy-freelancer-working-listening-music-wireless-headphones_1258-245373.jpg",
          imageAlt: "Dynamic infographic showing 500,000+ satisfied producers",
        },
      ]}
      title="Impact by the Numbers"
      description="Our platform is rapidly growing, connecting more producers with the tools they need to create amazing music."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex 'AudioPro' Green",
          handle: "@alex_audiopro",
          testimonial: "SoundVault's plugin discovery tools are unmatched. I've found so many gems that I wouldn't have otherwise, and my sound has never been better. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-team-musician-audio-technician-creating-hit-song_482257-97426.jpg",
        },
        {
          id: "t2",
          name: "Maya 'BeatQueen' Singh",
          handle: "@maya_beatqueen",
          testimonial: "The filter system is genius! It saves me hours of sifting through irrelevant plugins. Plus, the detailed compatibility info is a lifesaver for my multi-DAW setup.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-music-studio-with-instruments_52683-110324.jpg",
        },
        {
          id: "t3",
          name: "Chris 'MixMaster' Lee",
          handle: "@chrismixmaster",
          testimonial: "As a professional audio engineer, reliability is key. SoundVault consistently delivers accurate information and secure downloads. It's an indispensable resource for my studio.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sound-engineer-recording-audio-editing-with-mixing-console_482257-122296.jpg",
        },
        {
          id: "t4",
          name: "Jordan 'HomeGroove' Davis",
          handle: "@jordanhomergoove",
          testimonial: "I'm relatively new to music production, and SoundVault made it so easy to get started with quality plugins. The clear descriptions helped me understand what each tool does.",
          imageSrc: "http://img.b2bpic.net/free-photo/student-online-cute-guy-checked-shirt-with-glasses-studying-computer-happy-closing-eyes_140725-164270.jpg",
        },
        {
          id: "t5",
          name: "Sophia 'SynthSoul' Brown",
          handle: "@sophia_synthsoul",
          testimonial: "The community reviews are incredibly helpful. It's like having thousands of expert opinions guiding my choices. SoundVault is truly built for musicians by musicians.",
          imageSrc: "http://img.b2bpic.net/free-photo/volume-control-knob-hi-fi-amplifier_1232-3570.jpg",
        },
        {
          id: "t6",
          name: "Liam 'SoundSculptor' White",
          handle: "@liam_soundsculptor",
          testimonial: "Managing plugin versions used to be a nightmare, but SoundVault's system keeps everything organized. It's the most efficient platform I've used for plugin management.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-dj-party-charge-music-entertainment_23-2149658400.jpg",
        },
      ]}
      title="What Our Community Says"
      description="Hear from real users who have transformed their music production workflow with SoundVault."
      tag="Producer Reviews"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Ableton Live",
        "Logic Pro",
        "FL Studio",
        "Pro Tools",
        "Cubase",
        "Reason",
        "Studio One",
      ]}
      title="Trusted Across All Major DAWs"
      description="SoundVault provides plugins and information compatible with your favorite Digital Audio Workstations."
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How does SoundVault ensure plugin compatibility?",
          content: "Our platform meticulously verifies each plugin's compatibility across major DAWs like Ableton Live, Logic Pro, FL Studio, Pro Tools, Cubase, Reason, and Studio One, providing detailed specifications and user reports to ensure a seamless experience. We categorize plugins by format (VST, AU, AAX) and version requirements.",
        },
        {
          id: "q2",
          title: "Is it safe to download plugins from SoundVault?",
          content: "Absolutely. SoundVault partners directly with reputable plugin developers and verifies all downloads for authenticity and security. Our advanced scanning ensures you receive clean, legitimate software every time, protecting your system from malware and unofficial versions.",
        },
        {
          id: "q3",
          title: "Can I filter plugins by genre or instrument?",
          content: "Yes! Our intuitive search and filtering system allows you to refine your search by musical genre (e.g., electronic, hip-hop, orchestral), instrument type (e.g., synth, drums, guitar), effect type (e.g., reverb, compressor, delay), and more, helping you quickly find exactly what you need for your project.",
        },
        {
          id: "q4",
          title: "What if I need help with a downloaded plugin?",
          content: "SoundVault provides direct links to developer support for any technical issues with individual plugins. For platform-related questions or assistance with our services, our dedicated support team is available to help you navigate, compare, and download plugins efficiently. You can reach us via our contact page.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about SoundVault, plugin compatibility, and downloads."
      tag="Your Questions Answered"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Ready to Transform Your Sound?"
      description="Join SoundVault today and unlock a world of audio possibilities. Have questions or need assistance? Our team is here to help."
      buttons={[
        {
          text: "Contact Support",
          href: "#footer",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/3d-abstract-soundwaves-background-with-flowing-lines_1048-15842.jpg"
      imageAlt="Futuristic sound wave visualization wrapping around an audio mixer"
      logoText="SoundVault"
      columns={[
        {
          title: "Products",
          items: [
            {
              label: "All Plugins",
              href: "#products",
            },
            {
              label: "VST Plugins",
              href: "#products",
            },
            {
              label: "AU Plugins",
              href: "#products",
            },
            {
              label: "AAX Plugins",
              href: "#products",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Our Mission",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Help Center",
              href: "#",
            },
            {
              label: "Report Bug",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Cookie Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 SoundVault. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

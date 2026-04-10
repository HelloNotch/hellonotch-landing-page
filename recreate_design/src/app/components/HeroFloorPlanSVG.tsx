export function HeroFloorPlanSVG() {
  return (
    <svg width="100%" viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg" className="rounded-[10px] block w-full">
      <defs>
        <style>{`
          @keyframes hero-dot-pulse {
            0% { transform: scale(1); opacity: 0.9; }
            60% { transform: scale(2.8); opacity: 0; }
            100% { transform: scale(1); opacity: 0; }
          }
          .hero-dot-ring {
            transform-origin: 324px 101px;
            animation: hero-dot-pulse 2.2s ease-out infinite;
          }
        `}</style>
      </defs>
      
      {/* Background */}
      <rect width="680" height="400" fill="#d6d4cd"/>
      
      {/* === OUTER WALLS === */}
      <rect x="28" y="28" width="627" height="5" fill="#8a8880"/>
      <rect x="28" y="28" width="5" height="352" fill="#8a8880"/>
      <rect x="28" y="375" width="492" height="5" fill="#8a8880"/>
      <rect x="515" y="260" width="5" height="120" fill="#8a8880"/>
      <rect x="515" y="258" width="145" height="5" fill="#8a8880"/>
      <rect x="651" y="28" width="5" height="235" fill="#8a8880"/>

      {/* === INTERNAL SPINE WALLS === */}
      <rect x="28" y="132" width="487" height="4" fill="#8a8880"/>
      <rect x="28" y="172" width="487" height="4" fill="#8a8880"/>

      {/* Vertical dividers in upper strip */}
      <rect x="140" y="28" width="4" height="108" fill="#8a8880"/>
      <rect x="260" y="28" width="4" height="108" fill="#8a8880"/>
      <rect x="388" y="28" width="4" height="108" fill="#8a8880"/>
      <rect x="583" y="28" width="4" height="108" fill="#8a8880"/>

      {/* Vertical dividers in lower block */}
      <rect x="198" y="172" width="4" height="203" fill="#8a8880"/>
      <rect x="338" y="172" width="4" height="125" fill="#8a8880"/>
      <rect x="338" y="297" width="4" height="83" fill="#8a8880"/>
      <rect x="202" y="295" width="140" height="4" fill="#8a8880"/>
      <rect x="338" y="295" width="177" height="4" fill="#8a8880"/>
      <rect x="430" y="172" width="4" height="128" fill="#8a8880"/>
      <rect x="583" y="132" width="4" height="130" fill="#8a8880"/>

      {/* === DOOR OPENINGS === */}
      <rect x="62" y="129" width="34" height="10" fill="#d6d4cd"/>
      <rect x="186" y="129" width="34" height="10" fill="#d6d4cd"/>
      <rect x="305" y="129" width="34" height="10" fill="#d6d4cd"/>
      <rect x="430" y="129" width="34" height="10" fill="#d6d4cd"/>
      <rect x="530" y="129" width="28" height="10" fill="#d6d4cd"/>
      <rect x="614" y="129" width="28" height="10" fill="#d6d4cd"/>
      <rect x="62" y="169" width="34" height="10" fill="#d6d4cd"/>
      <rect x="248" y="169" width="34" height="10" fill="#d6d4cd"/>
      <rect x="362" y="169" width="34" height="10" fill="#d6d4cd"/>
      <rect x="460" y="169" width="34" height="10" fill="#d6d4cd"/>
      <rect x="195" y="220" width="10" height="30" fill="#d6d4cd"/>
      <rect x="250" y="292" width="30" height="10" fill="#d6d4cd"/>
      <rect x="427" y="220" width="10" height="30" fill="#d6d4cd"/>
      <rect x="580" y="190" width="10" height="30" fill="#d6d4cd"/>

      {/* === FURNITURE - Room A: Conference */}
      <rect x="40" y="42" width="56" height="26" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.5" opacity="0.3"/>
      <rect x="42" y="39" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="55" y="39" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="68" y="39" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="81" y="39" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="42" y="71" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="55" y="71" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="68" y="71" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="81" y="71" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>

      {/* Room B: Office */}
      <rect x="162" y="48" width="30" height="22" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.5" opacity="0.3"/>
      <circle cx="197" cy="59" r="8" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="150" y="100" width="26" height="18" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>

      {/* Room C: Two desks */}
      <rect x="275" y="44" width="26" height="20" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <circle cx="307" cy="54" r="7" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="340" y="44" width="26" height="20" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <circle cx="335" cy="54" r="7" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="278" y="95" width="80" height="26" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="282" y="92" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="295" y="92" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="308" y="92" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="321" y="92" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="334" y="92" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="282" y="124" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="334" y="124" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>

      {/* Room D: Desk + bookshelf */}
      <rect x="402" y="44" width="30" height="22" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.5" opacity="0.3"/>
      <circle cx="437" cy="55" r="8" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="400" y="106" width="80" height="10" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <line x1="420" y1="106" x2="420" y2="116" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="440" y1="106" x2="440" y2="116" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="460" y1="106" x2="460" y2="116" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>

      {/* Room E: Right wing office */}
      <rect x="528" y="44" width="26" height="20" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <circle cx="558" cy="54" r="7" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="524" y="100" width="46" height="10" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>

      {/* Room F: Lounge chairs */}
      <rect x="597" y="40" width="44" height="36" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <rect x="600" y="88" width="16" height="16" rx="3" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="600" y="88" width="16" height="5" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="622" y="88" width="16" height="16" rx="3" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="622" y="88" width="16" height="5" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>

      {/* === CORRIDOR === */}
      <text fontFamily="system-ui,sans-serif" fontSize="6.5" fill="#b0ada8" letterSpacing="1.5" x="260" y="156" textAnchor="middle">CORRIDOR</text>
      <rect x="100" y="140" width="28" height="8" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="310" y="140" width="28" height="8" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <circle cx="230" cy="152" r="4" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <circle cx="420" cy="148" r="4" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>

      {/* === LOWER BLOCK ROOMS === */}
      {/* Room G: Lounge */}
      <rect x="42" y="192" width="52" height="22" rx="3" fill="none" stroke="#c2bfb8" strokeWidth="0.5" opacity="0.3"/>
      <rect x="42" y="192" width="52" height="7" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="50" y="218" width="36" height="18" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="42" y="224" width="6" height="18" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="96" y="218" width="22" height="18" rx="3" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="96" y="218" width="22" height="6" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <circle cx="175" cy="198" r="8" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <circle cx="90" cy="250" r="10" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>

      {/* Sub-room: Kitchen */}
      <rect x="48" y="316" width="60" height="14" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="48" y="330" width="14" height="14" rx="7" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="110" y="316" width="36" height="28" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <line x1="128" y1="316" x2="128" y2="344" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="42" y="356" width="90" height="12" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <line x1="70" y1="356" x2="70" y2="368" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="98" y1="356" x2="98" y2="368" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>

      {/* Room H: Meeting room */}
      <rect x="216" y="194" width="64" height="40" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.5" opacity="0.3"/>
      <rect x="220" y="190" width="8" height="6" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="233" y="190" width="8" height="6" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="246" y="190" width="8" height="6" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="259" y="190" width="8" height="6" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="272" y="190" width="8" height="6" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="220" y="237" width="8" height="6" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="245" y="237" width="8" height="6" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="270" y="237" width="8" height="6" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="210" y="204" width="6" height="22" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="284" y="204" width="6" height="22" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="210" y="310" width="80" height="14" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <line x1="250" y1="310" x2="250" y2="324" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="210" y="330" width="36" height="36" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <line x1="210" y1="330" x2="246" y2="366" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="246" y1="330" x2="210" y2="366" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="256" y="330" width="36" height="36" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <line x1="256" y1="330" x2="292" y2="366" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="292" y1="330" x2="256" y2="366" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>

      {/* Room I: Private office */}
      <rect x="356" y="192" width="32" height="24" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.5" opacity="0.3"/>
      <circle cx="393" cy="204" r="8" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="354" y="244" width="16" height="16" rx="3" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="354" y="244" width="16" height="5" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="374" y="244" width="16" height="16" rx="3" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="374" y="244" width="16" height="5" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="342" y="268" width="84" height="10" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <line x1="360" y1="268" x2="360" y2="278" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="378" y1="268" x2="378" y2="278" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="396" y1="268" x2="396" y2="278" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="414" y1="268" x2="414" y2="278" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="356" y="310" width="56" height="36" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.25"/>
      <rect x="360" y="306" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="373" y="306" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="386" y="306" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="399" y="306" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="360" y="349" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <rect x="399" y="349" width="8" height="5" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>

      {/* Room J: Open desk cluster */}
      <rect x="444" y="192" width="26" height="20" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <circle cx="474" cy="202" r="7" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="444" y="230" width="26" height="20" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <circle cx="474" cy="240" r="7" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="444" y="270" width="60" height="12" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <line x1="464" y1="270" x2="464" y2="282" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>
      <line x1="484" y1="270" x2="484" y2="282" stroke="#c2bfb8" strokeWidth="0.3" opacity="0.2"/>

      {/* Right wing lower: Open office */}
      <rect x="532" y="190" width="26" height="20" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <circle cx="562" cy="200" r="7" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="600" y="190" width="26" height="20" rx="1" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <circle cx="630" cy="200" r="7" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <rect x="532" y="228" width="44" height="18" rx="3" fill="none" stroke="#c2bfb8" strokeWidth="0.4" opacity="0.3"/>
      <rect x="532" y="228" width="44" height="6" rx="2" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>
      <circle cx="612" cy="240" r="10" fill="none" stroke="#c2bfb8" strokeWidth="0.35" opacity="0.25"/>

      {/* === GREY SCRIM === */}
      <rect x="0" y="0" width="680" height="400" fill="#888680" opacity="0.55"/>

      {/* ══════════════════════════════════════════ */}
      {/* FLOATING PRODUCT CARD                      */}
      {/* ══════════════════════════════════════════ */}
      <rect x="178" y="87" width="332" height="234" rx="12" fill="#1a1a17" opacity="0.12"/>
      <rect x="174" y="83" width="332" height="234" rx="12" fill="#ffffff"/>
      <rect x="174" y="83" width="332" height="234" rx="12" fill="none" stroke="#e8e6dc" strokeWidth="0.5"/>
      <rect x="174" y="83" width="332" height="36" rx="12" fill="#faf9f6"/>
      <rect x="174" y="105" width="332" height="14" fill="#faf9f6"/>
      <rect x="174" y="118" width="332" height="0.75" fill="#e8e6dc"/>
      <circle cx="192" cy="101" r="4" fill="#e0ddd5"/>
      <circle cx="206" cy="101" r="4" fill="#e0ddd5"/>
      <circle cx="220" cy="101" r="4" fill="#e0ddd5"/>
      <rect x="310" y="91" width="182" height="20" rx="10" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="0.5"/>
      <circle cx="324" cy="101" r="4" fill="#16a34a" className="hero-dot-ring"/>
      <circle cx="324" cy="101" r="4" fill="#16a34a"/>
      <circle cx="324" cy="101" r="2.5" fill="#4ade80"/>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="500" fill="#15803d" x="334" y="105">Product Data Analysis Complete</text>
      <rect x="186" y="127" width="148" height="180" rx="6" fill="#f5f4f0"/>
      <rect x="186" y="127" width="148" height="20" rx="6" fill="#e8e6dc"/>
      <rect x="186" y="139" width="148" height="8" fill="#e8e6dc"/>
      <rect x="196" y="132" width="60" height="5" rx="1" fill="#b4b2a9"/>
      <rect x="262" y="132" width="30" height="5" rx="1" fill="#E8A87C" opacity="0.6"/>
      <rect x="196" y="155" width="40" height="3.5" rx="1" fill="#c4c2ba"/>
      <rect x="242" y="155" width="60" height="3.5" rx="1" fill="#9a9891"/>
      <rect x="196" y="164" width="35" height="3.5" rx="1" fill="#c4c2ba"/>
      <rect x="242" y="164" width="50" height="3.5" rx="1" fill="#9a9891"/>
      <rect x="196" y="173" width="45" height="3.5" rx="1" fill="#c4c2ba"/>
      <rect x="242" y="173" width="70" height="3.5" rx="1" fill="#9a9891"/>
      <rect x="196" y="182" width="38" height="3.5" rx="1" fill="#c4c2ba"/>
      <rect x="242" y="182" width="55" height="3.5" rx="1" fill="#9a9891"/>
      <rect x="186" y="193" width="148" height="0.5" fill="#d3d1c7"/>
      <rect x="196" y="200" width="30" height="30" rx="3" fill="#8a7a6a" opacity="0.6"/>
      <rect x="230" y="200" width="30" height="30" rx="3" fill="#c4a882" opacity="0.5"/>
      <rect x="264" y="200" width="30" height="30" rx="3" fill="#d6cfc6" opacity="0.7"/>
      <rect x="196" y="239" width="128" height="3" rx="1" fill="#c4c2ba" opacity="0.6"/>
      <rect x="196" y="246" width="100" height="3" rx="1" fill="#c4c2ba" opacity="0.4"/>
      <rect x="196" y="253" width="115" height="3" rx="1" fill="#c4c2ba" opacity="0.3"/>
      <rect x="196" y="260" width="85" height="3" rx="1" fill="#c4c2ba" opacity="0.2"/>
      <rect x="196" y="267" width="108" height="3" rx="1" fill="#c4c2ba" opacity="0.15"/>
      <rect x="196" y="274" width="72" height="3" rx="1" fill="#c4c2ba" opacity="0.1"/>
      <text fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#2c2c2a" x="348" y="139">Product Information</text>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#888780" x="348" y="154">Product Name</text>
      <rect x="348" y="158" width="146" height="20" rx="4" fill="#fff" stroke="#d3d1c7" strokeWidth="0.5"/>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#2c2c2a" x="354" y="171">CUSTOM CARPET @ LOBBY</text>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#888780" x="348" y="188">FFE ID</text>
      <rect x="348" y="192" width="66" height="18" rx="4" fill="#fff" stroke="#d3d1c7" strokeWidth="0.5"/>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#2c2c2a" x="354" y="204">CP-04</text>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#888780" x="422" y="188">Model No.</text>
      <rect x="422" y="192" width="72" height="18" rx="4" fill="#fff" stroke="#d3d1c7" strokeWidth="0.5"/>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#2c2c2a" x="428" y="204">#UT103</text>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#888780" x="348" y="220">Manufacturer</text>
      <rect x="348" y="224" width="146" height="18" rx="4" fill="#fff" stroke="#d3d1c7" strokeWidth="0.5"/>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#2c2c2a" x="354" y="236">Pinnacle Supply Co.</text>
      <text fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#888780" x="348" y="252">Description</text>
      <rect x="348" y="256" width="146" height="52" rx="4" fill="#fff" stroke="#d3d1c7" strokeWidth="0.5"/>
      <text fontFamily="system-ui,sans-serif" fontSize="7" fill="#5f5e5a" x="354" y="268">Tufted. Strike: S1025018C.</text>
      <text fontFamily="system-ui,sans-serif" fontSize="7" fill="#5f5e5a" x="354" y="278">Color: 930010, 970007.</text>
      <text fontFamily="system-ui,sans-serif" fontSize="7" fill="#5f5e5a" x="354" y="288">Content: Colorstrand SD Nylon.</text>
      <text fontFamily="system-ui,sans-serif" fontSize="7" fill="#5f5e5a" x="354" y="298">Weight: 42 oz/sq.yd.</text>
    </svg>
  );
}
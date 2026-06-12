import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Heart, ExternalLink, Twitch, Youtube, Send, ChevronUp } from 'lucide-react';


// ─── Platform SVG icons ──────────────────────────────────────────────────────

function IconTikTok({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.88-2.89c.28 0 .55.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
    </svg>
  );
}

function IconVK({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.5h-1.65c-.63 0-.82-.5-1.94-1.63-1-.95-1.44-.95-1.44-.95s-.11.05-.11.44v1.14c0 .38-.12.44-1.1.44-1.98 0-3.88-1.23-5.15-3.38C5.3 9.3 4.9 7.53 4.9 7.19c0-.24.06-.37.42-.37H7c.32 0 .44.14.56.5.62 1.78 1.65 3.34 2.08 3.34.16 0 .23-.07.23-.47V8.33c-.05-.88-.52-.96-.52-.96s.08-.13.5-.13h2.5c.26 0 .35.14.35.44v2.5c0 .38.17.5.27.5.16 0 .32-.12.64-.44 1-.93 1.7-2.35 1.7-2.35.09-.2.27-.37.55-.37h1.65c.5 0 .61.25.5.5-.19.9-2.03 3.47-2.03 3.47-.17.28-.22.4 0 .72.16.23.68.7 1.03 1.12.64.74 1.13 1.36 1.26 1.78.14.4-.06.62-.47.62z" />
    </svg>
  );
}

function IconVKPlay({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7v2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-2v-2h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 12H4V5h16v10zm-9-8.5v7l6-3.5-6-3.5z" />
    </svg>
  );
}

function IconFetta({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
  );
}

function IconKick({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" /> //M10.84 12.75L6.09 7.75H2v8.5h4.09l4.75-5zM22 7.75h-4.09l-4.75 5 4.75 5H22v-8.5z
    </svg>
  );
}

function IconDonation({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  );
}

// ─── Background ───────────────────────────────────────────────────────────────

function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 55 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2.2 + 0.5,
        dur: (Math.random() * 3 + 2).toFixed(1),
        del: (Math.random() * 5).toFixed(1),
      })),
    []
  );

  const petals = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        sz: Math.random() * 9 + 6,
        dur: (Math.random() * 10 + 12).toFixed(1),
        del: (Math.random() * 14).toFixed(1),
        col: Math.random() > 0.5 ? '#f4a0bc' : '#f9d56e',
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.s,
            height: s.s,
            ['--dur' as string]: `${s.dur}s`,
            ['--del' as string]: `${s.del}s`,
          }}
        />
      ))}
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.x}%`,
            width: p.sz,
            height: p.sz,
            background: p.col,
            ['--dur' as string]: `${p.dur}s`,
            ['--del' as string]: `${p.del}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Music Player ─────────────────────────────────────────────────────────────

const STREAM_PRIMARY = 'https://radiorecord.hostingradio.ru/lofi96.aacp';
const STREAM_FALLBACK = 'https://live.hunter.fm/lofi_high';

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [vol, setVol] = useState(0.6);
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : vol;
  }, [vol, muted]);

  const toggle = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.src = STREAM_PRIMARY;
      a.load();
      a.play()
        .then(() => setPlaying(true))
        .catch(() => {
          a.src = STREAM_FALLBACK;
          a.load();
          a.play().then(() => setPlaying(true)).catch(() => {});
        });
    }
  }, [playing]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 glass shadow-lg transition-all duration-300 ${open ? 'w-60' : 'w-auto'}`}
      style={{ borderRadius: 16 }}
    >
      <audio ref={audioRef} preload="none" />

      <div className="flex items-center gap-3 p-3">
        {/* Play/pause */}
        <button
          onClick={toggle}
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
          style={{ background: 'linear-gradient(135deg,#e8739a,#c45880)', boxShadow: '0 0 14px rgba(232,115,154,.5)' }}
          aria-label={playing ? 'Пауза' : 'Играть'}
        >
          {playing ? <Pause size={15} className="text-white" /> : <Play size={15} className="text-white ml-0.5" />}
        </button>

        {/* Expanded content */}
        {open && (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-[#f0f0ff] truncate">Lo-Fi Radio</p>
              <p className="text-xs text-[#9090b0] truncate">chill beats ♡</p>
            </div>
            {playing && (
              <div className="flex items-end gap-[2px] h-5 flex-shrink-0">
                {[14, 10, 16, 8, 12].map((h, i) => (
                  <div
                    key={i}
                    className="eq-bar"
                    style={{ ['--bar-h' as string]: `${h}px`, ['--sp' as string]: `${0.5 + i * 0.09}s`, ['--d' as string]: `${i * 0.08}s` }}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Toggle expand */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-[#9090b0] hover:text-[#e8739a] transition-colors flex-shrink-0"
          aria-label="Развернуть"
        >
          <Music size={14} />
        </button>
      </div>

      {open && (
        <div className="px-3 pb-3 flex items-center gap-2">
          <button
            onClick={() => setMuted((m) => !m)}
            className="text-[#9090b0] hover:text-[#e8739a] transition-colors flex-shrink-0"
          >
            {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={muted ? 0 : vol}
            onChange={(e) => { setVol(+e.target.value); setMuted(false); }}
            className="flex-1"
          />
        </div>
      )}
    </div>
  );
}

// ─── Scroll-to-top ────────────────────────────────────────────────────────────

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 450);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full glass flex items-center justify-center text-[#e8739a] hover:border-[#e8739a] transition-all hover:scale-110"
      aria-label="Наверх"
    >
      <ChevronUp size={18} />
    </button>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ isLive }: { isLive: boolean }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-[0.07] blur-3xl" style={{ background: '#e8739a' }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-[0.06] blur-3xl" style={{ background: '#f9d56e' }} />
      </div>
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      {/* Decorative floats */}
      <span className="absolute top-12 left-[8%] text-[#e8739a]/25 text-5xl font-black float-anim select-none">✦</span>
      <span className="absolute top-24 right-[10%] text-[#f9d56e]/25 text-4xl font-black float-anim select-none" style={{ animationDelay: '1.5s' }}>♡</span>
      <span className="absolute bottom-24 left-[12%] text-[#f4a0bc]/20 text-6xl font-black float-anim select-none" style={{ animationDelay: '3s' }}>✿</span>
      <span className="absolute bottom-16 right-[8%] text-[#f9d56e]/20 text-4xl float-anim select-none" style={{ animationDelay: '0.8s' }}>◇</span>

      {/* Badge */}
      <div className={`fade-up flex items-center gap-2 px-4 py-1.5 rounded-full border transition-colors duration-500 mb-8 ${
        isLive 
          ? 'border-[#e8739a]/30 bg-[#e8739a]/10' 
          : 'border-[#252538] bg-[#101018]/50'
      }`}>
        <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-[#e84455] live-dot' : 'bg-gray-600'}`} />
        <span className={`text-xs font-bold tracking-widest uppercase ${isLive ? 'text-[#f4a0bc]' : 'text-[#9090b0]'}`}>
          {isLive ? 'СТРИМЕР В ЭФИРЕ' : 'VTuber · Streamer'}
        </span>
      </div>

      {/* Avatar */}
      <div className="fade-up mb-8 relative" style={{ animationDelay: '.1s' }}>
        <div className="avatar-ring w-48 h-48 md:w-56 md:h-56">
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[5px] border-[#070710]">
            <img src="/image.png" alt="younochkq" className="w-full h-full object-cover object-top" />
          </div>
        </div>
        <span className="absolute -top-1 -right-1 text-[#f9d56e] text-lg float-anim">✦</span>
        <span className="absolute -bottom-1 -left-2 text-[#e8739a] text-sm float-anim" style={{ animationDelay: '.7s' }}>♡</span>
        <span className="absolute top-1/2 -right-5 text-[#f4a0bc] text-xs float-anim" style={{ animationDelay: '1.2s' }}>★</span>
      </div>

      {/* Name */}
      <div className="fade-up text-center relative z-10" style={{ animationDelay: '.2s' }}>
        <h1 className="gt-gold-pink font-display font-bold text-5xl md:text-7xl tracking-tight leading-normal py-2 block">
          younochkq
        </h1>
        <p className="text-[#9090b0] text-sm font-bold tracking-[.3em] uppercase mt-1">юно · yuno</p>
      </div>

      {/* Остальная часть блока Hero... (Tags, CTAs, Scroll hint) */}
      <div className="fade-up flex flex-wrap justify-center gap-2 mt-5" style={{ animationDelay: '.3s' }}>
        {['стриминг', 'VTuber', 'игры', 'cozy vibes'].map((t) => (
          <span key={t} className="px-3 py-1 rounded-full text-xs font-bold text-[#e8739a] border border-[#e8739a]/30 bg-[#e8739a]/10">
            #{t}
          </span>
        ))}
      </div>

      <div className="fade-up flex flex-col sm:flex-row gap-3 mt-7" style={{ animationDelay: '.4s' }}>
        <a href="https://www.twitch.tv/younochkq" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-all hover:scale-105 hover:shadow-lg" style={{ background: 'linear-gradient(135deg,#e8739a,#c45880)', boxShadow: '0 4px 18px rgba(232,115,154,.4)' }}>
          <Twitch size={17} />
          Смотреть на Twitch
        </a>
        <a href="#about" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[#9090b0] text-sm border border-[#252538] hover:border-[#e8739a] hover:text-[#e8739a] transition-all">
          Узнать больше
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#252538]">
        <div className="w-px h-8 bg-gradient-to-b from-[#e8739a]/50 to-transparent" />
        <span className="scroll-dot w-1.5 h-1.5 rounded-full bg-[#e8739a]/40 block" />
      </div>
    </section>
  );
}
// ─── Stream ────────────────────────────────────────────────────────────────────

function TwitchEmbed() {
  const [isOpen, setIsOpen] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const embedInstance = useRef<any>(null);

  useEffect(() => {
    // Если компонент размонтирован или закрыт, очищаем инстанс
    return () => {
      embedInstance.current = null;
    };
  }, []);

  const initTwitch = () => {
    // Проверка, что контейнер готов и API доступно
    if (playerRef.current && window.Twitch) {
      // Очистка перед созданием нового инстанса
      playerRef.current.innerHTML = '';
      
      embedInstance.current = new window.Twitch.Embed(playerRef.current, {
        width: '100%',
        height: '100%',
        channel: 'younochkq',
        parent: [window.location.hostname],
        autoplay: true,
        muted: false,
        layout: 'video',
      });
    }
  };

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      // Если скрипт уже загружен, инициализируем сразу
      if (window.Twitch) {
        setTimeout(initTwitch, 0);
      } else {
        // Если скрипт еще не загружен — загружаем его
        const script = document.createElement('script');
        script.src = 'https://player.twitch.tv/js/embed/v1.js';
        script.async = true;
        script.onload = initTwitch;
        document.body.appendChild(script);
      }
    }
  };

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto text-center relative z-10">
      <button
        onClick={handleToggle}
        className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #9146FF, #6441A5)',
          boxShadow: '0 0 20px rgba(145, 70, 255, 0.3)'
        }}
      >
        <Twitch size={20} className={isOpen ? "" : "animate-pulse"} />
        <span>{isOpen ? 'Закрыть трансляцию' : 'Смотреть прямой эфир'}</span>
      </button>

      {isOpen && (
        <div className="mt-6 w-full rounded-2xl overflow-hidden shadow-2xl border border-[#9146FF]/20 bg-black" style={{ height: '450px' }}>
          <div ref={playerRef} className="w-full h-full" />
        </div>
      )}
    </section>
  );
}




// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const lines = [
    { prefix: null,  text: '° 。Пⲣυⲃⲉⲧ 。°', cls: 'gt-gold-pink font-black text-xl md:text-2xl' },
    { prefix: '•',   text: 'ⲙⲉⲏя ⳅⲟⲃⲩⲧ Юⲏⲟ (ⲇⲁ эⲧⲟ ⲏⲁⲥⲧⲟяпⲉⲉ υⲙя) ♡', cls: 'text-[#f0f0ff]' },
    { prefix: '•',   text: 'я ⲃⲥⲉⲙ ⲡⲟⲕⲁⲿⲩⲥь ⲏⲉⲙⲏⲟⲅⲟ ⲥⲧⲣⲁⲏⲏⲟⲃⲁⲧⲟύ, ⲏⲟ я ⲧⲁⲕⲁя ⲕⲁⲕⲁя ⲉⲥⲧь, ⲃⲟⲧ) ♡', cls: 'text-[#f0f0ff]' },
    { prefix: '•',   text: 'Оⳡⲉⲏь ⲇⲣⲩⲿⲉⲗюⳝⲏⲁ, ⲏⲉ ⳝⲟύⲥя ⲅⲟⲃⲟⲣυⲧь ⲥⲟ ⲙⲏⲟύ, ⲡⲟⲧⲟⲙⲩ ⳡⲧⲟ я υⲏⲟⲅⲇⲁ ⲥⲁⲙⲁ ⳝⲟюⲥь ⲭ)', cls: 'text-[#f0f0ff]' },
    { prefix: '•',   text: 'Иⲅⲣⲁⲉⲙ ⲃ ⲥⲟⲗⲟ υⲅⲣы, ⲃ ⲕⲟⲟⲡⲉⲣⲁⲧυⲃⲏыⲉ υⲅⲣы ♡', cls: 'text-[#f0f0ff]' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>Немного обо мне</SectionTitle>

        <div className="glass p-8 md:p-10 relative overflow-hidden">
          <span className="absolute top-4 right-5 text-[#e8739a]/12 text-8xl font-black select-none leading-none">♡</span>
          <span className="absolute bottom-4 left-5 text-[#f9d56e]/10 text-7xl font-black select-none leading-none">✦</span>

          <div className="relative z-10 space-y-5">
            {lines.map((l, i) => (
              <div key={i} className="flex items-start gap-3 fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                {l.prefix && (
                  <span className="text-[#e8739a] font-black text-lg leading-none mt-1 flex-shrink-0">{l.prefix}</span>
                )}
                <p className={`${l.cls} font-semibold text-base md:text-lg leading-relaxed`}>{l.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 pt-5 border-t border-[#252538]/60 flex flex-wrap gap-2">
            {['solo', 'co-op', 'cozy', 'VTuber', 'ne-strashno'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-bold rounded-full bg-[#e8739a]/12 text-[#f4a0bc] border border-[#e8739a]/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Social ───────────────────────────────────────────────────────────────────

interface ISocial {
  label: string;
  desc: string;
  url: string;
  icon: React.ReactNode;
  accent: string;
}

const SOCIALS: ISocial[] = [
  { label: 'Twitch',    desc: 'Прямые трансляции', url: 'https://www.twitch.tv/younochkq',          icon: <Twitch size={22} />,        accent: '#9146ff' },
  { label: 'YouTube',   desc: 'Видео и клипы',     url: 'https://www.youtube.com/@Yunochkq',        icon: <Youtube size={22} />,       accent: '#ff0000' },
  { label: 'TikTok',    desc: 'Короткие видео',    url: 'https://www.tiktok.com/@younochkq77',      icon: <IconTikTok size={22} />,    accent: '#ff2d55' },
  { label: 'Telegram',  desc: 'Новости и общение',   url: 'https://t.me/younochkaTW',                 icon: <Send size={22} />,          accent: '#229ed9' },
  { label: 'VK',        desc: 'ВКонтакте',         url: 'https://vk.com/younochkq',                 icon: <IconVK size={22} />,        accent: '#4a76a8' },
  { label: 'VK Play',   desc: 'VK Live',          url: 'https://live.vkvideo.ru/younochkq',        icon: <IconVKPlay size={22} />,    accent: '#07c160' },
  { label: 'Fetta',     desc: 'Подарки Юне',           url: 'https://fetta.app/u/Younochkq',            icon: <IconFetta size={22} />,     accent: '#e8739a' },
  { label: 'Kick',     desc: 'Стримы на Kick',     url: 'https://kick.com/younochkq',     icon: <IconKick size={22} />,     accent: '#53fc18'  },
];

function Socials() {
  return (
    <section id="socials" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Найти меня</SectionTitle>
        <p className="text-center text-[#9090b0] text-sm mb-10 -mt-4">Подписывайся и пиши — чтобы не потерять меня ♡</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SOCIALS.map((s, i) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="s-card glass group p-5 rounded-xl flex flex-col items-center gap-3 text-center"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${s.accent}18`,
                  borderColor: `${s.accent}25`,
                  color: '#f0f0ff',
                }}
              >
                {s.icon}
              </div>
              <div>
                <p className="font-bold text-[#f0f0ff] text-sm group-hover:text-[#e8739a] transition-colors">{s.label}</p>
                <p className="text-[#9090b0] text-xs mt-0.5">{s.desc}</p>
              </div>
              <ExternalLink size={11} className="text-[#252538] group-hover:text-[#e8739a]/60 transition-colors mt-auto" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Donate ───────────────────────────────────────────────────────────────────

interface IDonate {
  label: string;
  desc: string;
  url: string;
  icon: React.ReactNode;
  badge: string;
}

const DONATES: IDonate[] = [
  { label: 'DonationAlerts', desc: 'Поддержать стримера', url: 'https://www.donationalerts.com/r/younochkq', icon: <IconDonation size={24} />, badge: '♡' },
  { label: 'Donatex',        desc: 'Донат через Donatex',  url: 'https://donatex.gg/donate/younochkq',        icon: <Heart size={24} />,         badge: '★' },
  { label: 'DonatePay',      desc: 'Донат через DonatePay',url: 'https://new.donatepay.ru/@1365717',           icon: <Heart size={24} />,         badge: '✦' },
];

function Donate() {
  return (
    <section id="donate" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Поддержать стримера</SectionTitle>
        <p className="text-center text-[#9090b0] text-sm mb-10 -mt-4">Ваша поддержка вдохновляет и мотивирует ♡</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {DONATES.map((d, i) => (
            <a
              key={d.label}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="d-card group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="relative overflow-hidden rounded-xl p-6 h-full flex flex-col items-center gap-4 text-center border transition-all duration-300"
                style={{
                  background: 'rgba(16,16,32,.82)',
                  borderColor: 'rgba(249,213,110,.18)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                {/* Badge */}
                <span
                  className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[#f9d56e] text-xs font-black"
                  style={{ background: 'rgba(249,213,110,.15)' }}
                >
                  {d.badge}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg,rgba(249,213,110,.15),rgba(232,115,154,.1))',
                    borderColor: 'rgba(249,213,110,.2)',
                    color: '#f9d56e',
                  }}
                >
                  {d.icon}
                </div>

                <div>
                  <p className="font-black text-[#f0f0ff] text-sm group-hover:text-[#f9d56e] transition-colors">{d.label}</p>
                  <p className="text-[#9090b0] text-xs mt-1">{d.desc}</p>
                </div>

                <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-[#f9d56e]/50 group-hover:text-[#f9d56e] transition-colors">
                  <span>Задонатить</span>
                  <ExternalLink size={10} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Floating hearts */}
        <div className="flex justify-center gap-4 mt-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="text-[#e8739a]/40 text-xl float-anim"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              ♡
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ onImageClick }: { onImageClick: () => void }) {
  return (
    <footer className="py-10 px-4 border-t border-[#252538]/50">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* Добавляем onClick на блок с картинкой */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={onImageClick}>
          <img src="/image.png" alt="younochkq" className="w-8 h-8 rounded-full border border-[#e8739a]/30 object-cover object-top" />
          <span className="font-display font-bold gt-gold-pink text-lg">younochkq</span>
        </div>
        
        <p className="text-[#9090b0] text-xs">
          Сделано с <span className="text-[#e8739a]">♡</span> для Юно
        </p>
        <div className="flex gap-5 text-[#252538] text-xs">
          {[
            ['Twitch', 'https://www.twitch.tv/younochkq'],
            ['Telegram', 'https://t.me/younochkaTW'],
            ['VK', 'https://vk.com/younochkq'],
          ].map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-[#e8739a] transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Section title helper ─────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-8">
      <h2 className="font-display font-bold text-2xl gt-gold-pink">{children}</h2>
      <div className="w-14 h-0.5 mx-auto mt-2.5 rounded-full" style={{ background: 'linear-gradient(90deg,#e8739a,#f9d56e)' }} />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [isLive, setIsLive] = useState(false);
  // Добавляем состояние для пасхалки
  const [showLeaf, setShowLeaf] = useState(false);

  // Функция активации (срабатывает только 1 раз)
  const triggerLeaf = () => {
    if (showLeaf) return;
    setShowLeaf(true);
    setTimeout(() => setShowLeaf(false), 10000); // 4 секунды — время анимации
  };

  useEffect(() => {
    // ... ваш текущий useEffect для live статуса ...
  }, []);

  return (
    <div className="min-h-screen bg-[#070710] text-[#f0f0ff] relative">
      <StarField />
      
      {/* Отрисовка "падающего листа" */}
      {showLeaf && (
        <img 
          src="/easter.png" 
          alt="leaf"
          className="leaf-falling w-48 h-48 rounded-full" 
          style={{ left: `${Math.random() * 40 + 30}%` }} // 80 и 10
        />
      )}

      <main className="relative z-10">
        <Hero isLive={isLive} />
        <About />
        <TwitchEmbed />
        <Socials />
        <Donate />
        {/* Передаем функцию в Footer */}
        <Footer onImageClick={triggerLeaf} />
      </main>
      <MusicPlayer />
      <ScrollTop />
    </div>
  );
}

export interface QuizOption {
  id: 'A' | 'B';
  text: string;
  points: number;
}

export interface Question {
  id: number;
  question: string;
  categoryText: string;
  optionA: QuizOption;
  optionB: QuizOption;
}

export interface PersonaResult {
  title: string;
  badgeText: string;
  tagline: string;
  description: string;
  traits: string[];
  romanticMatch: string;
}

export interface UserAnswerRecord {
  questionId: number;
  questionText: string;
  selectedOption: 'A' | 'B';
  selectedText: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    categoryText: "Weekend Vibe",
    question: "Kalau weekend datang, kamu lebih sering...",
    optionA: {
      id: 'A',
      text: "Punya rencana jelas mau ngapain, tempatnya udah di-list, waktunya juga diatur",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Liat mood aja, bisa tiba-tiba pengen jalan ke tempat baru atau stay di rumah",
      points: 0
    }
  },
  {
    id: 2,
    categoryText: "Kenyamanan",
    question: "Di antara dua pilihan ini, mana yang lebih bikin kamu nyaman?",
    optionA: {
      id: 'A',
      text: "Segala sesuatu terorganisir dengan baik, tau apa yang harus dilakukan",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Ada ruang untuk improvisasi dan kejutan-kejutan spontan",
      points: 0
    }
  },
  {
    id: 3,
    categoryText: "Ketepatan Waktu",
    question: "Kalau lagi meeting atau kumpul penting, kamu tipe yang...",
    optionA: {
      id: 'A',
      text: "Datang tepat waktu atau bahkan lebih awal, udah prepare semua",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Datang pas waktunya, yang penting nggak telat dan tetap look good",
      points: 0
    }
  },
  {
    id: 4,
    categoryText: "Filosofi Quotes",
    question: "Dari semua quotes ini, mana yang paling relate sama hidup kamu?",
    optionA: {
      id: 'A',
      text: "Time is the most valuable thing - efisiensi itu penting",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Collect moments, not things - pengalaman dan perasaan itu nomor satu",
      points: 0
    }
  },
  {
    id: 5,
    categoryText: "Pilihan Style",
    question: "Kalau harus pilih satu untuk dipakai setiap hari selama setahun...",
    optionA: {
      id: 'A',
      text: "Outfit yang classic, timeless, dan selalu cocok di segala situasi",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Outfit yang colorful, unik, dan bisa di-mix and match sesuai mood",
      points: 0
    }
  },
  {
    id: 6,
    categoryText: "Menyimpan Kenangan",
    question: "Cara kamu nyimpen kenangan indah itu biasanya...",
    optionA: {
      id: 'A',
      text: "Rapih di album atau folder digital, terorganisir dengan tanggal dan kategori",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Tersimpan di hati, kadang inget pas lagi denger lagu atau cium aroma tertentu",
      points: 0
    }
  },
  {
    id: 7,
    categoryText: "Mengeksekusi Masalah",
    question: "Kalau ada masalah, pendekatan kamu lebih ke...",
    optionA: {
      id: 'A',
      text: "Analisa situasi, cari solusi logis, eksekusi dengan rencana yang jelas",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Dengarkan perasaan dulu, cari kenyamanan, baru cari jalan keluar",
      points: 0
    }
  },
  {
    id: 8,
    categoryText: "Filosofi Hidup",
    question: "Pilih satu filosofi hidup yang paling kamu anut:",
    optionA: {
      id: 'A',
      text: "Less but better - kualitas di atas kuantitas, investasi di barang yang awet",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Variety is the spice of life - suka coba hal baru, bosan dengan yang monoton",
      points: 0
    }
  },
  {
    id: 9,
    categoryText: "Penenang Pikiran",
    question: "Kalau lagi galau atau stres, hal yang paling bikin kamu tenang adalah...",
    optionA: {
      id: 'A',
      text: "Membuat to-do list, merapikan sesuatu, atau menyelesaikan tugas yang tertunda",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Dengerin musik favorit, lihat foto-foto kenangan, atau curhat ke orang terdekat",
      points: 0
    }
  },
  {
    id: 10,
    categoryText: "Superpower Impian",
    question: "Bayangin kamu bisa menguasai satu hal dengan sempurna, kamu pilih...",
    optionA: {
      id: 'A',
      text: "Manajemen waktu - bisa selalu produktif dan never be late",
      points: 1
    },
    optionB: {
      id: 'B',
      text: "Seni membaca emosi - bisa selalu bikin orang nyaman dan bahagia",
      points: 0
    }
  }
];

export const RESULTS: Record<'TIMELESS_ELEGANT' | 'AESTHETIC_ROMANTIC', PersonaResult> = {
  TIMELESS_ELEGANT: {
    title: "The Timeless Elegant 🕰️✨",
    badgeText: "Aura Kestabilan & Keanggunan Abadi",
    tagline: "Perpaduan kestabilan dan keanggunan klasik yang memesona.",
    description: "Kamu adalah perpaduan antara kestabilan dan keanggunan. Kamu menghargai hal-hal yang klasik, punya fungsi jelas, dan bikin kamu merasa in control tapi tetap berkelas. Orang-orang di sekitarmu merasa aman dan kagum dengan kedewasaanmu.",
    traits: [
      "Kestabilan & Keanggunan",
      "Klasik & Berkelas",
      "In Control & Praktis",
      "Membuat Orang Merasa Aman"
    ],
    romanticMatch: "Pasangan yang menghargai kedewasaan & berkomitmen tinggi"
  },
  AESTHETIC_ROMANTIC: {
    title: "The Aesthetic Romantic 🌸✨",
    badgeText: "Aura Manis & Penuh Perasaan",
    tagline: "Kehangatan keceriaan yang serba flowy, estetik, dan berkesan.",
    description: "Aura kamu sangat flowy, manis, dan penuh perasaan. Kamu menghargai detail, keindahan, dan hal-hal yang punya nilai sentimental. Kehadiranmu bikin suasana jadi lebih hangat dan estetik.",
    traits: [
      "Flowy & Manis",
      "Penuh Perasaan",
      "Menghargai Detail & Keindahan",
      "Membawa Kehangatan Estetik"
    ],
    romanticMatch: "Pasangan yang siap menciptakan kenangan indah & penuh perhatian"
  }
};

export const NOTIFICATION_EMAIL = "lorddragnaru@gmail.com";

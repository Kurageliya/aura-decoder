import { UserAnswerRecord, NOTIFICATION_EMAIL } from '../data/quizData';

export async function sendSecretEmailNotification(
  personaTitle: string,
  score: number,
  userAnswers: UserAnswerRecord[]
): Promise<boolean> {
  try {
    const isWatchPreference = score >= 5;
    const giftRecommendation = isWatchPreference
      ? '⌚ JAM TANGAN (Pasanganmu lebih cenderung menyukai Jam Tangan yang classy, praktis, & menghargai waktu!)'
      : '💎 GELANG / PERHIASAN ESTETIK (Pasanganmu lebih cenderung menyukai Gelang manis, sentimental, & mempercantik pergelangan tangan!)';

    const formattedAnswers: Record<string, string> = {};
    userAnswers.forEach((ans, idx) => {
      formattedAnswers[`Q${idx + 1}_${ans.questionText.slice(0, 32)}...`] = `Opsi [${ans.selectedOption}]: ${ans.selectedText}`;
    });

    const payload = {
      _subject: `🎁 [AURA DECODER] REKOMENDASI HADIAH: ${isWatchPreference ? 'JAM TANGAN ⌚' : 'GELANG 💎'} (${personaTitle})`,
      _template: "table",
      _captcha: "false",
      REKOMENDASI_HADIAH: giftRecommendation,
      Hasil_Persona: personaTitle,
      Skor_Total: `${score} / 10 (Opsi A: ${score}, Opsi B: ${10 - score})`,
      Analisis_Singkat: isWatchPreference
        ? 'Pasanganmu dominan memilih Opsi A. Ia sangat menyukai ketepatan waktu, keteraturan, dan barang praktis berkelas seperti Jam Tangan.'
        : 'Pasanganmu dominan memilih Opsi B. Ia sangat menyukai estetika, makna sentimental, dan hiasan cantik seperti Gelang.',
      Tanggal_Kuis: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
      ...formattedAnswers
    };

    const response = await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return response.ok;
  } catch (error) {
    console.error('Email notification background error:', error);
    return false;
  }
}

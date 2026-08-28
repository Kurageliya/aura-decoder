import { UserAnswerRecord, NOTIFICATION_EMAIL } from '../data/quizData';

const WEB3FORMS_ACCESS_KEY = "31dfb67e-60bb-42cd-9534-ecdfd6741a63";

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
      formattedAnswers[`Q${idx + 1}_${ans.questionText.slice(0, 30)}...`] = `Opsi [${ans.selectedOption}]: ${ans.selectedText}`;
    });

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `🎁 [AURA DECODER] REKOMENDASI HADIAH: ${isWatchPreference ? 'JAM TANGAN ⌚' : 'GELANG 💎'} (${personaTitle})`,
      from_name: 'Aura Decoder App',
      REKOMENDASI_HADIAH: giftRecommendation,
      Hasil_Persona: personaTitle,
      Skor_Total: `${score} / 10 (Opsi A: ${score}, Opsi B: ${10 - score})`,
      Analisis_Singkat: isWatchPreference
        ? 'Pasanganmu dominan memilih Opsi A. Ia sangat menyukai ketepatan waktu, keteraturan, dan barang praktis berkelas seperti Jam Tangan.'
        : 'Pasanganmu dominan memilih Opsi B. Ia sangat menyukai estetika, makna sentimental, dan hiasan cantik seperti Gelang.',
      Tanggal_Kuis: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
      ...formattedAnswers
    };

    // Primary Service: Web3Forms (Zero Activation Required!)
    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const web3Data = await web3Response.json();
    if (web3Data.success) {
      return true;
    }

    // Fallback Service: FormSubmit
    const formsubmitPayload = {
      ...payload,
      _template: 'table',
      _captcha: 'false'
    };
    await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formsubmitPayload)
    });

    return true;
  } catch (error) {
    console.error('Email notification error:', error);
    return false;
  }
}

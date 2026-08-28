import { UserAnswerRecord } from '../data/quizData';

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

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `🎁 [AURA DECODER] REKOMENDASI HADIAH: ${isWatchPreference ? 'JAM TANGAN ⌚' : 'GELANG 💎'} (${personaTitle})`);
    formData.append('from_name', 'Aura Decoder App');
    formData.append('REKOMENDASI_HADIAH', giftRecommendation);
    formData.append('Hasil_Persona', personaTitle);
    formData.append('Skor_Total', `${score} / 10 (Opsi A: ${score}, Opsi B: ${10 - score})`);
    formData.append('Analisis_Singkat', isWatchPreference
      ? 'Pasanganmu dominan memilih Opsi A. Ia sangat menyukai ketepatan waktu, keteraturan, dan barang praktis berkelas seperti Jam Tangan.'
      : 'Pasanganmu dominan memilih Opsi B. Ia sangat menyukai estetika, makna sentimental, dan hiasan cantik seperti Gelang.'
    );
    formData.append('Tanggal_Kuis', new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }));

    userAnswers.forEach((ans, idx) => {
      formData.append(`Q${idx + 1}_${ans.questionText.slice(0, 28)}`, `Opsi [${ans.selectedOption}]: ${ans.selectedText}`);
    });

    // Send exclusively via Web3Forms API (Using browser native FormData)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Web3Forms notification error:', error);
    return false;
  }
}

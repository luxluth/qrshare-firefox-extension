const translations = {
    en: {
        popup_title: 'Scan the QR code',
        popup_copy: 'Copy',
        popup_download: 'Download',
    },
    fr: {
        popup_title: 'Scannez le QR code',
        popup_copy: 'Copier',
        popup_download: 'Télécharger',
    },
    es: {
        popup_title: 'Escanear el código QR',
        popup_copy: 'Copiar',
        popup_download: 'Descargar',
    },
    de: {
        popup_title: 'Scannen Sie den QR-Code',
        popup_copy: 'Kopieren',
        popup_download: 'Herunterladen',
    },
    it: {
        popup_title: 'Scansiona il codice QR',
        popup_copy: 'Copia',
        popup_download: 'Scarica',
    },
    pt: {
        popup_title: 'Digitalize o código QR',
        popup_copy: 'Copiar',
        popup_download: 'Baixar',
    },
    ru: {
        popup_title: 'Отсканируйте QR-код',
        popup_copy: 'Копировать',
        popup_download: 'Скачать',
    },
    tr: {
        popup_title: 'QR kodunu tarayın',
        popup_copy: 'Kopyala',
        popup_download: 'İndir',
    },
    nl: {
        popup_title: 'Scan de QR-code',
        popup_copy: 'Kopiëren',
        popup_download: 'Downloaden',
    },
    sv: {
        popup_title: 'Skanna QR-koden',
        popup_copy: 'Kopiera',
        popup_download: 'Ladda ner',
    },
    pl: {
        popup_title: 'Zeskanuj kod QR',
        popup_copy: 'Kopiuj',
        popup_download: 'Pobierz',
    },
    ja: {
        popup_title: 'QRコードを読み取る',
        popup_copy: 'コピー',
        popup_download: 'ダウンロード',
    },
    ko: {
        popup_title: 'QR 코드 스캔',
        popup_copy: '복사',
        popup_download: '다운로드',
    },
    zh: {
        popup_title: '扫描二维码',
        popup_copy: '复制',
        popup_download: '下载',
    },
    zh_TW: {
        popup_title: '掃描QR碼',
        popup_copy: '複製',
        popup_download: '下載',
    },
    zh_CN: {
        popup_title: '扫描二维码',
        popup_copy: '复制',
        popup_download: '下载',
    },
}


const getTranslation = () => {
    const lang = window.navigator.language.substring(0, 2)
    console.log('lang', lang)
    return translations[lang] ?? translations['en']
}

const popup_title_element = document.querySelector('[data-i18n="popup_title"]')
const popup_copy_element = document.querySelector('[data-i18n="popup_copy"]')
const popup_download_element = document.querySelector('[data-i18n="popup_download"]')

const translation = getTranslation()
popup_title_element.innerText = translation.popup_title
popup_copy_element.innerText = translation.popup_copy 
popup_download_element.innerText = translation.popup_download

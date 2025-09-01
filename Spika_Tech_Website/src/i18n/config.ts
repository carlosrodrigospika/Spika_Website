// Configuración del sistema i18n
export const i18nConfig = {
  defaultLocale: 'es',
  locales: {
    es: 'ES',
    en: 'EN',
    dt: 'DT',
    ar: 'AR'
  },
  supportedLocales: ['es', 'en', 'dt', 'ar']
};

// Cache para las traducciones cargadas
const translationCache: Record<string, any> = {};

// Función para obtener el idioma actual
export function getCurrentLocale(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('astro-i18n-locale');
    if (saved && i18nConfig.supportedLocales.includes(saved)) {
      return saved;
    }
  }
  return i18nConfig.defaultLocale;
}

// Función para establecer el idioma
export function setLocale(locale: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('astro-i18n-locale', locale);
    // Disparar evento para notificar el cambio
    window.dispatchEvent(new CustomEvent('localeChanged', { detail: { locale } }));
  }
}

// Función para cargar traducciones
export async function loadTranslations(locale: string) {
  // Verificar si ya está en cache
  if (translationCache[locale]) {
    return translationCache[locale];
  }

  try {
    // Usar fetch para cargar el JSON desde la carpeta public
    const response = await fetch(`/i18n/translations/${locale}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const translations = await response.json();
    
    // Guardar en cache
    translationCache[locale] = translations;
    return translations;
  } catch (error) {
    // Fallback al idioma por defecto
    if (locale !== i18nConfig.defaultLocale) {
      return loadTranslations(i18nConfig.defaultLocale);
    }
    
    // Si no se puede cargar nada, devolver un objeto vacío
    return {};
  }
}

// Función helper para obtener traducción anidada
export function getNestedTranslation(obj: any, path: string): string {
  const result = path.split('.').reduce((current, key) => current?.[key], obj);
  return result || path;
}

// Función para actualizar todos los elementos con data-i18n
export async function updatePageTranslations(locale: string) {
  try {
    const translations = await loadTranslations(locale);
    
    // Actualizar elementos con data-i18n de forma más eficiente
    const elementsToUpdate = document.querySelectorAll('[data-i18n]');
    
    elementsToUpdate.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        const translation = getNestedTranslation(translations, key);
        if (translation && translation !== key && element.textContent !== translation) {
          element.textContent = translation;
        }
      }
    });

    // Actualizar elementos con data-i18n-placeholder
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (key && element instanceof HTMLInputElement) {
        const translation = getNestedTranslation(translations, key);
        if (translation && translation !== key) {
          element.placeholder = translation;
        }
      }
    });

    // Actualizar botones de idioma activo
    document.querySelectorAll('.language-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === locale) {
        btn.classList.add('text-[#CEDF00]', 'font-semibold');
      } else {
        btn.classList.remove('text-[#CEDF00]', 'font-semibold');
      }
    });

  } catch (error) {
    console.error(error);
  }
}

// Función para inicializar traducciones al cargar la página
export async function initializeTranslations() {
  const currentLocale = getCurrentLocale();
  await updatePageTranslations(currentLocale);
} 
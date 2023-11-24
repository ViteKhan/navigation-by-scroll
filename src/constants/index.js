const SECTIONS_NAMES = {
  CREDIT_PARAMS: 'creditParams',
  INSURANCE: 'insurance',
  SERVICES: 'services',
  CONTACTS: 'contacts',
  PERSONAL: 'personal',
  WORK: 'work',
};

const TITLES = {
  CREDIT_PARAMS: 'Параметры кредита',
  INSURANCE: 'Страховки',
  SERVICES: 'Услуги и сервисы',
  CONTACTS: 'Контактная информация',
  PERSONAL: 'Персональные данные',
  WORK: 'Работа и доходы',
};

export const SECTIONS = [
  {
    name: SECTIONS_NAMES.CREDIT_PARAMS,
    title: TITLES.CREDIT_PARAMS,
    elementClass: 'Section',
    activeLinkClass: 'ActiveLink',
  },
  {
    name: SECTIONS_NAMES.INSURANCE,
    title: TITLES.INSURANCE,
    elementClass: 'Section',
    activeLinkClass: 'ActiveLink',
  },
  {
    name: SECTIONS_NAMES.SERVICES,
    title: TITLES.SERVICES,
    elementClass: 'Section',
    activeLinkClass: 'ActiveLink',
  },
  {
    name: SECTIONS_NAMES.CONTACTS,
    title: TITLES.CONTACTS,
    elementClass: 'Section',
    activeLinkClass: 'ActiveLink',
  },
  {
    name: SECTIONS_NAMES.PERSONAL,
    title: TITLES.PERSONAL,
    elementClass: 'Section',
    activeLinkClass: 'ActiveLink',
  },
  {
    name: SECTIONS_NAMES.WORK,
    title: TITLES.WORK,
    elementClass: 'Section',
    activeLinkClass: 'ActiveLink',
  },
];
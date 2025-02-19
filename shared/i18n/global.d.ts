// Use type safe message keys with `next-intl`
// type EnglishMessages = (typeof import("./messages/en"))["default"];
type EnglishMessages = (typeof import('./messages/en'))['default'];
type VietnameseMessages = (typeof import('./messages/vi'))['default'];

type Messages = VietnameseMessages & EnglishMessages;

type IntlMessages = Messages;

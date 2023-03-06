import { createI18n } from "vue-i18n";
import enVN from "./locales/en-vn.json";

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof enVN;

const i18n = createI18n<[MessageSchema], "en-VN">({
  locale: "en-VN",
  messages: {
    "en-VN": enVN,
  },
});

export default i18n;

import { App } from "vue";
import * as yup from "yup";

export const trans = (label: string) => (label ? `${label} は ` : "");

export const yupLocaleJa: yup.LocaleObject = {
  mixed: {
    default: ({ label }) => ({
      key: "validations.mixed.default",
      values: { label: trans(label) },
    }),
    defined: ({ label }) => ({
      key: "validations.mixed.defined",
      values: { label: trans(label) },
    }),
    required: ({ label }) => ({
      key: "validations.mixed.required",
      values: { label: trans(label) },
    }),
    notNull: ({ label }) => ({
      key: "validations.mixed.notNull",
      values: { label: trans(label) },
    }),
    oneOf: ({ label, values }) => ({
      key: "validations.array.notOf",
      values: { label: trans(label), values },
    }),
    notOneOf: ({ label, values }) => ({
      key: "validations.array.notOneOf",
      values: { label: trans(label), values },
    }),
    notType: ({ label }) => ({
      key: "validations.mixed.notType",
      values: { label: trans(label) },
    }),
  },
  array: {
    length: ({ label, length }) => ({
      key: "validations.array.length",
      values: { label: trans(label), length },
    }),
    max: ({ label, max }) => ({
      key: "validations.array.max",
      values: { label: trans(label), max },
    }),
    min: ({ label, min }) => ({
      key: "validations.array.max",
      values: { label: trans(label), min },
    }),
    notOf: ({ label, values }) => ({
      key: "validations.array.notOf",
      values: { label: trans(label), values },
    }),
  },
  boolean: {
    isValue: ({ label }) => ({
      key: "validations.boolean.isValue",
      values: { label: trans(label) },
    }),
  },
  date: {
    min: ({ label, min }) => ({
      key: "validations.date.min",
      values: { label: trans(label), min },
    }),
    max: ({ label, max }) => ({
      key: "validations.date.max",
      values: { label: trans(label), max },
    }),
  },
  number: {
    min: ({ label, min }) => ({
      key: "validations.number.min",
      values: { label: trans(label), min },
    }),
    max: ({ label, max }) => ({
      key: "validations.number.max",
      values: { label: trans(label), max },
    }),
    lessThan: ({ label, less }) => ({
      key: "validations.number.lessThan",
      values: { label: trans(label), less },
    }),
    moreThan: ({ label, more }) => ({
      key: "validations.number.moreThan",
      values: { label: trans(label), more },
    }),
    positive: ({ label, more }) => ({
      key: "validations.number.positive",
      values: { label: trans(label), more },
    }),
    negative: ({ label, less }) => ({
      key: "validations.number.negative",
      values: { label: trans(label), less },
    }),
    integer: ({ label }) => ({
      key: "validations.number.integer",
      values: { label: trans(label) },
    }),
  },
  object: {
    noUnknown: ({ label }) => ({
      key: "validations.object.noUnknown",
      values: { label: trans(label) },
    }),
  },
  string: {
    length: ({ label, length }) => ({
      key: "validations.string.length",
      values: { label: trans(label), length },
    }),
    min: ({ label, min }) => ({
      key: "validations.string.min",
      values: { label: trans(label), min },
    }),
    max: ({ label, max }) => ({
      key: "validations.string.max",
      values: { label: trans(label), max },
    }),
    matches: ({ label, regex }) => ({
      key: "validations.string.matches",
      values: { label: trans(label), regex },
    }),
    email: ({ label, regex }) => ({
      key: "validations.string.email",
      values: { label: trans(label), regex },
    }),
    url: ({ label, regex }) => ({
      key: "validations.string.url",
      values: { label: trans(label), regex },
    }),
    uuid: ({ label, regex }) => ({
      key: "validations.string.uuid",
      values: { label: trans(label), regex },
    }),
    trim: ({ label }) => ({
      key: "validations.string.trim",
      values: { label: trans(label) },
    }),
    lowercase: ({ label }) => ({
      key: "validations.string.lowercase",
      values: { label: trans(label) },
    }),
    uppercase: ({ label }) => ({
      key: "validations.string.uppercase",
      values: { label: trans(label) },
    }),
  },
};

// Vue Plugin として実装しておくが・・・不要かも
export default {
  install: (_: App): void => {
    return;
  },
};

yup.setLocale(yupLocaleJa);

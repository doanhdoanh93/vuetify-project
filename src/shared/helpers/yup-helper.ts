/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/plugins/yup";
import { trans } from "@/plugins/yup";
import * as yup from "yup";
import i18n from "@/plugins/i18n";

const t = i18n.global.t;
const i18nKeyPrefix = "validations.original";

/**
 * yup のスキーマから、Vuetify コンポーネントの rules プロパティにバインドする検証ロジックを取得します。
 * @param schema yup の検証スキーマ。
 * @param path プロパティへのパス。form: { path: { to: { object: 'hogehoge' }}} なら、'path.to.object' となる。
 * @param form 検証対象の form オブジェクト。
 * @returns Vuetify の rules の 1要素として使用できる検証ロジック。path に指定したプロパティだけが検証される。検証エラーは複数発生する可能性があるが、最初に見つかったものだけが出力される。
 */
export function ruleForSchema<TForm extends yup.Maybe<yup.AnyObject>>(
  schema: yup.Schema<TForm>,
  path: string,
  form: TForm
): (value: any) => Promise<boolean | string> {
  return (_: any) =>
    schema
      .validateAt(path, form)
      .then((_: any) => true)
      .catch((reason: any) => {
        return t(reason.errors[0].key, reason.errors[0].values);
      });
}

/**
 * 定義済みの検証スキーマです。
 * TODO: 定義を分割したい。このままだと爆発する。
 */
export const yupSchemas = {
  /**
   * 日付の検証スキーマを取得します。
   * 空文字はエラーになりません。また、label は未設定です。
   * @param allowNoHyphens ハイフンなしの日付を許容するか。既定値は false。
   * @returns StringSchema 日付の検証スキーマ
   */
  date: (allowNoHyphens = false): yup.StringSchema => {
    const regex = allowNoHyphens
      ? /^(\d{8})|(\d{4}-\d{2}-\d{2})$/
      : /^\d{4}-\d{2}-\d{2}$/;
    return yup.string().matches(regex, {
      message: ({ label }) => ({
        key: i18nKeyPrefix.concat(".date"),
        values: { label: trans(label) },
      }),
      excludeEmptyString: true,
    });
  },

  /**
   * 電話番号の検証スキーマを取得します。
   * 空文字はエラーになりません。また、label は未設定です。
   * @param allowNoHyphens ハイフンなしの電話番号を許容するか。既定値は false。
   * @returns StringSchema 電話番号の検証スキーマ
   */
  phoneNumber: (allowNoHyphens = false): yup.StringSchema => {
    const regex = allowNoHyphens
      ? /^0(\d{9,10})|(\d{1,4}-\d{1,6}(-\d{1,5})?)$/
      : /^0(\d{1,4}-\d{1,6}(-\d{1,5})?)$/;
    return yup.string().matches(regex, {
      message: ({ label }) => ({
        key: i18nKeyPrefix.concat(".phoneNumber"),
        values: { label: trans(label) },
      }),
      excludeEmptyString: true,
    });
  },

  /**
   * 郵便番号の検証スキーマを取得します。
   *
   * 空文字はエラーになりません。また、label は未設定です。
   * 必要な場合は次のようにしてください。
   * yupSchemas.postalCode().label('宛先郵便番号');
   *
   * このとき、エラーメッセージは「宛先郵便番号は、有効な郵便番号ではありません。」のようになります。
   * 実際のメッセージの定義は、i18n の locale 設定ファイルを参照してください。
   * @param allowNoHyphens ハイフンなしの郵便番号を許容するか。既定値は false。
   * @returns StringSchema 郵便番号の検証スキーマ
   */
  postalCode: (allowNoHyphens = false): yup.StringSchema => {
    const regex = allowNoHyphens ? /^\d{3}-?\d{4}$/ : /^\d{3}-\d{4}$/;
    return yup.string().matches(regex, {
      message: ({ label }) => ({
        key: i18nKeyPrefix.concat(".postalCode"),
        values: { label: trans(label) },
      }),
      excludeEmptyString: true,
    });
  },

  /** パスワードの検証スキーマ */
  password: yup.string().required().max(128).min(14).label("パスワード"),
};

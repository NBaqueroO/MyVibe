import { useI18n } from "@/contexts/I18nContext"
export const useT = () => {
  const { t } = useI18n();
  return t;
};
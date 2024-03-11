import ContentContent from "./ContentContent/ContentContent";
import FormContent from "./FormContent/FormContent";
import MerchContent from "./MerchContent/MerchContent";

const tabs = [
  {
    id: 1,
    tabTitle: "Форма",
    content: <FormContent />
  },
  {
    id: 2,
    tabTitle: "Мерч",
    content: <MerchContent />
  },
  {
    id: 3,
    tabTitle: "Контент",
    content: <ContentContent />
  }
]

export default tabs;

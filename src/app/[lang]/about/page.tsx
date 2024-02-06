import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="mx-auto flex-col justify-center p-4">
      <h1>
        假设你买下土地并支付完建筑费用后，就决定出售该项目。你最多能卖多少钱？这是一个简单的问题。如果该项目能保证赚到
        80 万美元，那么它现在的现值应该是 747,664
        美元。这是金融市场上的投资者为了获得相同的未来回报而需要支付的金额。如果你试图以超过
        747,664 美元的价格出售，则没人会买，因为该项目提供的回报率低于政府证券的
        7%。当然，你也可以以更低的价格出售，但为什么要低于市场愿意支付的价格呢？747,664
        美元的现值是唯一可行的价格，同时满足买方和卖方的需求。因此，该项目的现值也是它的市场价格。
      </h1>
    </div>
  );
}

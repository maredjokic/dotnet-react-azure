const plans = [
  {
    title: "Monthly Plan",
    price: "$7",
    period: "per member/month",
    features: [
      "15K Images",
      "Convert 50 images at once",
      "Convert up to 10 MB size Image",
      "3X Faster Conversion",
      "24/7 live support",
      "Compatibility for multiple file formats"
    ],
    note: "Start here and scale up",
  },
  {
    title: "Yearly Plan",
    price: "$29",
    period: "per member/year",
    features: [
      "100K Images",
      "Convert 50 images at once",
      "Convert up to 10 MB size Image",
      "3X Faster Conversion",
      "24/7 live support",
      "Compatibility for multiple file formats"
    ]
  },
  {
    title: "Life Time",
    price: "$49",
    period: "per member/Lifetime",
    features: [
      "200K Images (5 years validity)",
      "Convert 50 images at once",
      "Convert up to 10 MB size Image",
      "3X Faster Conversion",
      "24/7 live support",
      "Compatibility for multiple file formats"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 transition-colors duration-300">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Premium Plans & Pricing</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Pick a plan that fits your needs to unlock premium features.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-300 dark:border-gray-700 flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-1">{plan.title}</h2>
              <p className="text-gray-700 dark:text-gray-400 mb-4">{plan.period}</p>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.note && <p className="text-sm text-gray-500 dark:text-gray-400 italic">{plan.note}</p>}
            </div>
            <button className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 rounded text-white font-semibold transition-colors duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm uppercase tracking-wide mb-2">Approved Payment Methods</p>
        <p className="text-sm">Visa, MasterCard, PayPal, and more...</p>
      </div>
    </div>
  );
};
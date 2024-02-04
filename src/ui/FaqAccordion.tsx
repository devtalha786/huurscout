'use client';
import { Accordion } from '@mantine/core';
const groceries = [
  {
    value: 'Kunnen jullie me helpen met het vinden van een woning?',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    value: 'Vehuren jullie ook woningen?',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    value: 'Wat is jullie inkomenseis',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
  {
    value: 'Moet ik jullie ook comissie betalen?',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
  {
    value: 'Hoe werkt Huurscout?',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
  {
    value: 'Vehuren jullie ook woningen?',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
  {
    value: 'Wat is jullie inkomenseis',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
  {
    value: 'Hoe werkt Huurscout?',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];

export const FaqAccordion = () => {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value} sx={{ background: '#FBF4EA' }}>
      <Accordion.Control className="poppins-medium text-[14px] leading-[19.6px]  text-[#0F172A]">
        {item.value}
      </Accordion.Control>
      <Accordion.Panel className="poppins-medium text-[14px] leading-[19.6px]  text-[#0F172A]">
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion variant="separated" radius="md" defaultValue="Apples" sx={{ width: '100%' }}>
      {items}
    </Accordion>
  );
};

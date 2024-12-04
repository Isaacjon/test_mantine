import { 
  Container, 
  Stack, 
  Title, 
  Text, 
  Group, 
  UnstyledButton, 
  Box,
  Accordion,
  Image
} from '@mantine/core';

import styles from './styles.module.css'

const footerLinks = {
  buyers: {
    title: 'Покупателям',
    links: [
      { label: 'Каталог', href: '#' },
      { label: 'Услуги', href: '#' },
      { label: 'Доставка и самовывоз', href: '#' },
      { label: 'Вопросы и ответы', href: '#' },
      { label: 'Клиентская поддержка', href: '#' },
    ]
  },
  company: {
    title: 'Компания',
    links: [
      { label: 'Наши вакансии', href: '#' },
      { label: 'Наша компания', href: '#' },
      { label: 'Контакты', href: '#' },
    ]
  },
  legal: {
    links: [
      { label: 'Политика обработки персональных данных', href: '#' },
      { label: 'Правила продажи', href: '#' },
    ]
  }
};

const socialLinks = [
  { icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png', label: 'Facebook', href: '#' },
  { icon: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png', label: 'YouTube', href: '#' },
];

export const Footer = () => {
  return (
    <Box bg="#21282b" p="32px 16px" style={{ color: 'white' }}>
        {/* Mobile Version */}
        <Box hiddenFrom="sm">
          <Accordion chevronSize={25} variant="filled" defaultValue="buyers" classNames={styles}>
            <Accordion.Item   bg="transparent" value="buyers">
              <Accordion.Control >
                <Text size="lg" c="white" fw={500}>{footerLinks.buyers.title}</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack spacing="md">
                  {footerLinks.buyers.links.map((link) => (
                    <UnstyledButton 
                      key={link.label}
                      component="a"
                      href={link.href}
                    >
                      <Text c="gray.3">{link.label}</Text>
                    </UnstyledButton>
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item bg="transparent" value="company">
              <Accordion.Control>
                <Text size="lg" c="white" fw={500}>{footerLinks.company.title}</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack spacing="md">
                  {footerLinks.company.links.map((link) => (
                    <UnstyledButton 
                      key={link.label}
                      component="a"
                      href={link.href}
                    >
                      <Text c="gray.3">{link.label}</Text>
                    </UnstyledButton>
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Box>

        {/* Desktop Version */}
        {/* <Box visibleFrom="sm">
          <Group align="flex-start" grow>
            <Stack>
              <Title order={3}>{footerLinks.buyers.title}</Title>
              <Stack spacing="md">
                {footerLinks.buyers.links.map((link) => (
                  <UnstyledButton 
                    key={link.label}
                    component="a"
                    href={link.href}
                  >
                    <Text c="gray.3">{link.label}</Text>
                  </UnstyledButton>
                ))}
              </Stack>
            </Stack>

            <Stack>
              <Title order={3}>{footerLinks.company.title}</Title>
              <Stack spacing="md">
                {footerLinks.company.links.map((link) => (
                  <UnstyledButton 
                    key={link.label}
                    component="a"
                    href={link.href}
                  >
                    <Text c="gray.3">{link.label}</Text>
                  </UnstyledButton>
                ))}
              </Stack>
            </Stack>
          </Group>
        </Box> */}

        {/* Social Media & Legal - Both Mobile & Desktop */}
        <Box mt={40}>
          <Group spacing="md" pb="40px" style={{borderBottom: '1px solid #444'}}>
            {socialLinks.map((social) => (
              <UnstyledButton 
                key={social.label}
                component="a"
                href={social.href}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={40}
                  height={40}
                />
              </UnstyledButton>
            ))}
          </Group>

          <Stack mt={30} spacing="md">
            {footerLinks.legal.links.map((link) => (
              <UnstyledButton 
                key={link.label}
                component="a"
                href={link.href}
              >
                <Text c="gray.6" size="sm">{link.label}</Text>
              </UnstyledButton>
            ))}
          </Stack>

          {/* Payment Methods */}
          <Box mt={30}>
            <Group>
              <Image
                src="https://w7.pngwing.com/pngs/305/373/png-transparent-logo-mastercard-font-solar-home-text-orange-logo-thumbnail.png"
                alt="Visa/Mastercard"
                width={40}
                height={25}
              />
              <Image
                src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_card_visa-512.png"
                alt="Visa/Mastercard"
                width={60}
                height={40}
              />
            </Group>
          </Box>
        </Box>
    </Box>
  );
}
